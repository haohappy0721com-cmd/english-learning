# English Mastery - CET-4/6 Vocabulary

An interactive English learning platform with Node.js backend, SQLite database, and user progress tracking.

## How to Run

1. Double-click `start.bat`
2. Open http://localhost:3000 in your browser
3. Admin panel: http://localhost:3000/admin

Or start manually:
```
cd server
node server.js
```

## Features

- 400 CET-4/6 vocabulary words with phonetics, Chinese definitions, and example sentences
- Grammar exercises (tenses, prepositions, articles, conjunctions)
- Reading comprehension (easy/medium/hard)
- Mixed quiz mode
- User registration/login with JWT authentication
- Server-side progress tracking and sync
- Admin panel for word management (add, edit, delete, batch import)
- Study statistics dashboard
- SQLite database (zero configuration)
- Dark/light theme toggle

## Project Structure

```
english-learning/
├── index.html            Main frontend
├── start.bat             One-click server launcher
├── css/style.css         Frontend styles
├── js/
│   ├── api.js            Backend API client
│   └── app.js            Frontend logic + vocabulary data
├── admin/
│   └── admin.html        Word management panel
└── server/
    ├── server.js         Express entry point
    ├── db.js             SQLite database setup
    ├── seed-full.js      Import vocabulary to database
    ├── middleware/auth.js JWT authentication
    └── routes/
        ├── auth.js       Register/login
        ├── vocabulary.js Word CRUD API
        ├── progress.js   Learning progress API
        └── stats.js      Statistics API
```

## API Endpoints

- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Current user
- `GET /api/vocabulary?category=&search=&limit=&offset=` - List words
- `GET /api/vocabulary/categories` - Categories
- `POST /api/vocabulary` - Add word
- `PUT /api/vocabulary/:id` - Update word
- `DELETE /api/vocabulary/:id` - Delete word
- `POST /api/vocabulary/batch` - Batch import
- `POST /api/progress/learned` - Mark learned
- `GET /api/progress/summary` - Progress summary
- `POST /api/progress/session` - Record study
- `POST /api/progress/quiz` - Save quiz result
- `GET /api/stats/dashboard` - Statistics
