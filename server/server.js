const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');
const vocabRoutes = require('./routes/vocabulary');
const progressRoutes = require('./routes/progress');
const statsRoutes = require('./routes/stats');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '..')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/vocabulary', vocabRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/stats', statsRoutes);

// Serve admin page
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'admin', 'admin.html'));
});

// Catch-all: serve index.html for SPA
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Admin panel: http://localhost:${PORT}/admin`);
  console.log(`Frontend: http://localhost:${PORT}`);
});
