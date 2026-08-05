const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const { JWT_SECRET } = require('../middleware/auth');

const router = express.Router();

// Register
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: '请填写用户名、邮箱和密码' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: '密码至少6位' });
  }

  const existing = db.prepare('SELECT id FROM users WHERE username = ? OR email = ?').get(username, email);
  if (existing) {
    return res.status(400).json({ error: '用户名或邮箱已被注册' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const result = db.prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)').run(username, email, hashedPassword);

  const token = jwt.sign({ id: result.lastInsertRowid, username, isAdmin: false }, JWT_SECRET, { expiresIn: '7d' });

  res.json({
    token,
    user: { id: result.lastInsertRowid, username, email }
  });
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: '请输入用户名和密码' });
  }

  const user = db.prepare('SELECT * FROM users WHERE username = ? OR email = ?').get(username, username);
  if (!user) {
    return res.status(400).json({ error: '用户名或密码错误' });
  }

  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) {
    return res.status(400).json({ error: '用户名或密码错误' });
  }

  const token = jwt.sign({ id: user.id, username: user.username, isAdmin: false }, JWT_SECRET, { expiresIn: '7d' });

  res.json({
    token,
    user: { id: user.id, username: user.username, email: user.email }
  });
});

// Get current user info
router.get('/me', require('../middleware/auth').authMiddleware, (req, res) => {
  const user = db.prepare('SELECT id, username, email, created_at FROM users WHERE id = ?').get(req.user.id);
  if (!user) {
    return res.status(404).json({ error: '用户不存在' });
  }
  res.json({ user });
});

module.exports = router;
