const express = require('express');
const db = require('../db');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// Mark word as learned
router.post('/learned', authMiddleware, (req, res) => {
  const { wordId } = req.body;
  if (!wordId) {
    return res.status(400).json({ error: '请提供单词ID' });
  }

  const existing = db.prepare('SELECT * FROM user_words WHERE user_id = ? AND word_id = ?').get(req.user.id, wordId);

  if (existing) {
    db.prepare(
      'UPDATE user_words SET learned = 1, learned_at = CURRENT_TIMESTAMP, review_count = review_count + 1, last_reviewed_at = CURRENT_TIMESTAMP WHERE user_id = ? AND word_id = ?'
    ).run(req.user.id, wordId);
  } else {
    db.prepare(
      'INSERT INTO user_words (user_id, word_id, learned, learned_at, review_count, last_reviewed_at) VALUES (?, ?, 1, CURRENT_TIMESTAMP, 1, CURRENT_TIMESTAMP)'
    ).run(req.user.id, wordId);
  }

  res.json({ message: '已标记为已学' });
});

// Unmark word
router.post('/unlearn', authMiddleware, (req, res) => {
  const { wordId } = req.body;
  db.prepare(
    'UPDATE user_words SET learned = 0, learned_at = NULL WHERE user_id = ? AND word_id = ?'
  ).run(req.user.id, wordId);
  res.json({ message: '已取消标记' });
});

// Get user progress summary
router.get('/summary', authMiddleware, (req, res) => {
  const userId = req.user.id;

  const totalWords = db.prepare('SELECT COUNT(*) as count FROM vocabulary').get();
  const learnedWords = db.prepare('SELECT COUNT(*) as count FROM user_words WHERE user_id = ? AND learned = 1').get(userId);

  // Today's study
  const today = new Date().toISOString().split('T')[0];
  const todaySession = db.prepare('SELECT * FROM study_sessions WHERE user_id = ? AND date = ?').get(userId, today);
  const todayWords = todaySession ? todaySession.words_studied : 0;

  // Streak calculation
  const sessions = db.prepare(
    'SELECT date FROM study_sessions WHERE user_id = ? ORDER BY date DESC LIMIT 30'
  ).all(userId);

  let streak = 0;
  if (sessions.length > 0) {
    const dates = sessions.map(s => s.date);
    const todayDate = new Date(today);
    let checkDate = todayDate;

    // If no session today, start checking from yesterday
    if (dates[0] !== today) {
      checkDate = new Date(todayDate.getTime() - 86400000);
    }

    for (let i = 0; i < 30; i++) {
      const dateStr = checkDate.toISOString().split('T')[0];
      if (dates.includes(dateStr)) {
        streak++;
        checkDate = new Date(checkDate.getTime() - 86400000);
      } else {
        break;
      }
    }
  }

  // Total quizzes
  const quizCount = db.prepare('SELECT COUNT(*) as count FROM quiz_results WHERE user_id = ?').get(userId);
  const quizAccuracy = db.prepare(
    'SELECT SUM(score) as correct, SUM(total) as total FROM quiz_results WHERE user_id = ?'
  ).get(userId);

  const accuracy = quizAccuracy.total > 0 ? Math.round((quizAccuracy.correct / quizAccuracy.total) * 100) : 0;

  // Learned by category
  const byCategory = db.prepare(`
    SELECT v.category, COUNT(*) as learned_count
    FROM user_words uw
    JOIN vocabulary v ON uw.word_id = v.id
    WHERE uw.user_id = ? AND uw.learned = 1
    GROUP BY v.category
    ORDER BY v.category
  `).all(userId);

  // Total words by category
  const totalByCategory = db.prepare(`
    SELECT category, COUNT(*) as total
    FROM vocabulary
    GROUP BY category
    ORDER BY category
  `).all();

  res.json({
    totalWords: totalWords.count,
    learnedWords: learnedWords.count,
    todayWords,
    streak,
    quizCount: quizCount.count,
    accuracy,
    byCategory,
    totalByCategory,
  });
});

// Record study session
router.post('/session', authMiddleware, (req, res) => {
  const { wordsStudied, durationMinutes } = req.body;
  const today = new Date().toISOString().split('T')[0];

  const existing = db.prepare('SELECT * FROM study_sessions WHERE user_id = ? AND date = ?').get(req.user.id, today);

  if (existing) {
    db.prepare(
      'UPDATE study_sessions SET words_studied = words_studied + ?, duration_minutes = duration_minutes + ? WHERE id = ?'
    ).run(wordsStudied || 0, durationMinutes || 0, existing.id);
  } else {
    db.prepare(
      'INSERT INTO study_sessions (user_id, date, words_studied, duration_minutes) VALUES (?, ?, ?, ?)'
    ).run(req.user.id, today, wordsStudied || 0, durationMinutes || 0);
  }

  res.json({ message: '学习记录已更新' });
});

// Save quiz result
router.post('/quiz', authMiddleware, (req, res) => {
  const { score, total, type } = req.body;
  db.prepare('INSERT INTO quiz_results (user_id, score, total, type) VALUES (?, ?, ?, ?)').run(req.user.id, score, total, type || 'mixed');
  res.json({ message: '测验结果已保存' });
});

module.exports = router;
