const express = require('express');
const db = require('../db');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// Get detailed stats
router.get('/dashboard', authMiddleware, (req, res) => {
  const userId = req.user.id;

  // Weekly study activity
  const weeklyActivity = db.prepare(`
    SELECT date, words_studied, duration_minutes
    FROM study_sessions
    WHERE user_id = ? AND date >= date('now', '-7 days')
    ORDER BY date
  `).all(userId);

  // Monthly quiz performance
  const monthlyQuizzes = db.prepare(`
    SELECT score, total, type, created_at
    FROM quiz_results
    WHERE user_id = ? AND created_at >= datetime('now', '-30 days')
    ORDER BY created_at DESC
    LIMIT 20
  `).all(userId);

  // Category progress
  const categoryProgress = db.prepare(`
    SELECT v.category,
           COUNT(DISTINCT v.id) as total,
           COUNT(DISTINCT CASE WHEN uw.learned = 1 THEN v.id END) as learned
    FROM vocabulary v
    LEFT JOIN user_words uw ON v.id = uw.word_id AND uw.user_id = ?
    GROUP BY v.category
    ORDER BY v.category
  `).all(userId);

  // Total stats
  const totalStats = db.prepare(`
    SELECT
      (SELECT COUNT(*) FROM vocabulary) as total_words,
      (SELECT COUNT(*) FROM user_words WHERE user_id = ? AND learned = 1) as learned_words,
      (SELECT COUNT(DISTINCT date) FROM study_sessions WHERE user_id = ?) as total_study_days,
      (SELECT COALESCE(SUM(duration_minutes), 0) FROM study_sessions WHERE user_id = ?) as total_minutes,
      (SELECT COUNT(*) FROM quiz_results WHERE user_id = ?) as total_quizzes,
      (SELECT COALESCE(ROUND(SUM(score)*100.0/NULLIF(SUM(total),0), 1), 0) FROM quiz_results WHERE user_id = ?) as overall_accuracy
  `).get(userId, userId, userId, userId, userId);

  res.json({
    weeklyActivity,
    monthlyQuizzes,
    categoryProgress,
    totalStats
  });
});

// Get study heatmap data (last 90 days)
router.get('/heatmap', authMiddleware, (req, res) => {
  const activity = db.prepare(`
    SELECT date, words_studied, duration_minutes
    FROM study_sessions
    WHERE user_id = ? AND date >= date('now', '-90 days')
    ORDER BY date
  `).all(req.user.id);

  res.json({ activity });
});

module.exports = router;
