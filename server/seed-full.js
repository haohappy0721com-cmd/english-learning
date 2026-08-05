// Full seed: reads vocabularyData from ../js/app.js and imports all words into SQLite
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const db = require('./db');

// Read app.js
const appJs = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf-8');

// Extract vocabularyData object using a sandboxed VM
const sandbox = { module: { exports: {} }, console: console };
vm.createContext(sandbox);
try {
  vm.runInContext(appJs, sandbox);
} catch (e) {
  // The full app.js references DOM APIs etc., so it will throw.
  // That's OK — we just need the vocabularyData that was defined before the error.
}

// Alternative: use regex to extract the JSON-like data
const vocabMatch = appJs.match(/const vocabularyData = ([\s\S]*?);\s*\n\s*\/\/ ---------- Grammar/);
if (!vocabMatch) {
  console.error('Could not extract vocabularyData from app.js');
  process.exit(1);
}

// Parse the object literal into something we can use
// Since it's valid JS object syntax, we can eval it in a controlled way
const vocabStr = vocabMatch[1];
const vocabularyData = eval('(' + vocabStr + ')');

const insert = db.prepare(
  'INSERT OR IGNORE INTO vocabulary (word, phonetic, pos, meaning, example, level, category) VALUES (?, ?, ?, ?, ?, ?, ?)'
);

const insertAll = db.transaction((entries) => {
  let count = 0;
  for (const entry of entries) {
    const result = insert.run(
      entry.word, entry.phonetic, entry.pos, entry.meaning, entry.example, entry.level, entry.word.slice(0, 1) // category from the group
    );
    if (result.changes > 0) count++;
  }
  return count;
});

let totalCount = 0;
// Process each group and use the group name as the category
for (const [groupName, words] of Object.entries(vocabularyData)) {
  const wordsWithCategory = words.map(w => ({ ...w, category: groupName }));
  const count = insertAll(wordsWithCategory);
  totalCount += count;
  console.log(`  ${groupName}: ${count} words imported`);
}

console.log(`\nTotal: ${totalCount} words seeded into database.`);
console.log(`Database count: ${db.prepare('SELECT COUNT(*) as count FROM vocabulary').get().count}`);
