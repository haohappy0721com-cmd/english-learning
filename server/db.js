const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'english_learning.db');
const db = new Database(dbPath);

// Enable WAL mode for better concurrent performance
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS vocabulary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    word TEXT NOT NULL,
    phonetic TEXT,
    pos TEXT,
    meaning TEXT,
    example TEXT,
    level TEXT,
    category TEXT
  );

  CREATE TABLE IF NOT EXISTS user_words (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    word_id INTEGER NOT NULL,
    learned INTEGER DEFAULT 0,
    learned_at DATETIME,
    review_count INTEGER DEFAULT 0,
    last_reviewed_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (word_id) REFERENCES vocabulary(id),
    UNIQUE(user_id, word_id)
  );

  CREATE TABLE IF NOT EXISTS quiz_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    score INTEGER NOT NULL,
    total INTEGER NOT NULL,
    type TEXT DEFAULT 'mixed',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS study_sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    date TEXT NOT NULL,
    words_studied INTEGER DEFAULT 0,
    duration_minutes INTEGER DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE INDEX IF NOT EXISTS idx_user_words_user ON user_words(user_id);
  CREATE INDEX IF NOT EXISTS idx_user_words_word ON user_words(word_id);
  CREATE INDEX IF NOT EXISTS idx_quiz_results_user ON quiz_results(user_id);
  CREATE INDEX IF NOT EXISTS idx_study_sessions_user ON study_sessions(user_id);
  CREATE INDEX IF NOT EXISTS idx_vocab_category ON vocabulary(category);
  CREATE INDEX IF NOT EXISTS idx_vocab_level ON vocabulary(level);
`);

// Count vocabulary entries
const vocabCount = db.prepare('SELECT COUNT(*) as count FROM vocabulary').get();
console.log(`Database ready. Vocabulary count: ${vocabCount.count}`);

module.exports = db;
