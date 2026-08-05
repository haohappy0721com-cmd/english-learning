const express = require('express');
const db = require('../db');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// Get vocabulary list (public or with user progress)
router.get('/', authMiddleware, (req, res) => {
  const { category, search, limit = 50, offset = 0 } = req.query;

  let query = 'SELECT v.*, uw.learned, uw.review_count FROM vocabulary v LEFT JOIN user_words uw ON v.id = uw.word_id AND uw.user_id = ?';
  const params = [req.user.id];
  const conditions = [];

  if (category) {
    conditions.push('v.category = ?');
    params.push(category);
  }
  if (search) {
    conditions.push('(v.word LIKE ? OR v.meaning LIKE ?)');
    params.push(`%${search}%`, `%${search}%`);
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }

  query += ' ORDER BY v.id LIMIT ? OFFSET ?';
  params.push(parseInt(limit), parseInt(offset));

  const words = db.prepare(query).all(...params);
  const total = db.prepare('SELECT COUNT(*) as count FROM vocabulary').get();

  // Get categories list
  const categories = db.prepare('SELECT DISTINCT category FROM vocabulary ORDER BY category').all();

  res.json({ words, total: total.count, categories: categories.map(c => c.category) });
});

// Get vocabulary categories (no auth needed)
router.get('/categories', (req, res) => {
  const categories = db.prepare('SELECT DISTINCT category FROM vocabulary ORDER BY category').all();
  res.json({ categories: categories.map(c => c.category) });
});

// Get single word
router.get('/:id', authMiddleware, (req, res) => {
  const word = db.prepare(`
    SELECT v.*, uw.learned, uw.review_count, uw.learned_at
    FROM vocabulary v
    LEFT JOIN user_words uw ON v.id = uw.word_id AND uw.user_id = ?
    WHERE v.id = ?
  `).get(req.user.id, req.params.id);

  if (!word) {
    return res.status(404).json({ error: '单词不存在' });
  }
  res.json({ word });
});

// Admin: Add word
router.post('/', authMiddleware, (req, res) => {
  const { word, phonetic, pos, meaning, example, level, category } = req.body;
  if (!word || !meaning) {
    return res.status(400).json({ error: '单词和释义不能为空' });
  }

  const result = db.prepare(
    'INSERT INTO vocabulary (word, phonetic, pos, meaning, example, level, category) VALUES (?, ?, ?, ?, ?, ?, ?)'
  ).run(word, phonetic || '', pos || '', meaning, example || '', level || '', category || '');

  res.json({ id: result.lastInsertRowid, message: '添加成功' });
});

// Admin: Update word
router.put('/:id', authMiddleware, (req, res) => {
  const { word, phonetic, pos, meaning, example, level, category } = req.body;
  const existing = db.prepare('SELECT id FROM vocabulary WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: '单词不存在' });
  }

  db.prepare(
    'UPDATE vocabulary SET word=?, phonetic=?, pos=?, meaning=?, example=?, level=?, category=? WHERE id=?'
  ).run(word, phonetic || '', pos || '', meaning, example || '', level || '', category || '', req.params.id);

  res.json({ message: '更新成功' });
});

// Admin: Delete word
router.delete('/:id', authMiddleware, (req, res) => {
  const existing = db.prepare('SELECT id FROM vocabulary WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: '单词不存在' });
  }

  db.prepare('DELETE FROM user_words WHERE word_id = ?').run(req.params.id);
  db.prepare('DELETE FROM vocabulary WHERE id = ?').run(req.params.id);

  res.json({ message: '删除成功' });
});

// Batch import words
router.post('/batch', authMiddleware, (req, res) => {
  const { words } = req.body;
  if (!words || !Array.isArray(words) || words.length === 0) {
    return res.status(400).json({ error: '请提供单词列表' });
  }

  const insert = db.prepare(
    'INSERT OR IGNORE INTO vocabulary (word, phonetic, pos, meaning, example, level, category) VALUES (?, ?, ?, ?, ?, ?, ?)'
  );

  const insertMany = db.transaction((words) => {
    let count = 0;
    for (const w of words) {
      const result = insert.run(w.word, w.phonetic || '', w.pos || '', w.meaning, w.example || '', w.level || '', w.category || '');
      if (result.changes > 0) count++;
    }
    return count;
  });

  const count = insertMany(words);
  res.json({ message: `成功导入 ${count} 个单词`, count });
});

module.exports = router;
