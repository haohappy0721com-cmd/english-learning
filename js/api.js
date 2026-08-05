// ============================================================
// API Client - Communicates with the Express backend
// ============================================================

// Auto-detect: use cloud API on GitHub Pages, localhost otherwise
const API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:3000/api'
  : 'https://english-learning-server.onrender.com/api';
let authToken = localStorage.getItem('authToken');
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

function apiHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  if (authToken) headers['Authorization'] = 'Bearer ' + authToken;
  return headers;
}

async function api(path, options = {}) {
  const url = API_BASE + path;
  const res = await fetch(url, { ...options, headers: { ...apiHeaders(), ...options.headers } });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

// Auth
const Auth = {
  async register(username, email, password) {
    const data = await api('/auth/register', { method: 'POST', body: JSON.stringify({ username, email, password }) });
    authToken = data.token;
    currentUser = data.user;
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    return data;
  },
  async login(username, password) {
    const data = await api('/auth/login', { method: 'POST', body: JSON.stringify({ username, password }) });
    authToken = data.token;
    currentUser = data.user;
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    return data;
  },
  logout() {
    authToken = null;
    currentUser = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
  },
  isLoggedIn() { return !!authToken; },
  getUser() { return currentUser; }
};

// Vocabulary API
const VocabAPI = {
  async getWords(category, page = 1, limit = 50) {
    const params = new URLSearchParams({ limit, offset: (page - 1) * limit });
    if (category) params.set('category', category);
    return await api('/vocabulary?' + params);
  },
  async getCategories() {
    return await api('/vocabulary/categories');
  },
  async markLearned(wordId) {
    return await api('/progress/learned', { method: 'POST', body: JSON.stringify({ wordId }) });
  },
};

// Progress API
const ProgressAPI = {
  async getSummary() {
    return await api('/progress/summary');
  },
  async recordSession(wordsStudied, durationMinutes) {
    return await api('/progress/session', { method: 'POST', body: JSON.stringify({ wordsStudied, durationMinutes }) });
  },
  async saveQuizResult(score, total, type) {
    return await api('/progress/quiz', { method: 'POST', body: JSON.stringify({ score, total, type }) });
  },
};

// Stats API
const StatsAPI = {
  async getDashboard() {
    return await api('/stats/dashboard');
  },
};
