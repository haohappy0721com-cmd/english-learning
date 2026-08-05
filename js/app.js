// ============================================================
// English Mastery - App Logic
// ============================================================

// ---------- Data ----------

const vocabularyData = {
  beginner: [
    { word: 'abandon', phonetic: '/əˈbændən/', pos: 'verb', meaning: '放弃；抛弃', example: 'They had to abandon the plan due to bad weather.', level: 'Beginner' },
    { word: 'brilliant', phonetic: '/ˈbrɪliənt/', pos: 'adjective', meaning: '杰出的；明亮的', example: 'She came up with a brilliant idea for the project.', level: 'Beginner' },
    { word: 'celebrate', phonetic: '/ˈselɪbreɪt/', pos: 'verb', meaning: '庆祝', example: 'We will celebrate her birthday this weekend.', level: 'Beginner' },
    { word: 'dangerous', phonetic: '/ˈdeɪndʒərəs/', pos: 'adjective', meaning: '危险的', example: 'It is dangerous to swim in this river.', level: 'Beginner' },
    { word: 'enormous', phonetic: '/ɪˈnɔːrməs/', pos: 'adjective', meaning: '巨大的', example: 'The elephant was enormous compared to the car.', level: 'Beginner' },
    { word: 'frequent', phonetic: '/ˈfriːkwənt/', pos: 'adjective', meaning: '频繁的', example: 'She makes frequent trips to the library.', level: 'Beginner' },
    { word: 'generous', phonetic: '/ˈdʒenərəs/', pos: 'adjective', meaning: '慷慨的', example: 'He made a generous donation to the charity.', level: 'Beginner' },
    { word: 'hesitate', phonetic: '/ˈhezɪteɪt/', pos: 'verb', meaning: '犹豫', example: 'Do not hesitate to contact us if you need help.', level: 'Beginner' },
    { word: 'immediate', phonetic: '/ɪˈmiːdiət/', pos: 'adjective', meaning: '立即的', example: 'We need an immediate response to this issue.', level: 'Beginner' },
    { word: 'journey', phonetic: '/ˈdʒɜːrni/', pos: 'noun', meaning: '旅程', example: 'The journey took about three hours by train.', level: 'Beginner' },
  ],
  intermediate: [
    { word: 'ambiguous', phonetic: '/æmˈbɪɡjuəs/', pos: 'adjective', meaning: '模棱两可的', example: 'The contract language was deliberately ambiguous.', level: 'Intermediate' },
    { word: 'benevolent', phonetic: '/bəˈnevələnt/', pos: 'adjective', meaning: '仁慈的；慈善的', example: 'The benevolent donor funded the entire scholarship program.', level: 'Intermediate' },
    { word: 'conscientious', phonetic: '/ˌkɒnʃiˈenʃəs/', pos: 'adjective', meaning: '认真负责的', example: 'She is a conscientious worker who never misses deadlines.', level: 'Intermediate' },
    { word: 'deteriorate', phonetic: '/dɪˈtɪəriəreɪt/', pos: 'verb', meaning: '恶化；退化', example: 'His health began to deteriorate after the accident.', level: 'Intermediate' },
    { word: 'elaborate', phonetic: '/ɪˈlæbərət/', pos: 'adjective/verb', meaning: '精心的；详细阐述', example: 'Could you elaborate on your proposal?', level: 'Intermediate' },
    { word: 'fluctuate', phonetic: '/ˈflʌktʃueɪt/', pos: 'verb', meaning: '波动；起伏', example: 'Stock prices fluctuate throughout the trading day.', level: 'Intermediate' },
    { word: 'hypothesis', phonetic: '/haɪˈpɒθəsɪs/', pos: 'noun', meaning: '假设；假说', example: 'The scientist tested her hypothesis through experiments.', level: 'Intermediate' },
    { word: 'inevitable', phonetic: '/ɪnˈevɪtəbl/', pos: 'adjective', meaning: '不可避免的', example: 'Change is an inevitable part of life.', level: 'Intermediate' },
    { word: 'meticulous', phonetic: '/məˈtɪkjələs/', pos: 'adjective', meaning: '一丝不苟的', example: 'He is meticulous about keeping his workspace organized.', level: 'Intermediate' },
    { word: 'prevalent', phonetic: '/ˈprevələnt/', pos: 'adjective', meaning: '普遍的；盛行的', example: 'This attitude is still prevalent among older generations.', level: 'Intermediate' },
  ],
  advanced: [
    { word: 'aberration', phonetic: '/ˌæbəˈreɪʃən/', pos: 'noun', meaning: '异常；偏差', example: 'The warm weather in January was an aberration from the norm.', level: 'Advanced' },
    { word: 'cacophony', phonetic: '/kəˈkɒfəni/', pos: 'noun', meaning: '刺耳的声音', example: 'A cacophony of car horns filled the busy street.', level: 'Advanced' },
    { word: 'dichotomy', phonetic: '/daɪˈkɒtəmi/', pos: 'noun', meaning: '二分法；对立', example: 'There is a dichotomy between his public and private persona.', level: 'Advanced' },
    { word: 'ephemeral', phonetic: '/ɪˈfemərəl/', pos: 'adjective', meaning: '短暂的；转瞬即逝的', example: 'The beauty of cherry blossoms is ephemeral.', level: 'Advanced' },
    { word: 'facetious', phonetic: '/fəˈsiːʃəs/', pos: 'adjective', meaning: '乱开玩笑的', example: 'He made a facetious remark that upset the guests.', level: 'Advanced' },
    { word: 'gregarious', phonetic: '/ɡrɪˈɡeəriəs/', pos: 'adjective', meaning: '爱社交的', example: 'She is a gregarious person who makes friends easily.', level: 'Advanced' },
    { word: 'idiosyncrasy', phonetic: '/ˌɪdiəˈsɪŋkrəsi/', pos: 'noun', meaning: '特质；癖好', example: 'One of his idiosyncrasies is humming while he works.', level: 'Advanced' },
    { word: 'juxtapose', phonetic: '/ˌdʒʌkstəˈpəʊz/', pos: 'verb', meaning: '并列；对比', example: 'The exhibition juxtaposes modern art with classic pieces.', level: 'Advanced' },
    { word: 'loquacious', phonetic: '/ləˈkweɪʃəs/', pos: 'adjective', meaning: '多话的', example: 'The loquacious host talked for nearly two hours.', level: 'Advanced' },
    { word: 'perfunctory', phonetic: '/pərˈfʌŋktəri/', pos: 'adjective', meaning: '敷衍的', example: 'He gave a perfunctory nod and walked away.', level: 'Advanced' },
  ],
};

const grammarData = {
  tenses: [
    { question: 'She ___ to school every day.', options: ['go', 'goes', 'going', 'gone'], answer: 1, explanation: 'Third person singular (she) requires "goes" in present simple tense.' },
    { question: 'They ___ a movie when I arrived.', options: ['watch', 'watched', 'were watching', 'have watched'], answer: 2, explanation: 'Past continuous ("were watching") describes an action in progress when another action ("arrived") occurred.' },
    { question: 'By next year, I ___ here for ten years.', options: ['work', 'worked', 'will have worked', 'am working'], answer: 2, explanation: 'Future perfect ("will have worked") expresses an action that will be completed before a specific future time.' },
    { question: 'He ___ his homework yet.', options: ['did not finish', 'has not finished', 'does not finish', 'had not finished'], answer: 1, explanation: 'Present perfect ("has not finished") with "yet" indicates an unfinished action up to now.' },
    { question: 'If I ___ rich, I would travel the world.', options: ['am', 'was', 'were', 'be'], answer: 2, explanation: 'In second conditional (unreal present), we use "were" for all persons.' },
  ],
  prepositions: [
    { question: 'She is good ___ playing the piano.', options: ['at', 'in', 'on', 'for'], answer: 0, explanation: '"Good at" is the correct collocation for skills and abilities.' },
    { question: 'I will meet you ___ the airport.', options: ['in', 'on', 'at', 'to'], answer: 2, explanation: 'We use "at" for specific locations like airport, station, school.' },
    { question: 'He has been working here ___ 2015.', options: ['for', 'since', 'from', 'in'], answer: 1, explanation: '"Since" is used with a specific point in time (2015). "For" would be used with a duration.' },
    { question: 'The book is ___ the table.', options: ['in', 'at', 'on', 'above'], answer: 2, explanation: '"On" is used when something is in contact with a surface.' },
    { question: 'She is interested ___ learning Japanese.', options: ['at', 'for', 'in', 'on'], answer: 2, explanation: '"Interested in" is the correct collocation.' },
  ],
  articles: [
    { question: '___ sun rises in the east.', options: ['A', 'An', 'The', 'No article'], answer: 2, explanation: '"The" is used for unique things — there is only one sun.' },
    { question: 'She is ___ honest person.', options: ['a', 'an', 'the', 'no article'], answer: 1, explanation: '"An" is used before vowel sounds. "Honest" starts with a silent h, so the first sound is a vowel.' },
    { question: 'I saw ___ owl in the tree last night.', options: ['a', 'an', 'the', 'no article'], answer: 1, explanation: '"An" is used before vowel sounds. "Owl" starts with a vowel sound.' },
    { question: '___ water is essential for life.', options: ['A', 'An', 'The', 'No article'], answer: 3, explanation: 'No article is used when talking about uncountable nouns in a general sense.' },
    { question: 'He is ___ tallest boy in the class.', options: ['a', 'an', 'the', 'no article'], answer: 2, explanation: '"The" is used with superlative adjectives (tallest).' },
  ],
};

const readingData = {
  easy: {
    title: 'The Benefits of Reading',
    content: `<p>Reading is one of the most beneficial habits a person can develop. Studies show that reading regularly can reduce stress, improve focus, and expand vocabulary.</p>
<p>When you read a book, your brain creates new connections. This helps improve memory and concentration. Reading fiction can also increase empathy, as you learn to understand different perspectives and emotions.</p>
<p>Many successful people credit reading as a key factor in their achievements. Bill Gates reads about 50 books per year. Warren Buffett spends 80% of his day reading.</p>
<p>Experts recommend reading for at least 30 minutes every day. You can start with topics that interest you, whether it is fiction, science, history, or self-improvement.</p>`,
    questions: [
      { question: 'What is the main idea of the passage?', options: ['Reading is boring', 'Reading has many benefits', 'Books are expensive', 'Libraries are important'], answer: 1 },
      { question: 'How many books does Bill Gates read per year?', options: ['20', '30', '50', '100'], answer: 2 },
      { question: 'What can reading fiction increase?', options: ['Stress', 'Empathy', 'Heart rate', 'Income'], answer: 1 },
      { question: 'How much daily reading do experts recommend?', options: ['10 minutes', '20 minutes', '30 minutes', '2 hours'], answer: 2 },
      { question: 'What percentage of his day does Warren Buffett spend reading?', options: ['20%', '50%', '80%', '100%'], answer: 2 },
    ],
  },
  medium: {
    title: 'The Origins of the English Language',
    content: `<p>English is a West Germanic language that originated from Anglo-Frisian dialects brought to Britain by Germanic settlers in the 5th century. Over the centuries, English has been influenced by many other languages.</p>
<p>The Norman Conquest of 1066 brought a significant number of French words into the English vocabulary. Words like "government," "justice," and "royalty" all come from French. Latin has also been a major influence, especially in academic and scientific vocabulary.</p>
<p>During the Renaissance, many Latin and Greek words were added to English. The Industrial Revolution and the British Empire further expanded the language by borrowing words from colonies around the world — "bungalow" from Hindi, "tea" from Chinese, and "safari" from Swahili.</p>
<p>Today, English continues to evolve. New words are created every year to describe new technologies and cultural phenomena. The Oxford English Dictionary adds hundreds of new words annually.</p>`,
    questions: [
      { question: 'What language family does English belong to?', options: ['Romance', 'West Germanic', 'Slavic', 'Celtic'], answer: 1 },
      { question: 'Which event brought French words into English?', options: ['The Renaissance', 'The Norman Conquest', 'The Industrial Revolution', 'World War II'], answer: 1 },
      { question: 'Which word comes from Hindi?', options: ['Justice', 'Tea', 'Bungalow', 'Government'], answer: 2 },
      { question: 'What happened during the Renaissance?', options: ['French words were added', 'Latin and Greek words were added', 'English was created', 'The alphabet changed'], answer: 1 },
      { question: 'What is the main purpose of this passage?', options: ['To argue English is the best language', 'To explain the history of English', 'To teach grammar rules', 'To promote learning French'], answer: 1 },
    ],
  },
  hard: {
    title: 'The Psychology of Language Acquisition',
    content: `<p>Language acquisition is a complex cognitive process that has fascinated linguists and psychologists for decades. Noam Chomsky's theory of Universal Grammar proposes that humans are born with an innate capacity for language — a "language acquisition device" that enables children to learn any language they are exposed to.</p>
<p>Stephen Krashen's Input Hypothesis suggests that language acquisition occurs when learners are exposed to comprehensible input — language that is slightly above their current level (i+1). According to this theory, conscious learning serves only as a "monitor" that edits output, while true fluency develops subconsciously through exposure.</p>
<p>Critical period hypothesis suggests there is an optimal window for language acquisition, typically before puberty. After this period, achieving native-like proficiency becomes significantly more difficult, though not impossible. This has profound implications for educational policy regarding when to introduce second language instruction.</p>
<p>Recent neuroscientific research using fMRI scans has revealed that bilingual individuals show increased gray matter density in the left inferior parietal cortex. This suggests that learning multiple languages physically changes the brain structure in beneficial ways.</p>`,
    questions: [
      { question: 'Who proposed the theory of Universal Grammar?', options: ['Stephen Krashen', 'Noam Chomsky', 'B.F. Skinner', 'Jean Piaget'], answer: 1 },
      { question: 'What does "i+1" refer to in Krashen\'s theory?', options: ['A math formula', 'Input slightly above current level', 'The number of languages learned', 'A test score'], answer: 1 },
      { question: 'According to the critical period hypothesis, when is the optimal window for language acquisition?', options: ['After age 30', 'Before birth', 'Before puberty', 'During college'], answer: 2 },
      { question: 'What did fMRI studies reveal about bilingual individuals?', options: ['Smaller brains', 'Increased gray matter density', 'Faster heart rate', 'Improved eyesight'], answer: 1 },
      { question: 'What is the main theme of this passage?', options: ['How to learn vocabulary quickly', 'Scientific theories about language acquisition', 'The history of English grammar', 'Famous polyglots throughout history'], answer: 1 },
    ],
  },
};

// ---------- State ----------

const state = {
  currentPage: 'dashboard',
  theme: localStorage.getItem('theme') || 'light',

  // Vocabulary state
  vocabCategory: 'beginner',
  vocabIndex: 0,
  vocabLearned: JSON.parse(localStorage.getItem('vocabLearned') || '[]'),

  // Grammar state
  grammarCategory: 'tenses',
  grammarIndex: 0,
  grammarScore: 0,

  // Reading state
  readingCategory: 'easy',
  readingIndex: 0,
  readingScore: 0,

  // Quiz state
  quizQuestions: [],
  quizIndex: 0,
  quizScore: 0,
  quizTotal: 10,

  // Stats
  totalQuizzes: parseInt(localStorage.getItem('totalQuizzes') || '0'),
  totalCorrect: parseInt(localStorage.getItem('totalCorrect') || '0'),
  streak: parseInt(localStorage.getItem('streak') || '0'),
  lastVisit: localStorage.getItem('lastVisit') || '',
};

// ---------- Utility ----------

function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return document.querySelectorAll(sel); }

function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (state.lastVisit === yesterday) {
      state.streak += 1;
    } else if (state.lastVisit !== today) {
      state.streak = 1;
    }
    state.lastVisit = today;
    localStorage.setItem('lastVisit', today);
    localStorage.setItem('streak', state.streak);
  }
}

function saveStats() {
  localStorage.setItem('totalQuizzes', state.totalQuizzes);
  localStorage.setItem('totalCorrect', state.totalCorrect);
  localStorage.setItem('streak', state.streak);
  localStorage.setItem('vocabLearned', JSON.stringify(state.vocabLearned));
}

function updateDashboard() {
  qs('#stat-vocab').textContent = state.vocabLearned.length;
  qs('#stat-streak').textContent = state.streak;
  qs('#stat-quizzes').textContent = state.totalQuizzes;
  const accuracy = state.totalQuizzes > 0 ? Math.round((state.totalCorrect / (state.totalQuizzes * 5)) * 100) : 0;
  qs('#stat-accuracy').textContent = accuracy + '%';
}

// Word of the Day (deterministic based on date)
function setWordOfDay() {
  const allWords = [...vocabularyData.beginner, ...vocabularyData.intermediate, ...vocabularyData.advanced];
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const word = allWords[dayOfYear % allWords.length];
  qs('#wotd-word').textContent = word.word;
  qs('#wotd-phonetic').textContent = word.phonetic;
  qs('#wotd-definition').textContent = word.meaning;
  qs('#wotd-example').textContent = '"' + word.example + '"';
}

// ---------- Navigation ----------

function navigateTo(page) {
  qsa('.page').forEach(p => p.classList.remove('active'));
  qs('#' + page).classList.add('active');
  qsa('.nav-link').forEach(l => l.classList.remove('active'));
  const link = qs('[data-page="' + page + '"]');
  if (link) link.classList.add('active');
  state.currentPage = page;

  if (page === 'vocabulary') initVocabulary();
  if (page === 'grammar') initGrammar();
  if (page === 'reading') initReading();
  if (page === 'quiz') initQuizSetup();
}

qsa('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

qsa('[data-goto]').forEach(btn => {
  btn.addEventListener('click', () => navigateTo(btn.dataset.goto));
});

// ---------- Theme ----------

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  qs('#themeToggle').textContent = state.theme === 'dark' ? '☀️' : '🌙';
}

qs('#themeToggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', state.theme);
  applyTheme();
});

// ---------- Vocabulary ----------

function initVocabulary() {
  renderVocabCategories();
  state.vocabIndex = 0;
  renderCard();
}

function renderVocabCategories() {
  const container = qs('#vocab-categories');
  const cats = Object.keys(vocabularyData);
  container.innerHTML = cats.map(c =>
    '<button class="cat-tab' + (c === state.vocabCategory ? ' active' : '') +
    '" data-cat="' + c + '">' + c.charAt(0).toUpperCase() + c.slice(1) + '</button>'
  ).join('');

  container.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.vocabCategory = btn.dataset.cat;
      state.vocabIndex = 0;
      renderVocabCategories();
      renderCard();
    });
  });
}

function getCurrentVocabList() {
  return vocabularyData[state.vocabCategory] || vocabularyData.beginner;
}

function renderCard() {
  const list = getCurrentVocabList();
  const word = list[state.vocabIndex];
  const card = qs('#flashcard');
  card.classList.remove('flipped');

  qs('#card-level').textContent = word.level;
  qs('#card-word').textContent = word.word;
  qs('#card-phonetic').textContent = word.phonetic;
  qs('#card-pos').textContent = word.pos;
  qs('#card-meaning').textContent = word.meaning;
  qs('#card-example').textContent = '"' + word.example + '"';
  qs('#card-counter').textContent = (state.vocabIndex + 1) + ' / ' + list.length;

  const isLearned = state.vocabLearned.includes(word.word);
  const btn = qs('#btn-learned');
  btn.textContent = isLearned ? 'Learned' : 'I Know This';
  btn.disabled = isLearned;
}

qs('#flashcard').addEventListener('click', () => {
  qs('#flashcard').classList.toggle('flipped');
});

qs('#btn-prev-word').addEventListener('click', () => {
  const list = getCurrentVocabList();
  state.vocabIndex = (state.vocabIndex - 1 + list.length) % list.length;
  renderCard();
});

qs('#btn-next-word').addEventListener('click', () => {
  const list = getCurrentVocabList();
  state.vocabIndex = (state.vocabIndex + 1) % list.length;
  renderCard();
});

qs('#btn-learned').addEventListener('click', () => {
  const word = getCurrentVocabList()[state.vocabIndex].word;
  if (!state.vocabLearned.includes(word)) {
    state.vocabLearned.push(word);
    saveStats();
    updateDashboard();
    renderCard();
  }
});

// ---------- Grammar ----------

function initGrammar() {
  renderGrammarCategories();
  state.grammarIndex = 0;
  state.grammarScore = 0;
  renderGrammarQuestion();
}

function renderGrammarCategories() {
  const container = qs('#grammar-categories');
  const cats = Object.keys(grammarData);
  container.innerHTML = cats.map(c =>
    '<button class="cat-tab' + (c === state.grammarCategory ? ' active' : '') +
    '" data-cat="' + c + '">' + c.charAt(0).toUpperCase() + c.slice(1) + '</button>'
  ).join('');

  container.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.grammarCategory = btn.dataset.cat;
      state.grammarIndex = 0;
      state.grammarScore = 0;
      renderGrammarCategories();
      renderGrammarQuestion();
    });
  });
}

function getCurrentGrammarList() {
  return grammarData[state.grammarCategory] || grammarData.tenses;
}

function renderGrammarQuestion() {
  const list = getCurrentGrammarList();
  const q = list[state.grammarIndex];

  qs('#grammar-question').textContent = q.question;
  qs('#grammar-counter').textContent = (state.grammarIndex + 1) + ' / ' + list.length;
  qs('#grammar-progress-fill').style.width = ((state.grammarIndex) / list.length * 100) + '%';

  const optionsContainer = qs('#grammar-options');
  optionsContainer.innerHTML = q.options.map((opt, i) =>
    '<button class="option-btn" data-idx="' + i + '">' + opt + '</button>'
  ).join('');

  const feedback = qs('#grammar-feedback');
  feedback.classList.remove('show', 'correct', 'wrong');
  feedback.textContent = '';
  qs('#grammar-next').style.display = 'none';

  optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => handleGrammarAnswer(parseInt(btn.dataset.idx)));
  });
}

function handleGrammarAnswer(idx) {
  const list = getCurrentGrammarList();
  const q = list[state.grammarIndex];
  const buttons = qsa('#grammar-options .option-btn');
  buttons.forEach(b => b.disabled = true);

  buttons[q.answer].classList.add('correct');
  const feedback = qs('#grammar-feedback');

  if (idx === q.answer) {
    state.grammarScore++;
    buttons[idx].classList.add('correct');
    feedback.textContent = 'Correct! ' + q.explanation;
    feedback.className = 'quiz-feedback correct show';
  } else {
    buttons[idx].classList.add('wrong');
    feedback.textContent = 'Incorrect. ' + q.explanation;
    feedback.className = 'quiz-feedback wrong show';
  }

  qs('#grammar-progress-fill').style.width = ((state.grammarIndex + 1) / list.length * 100) + '%';
  const nextBtn = qs('#grammar-next');
  nextBtn.style.display = 'block';
  nextBtn.textContent = state.grammarIndex < list.length - 1 ? 'Next Question' : 'Show Results';

  nextBtn.onclick = () => {
    state.grammarIndex++;
    if (state.grammarIndex >= list.length) {
      showGrammarResults();
    } else {
      renderGrammarQuestion();
    }
  };
}

function showGrammarResults() {
  const list = getCurrentGrammarList();
  const pct = Math.round((state.grammarScore / list.length) * 100);
  state.totalQuizzes++;
  state.totalCorrect += state.grammarScore;
  saveStats();
  updateDashboard();

  qs('#grammar-question').textContent = 'Results';
  qs('#grammar-options').innerHTML = '';
  qs('#grammar-feedback').textContent = 'You scored ' + state.grammarScore + '/' + list.length + ' (' + pct + '%)';
  qs('#grammar-feedback').className = 'quiz-feedback ' + (pct >= 60 ? 'correct' : 'wrong') + ' show';
  qs('#grammar-counter').textContent = '';
  qs('#grammar-progress-fill').style.width = '100%';
  const nextBtn = qs('#grammar-next');
  nextBtn.style.display = 'block';
  nextBtn.textContent = 'Try Again';
  nextBtn.onclick = () => {
    state.grammarIndex = 0;
    state.grammarScore = 0;
    renderGrammarQuestion();
  };
}

// ---------- Reading ----------

function initReading() {
  renderReadingCategories();
  state.readingIndex = 0;
  state.readingScore = 0;
  renderReadingContent();
}

function renderReadingCategories() {
  const container = qs('#reading-categories');
  const cats = Object.keys(readingData);
  container.innerHTML = cats.map(c =>
    '<button class="cat-tab' + (c === state.readingCategory ? ' active' : '') +
    '" data-cat="' + c + '">' + c.charAt(0).toUpperCase() + c.slice(1) + '</button>'
  ).join('');

  container.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.readingCategory = btn.dataset.cat;
      state.readingIndex = 0;
      state.readingScore = 0;
      renderReadingCategories();
      renderReadingContent();
    });
  });
}

function renderReadingContent() {
  const passage = readingData[state.readingCategory];
  qs('#reading-title').textContent = passage.title;
  qs('#reading-content').innerHTML = passage.content;
  renderReadingQuestion();
}

function renderReadingQuestion() {
  const passage = readingData[state.readingCategory];
  const q = passage.questions[state.readingIndex];

  qs('#reading-question').textContent = 'Question ' + (state.readingIndex + 1) + ': ' + q.question;
  qs('#reading-counter').textContent = (state.readingIndex + 1) + ' / ' + passage.questions.length;
  qs('#reading-progress-fill').style.width = (state.readingIndex / passage.questions.length * 100) + '%';

  const optionsContainer = qs('#reading-options');
  optionsContainer.innerHTML = q.options.map((opt, i) =>
    '<button class="option-btn" data-idx="' + i + '">' + opt + '</button>'
  ).join('');

  const feedback = qs('#reading-feedback');
  feedback.classList.remove('show', 'correct', 'wrong');
  feedback.textContent = '';
  qs('#reading-next').style.display = 'none';

  optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => handleReadingAnswer(parseInt(btn.dataset.idx)));
  });
}

function handleReadingAnswer(idx) {
  const passage = readingData[state.readingCategory];
  const q = passage.questions[state.readingIndex];
  const buttons = qsa('#reading-options .option-btn');
  buttons.forEach(b => b.disabled = true);

  buttons[q.answer].classList.add('correct');
  const feedback = qs('#reading-feedback');

  if (idx === q.answer) {
    state.readingScore++;
    buttons[idx].classList.add('correct');
    feedback.textContent = 'Correct!';
    feedback.className = 'quiz-feedback correct show';
  } else {
    buttons[idx].classList.add('wrong');
    feedback.textContent = 'Incorrect. The correct answer was: ' + q.options[q.answer];
    feedback.className = 'quiz-feedback wrong show';
  }

  qs('#reading-progress-fill').style.width = ((state.readingIndex + 1) / passage.questions.length * 100) + '%';
  const nextBtn = qs('#reading-next');
  nextBtn.style.display = 'block';
  nextBtn.textContent = state.readingIndex < passage.questions.length - 1 ? 'Next Question' : 'Show Results';

  nextBtn.onclick = () => {
    state.readingIndex++;
    if (state.readingIndex >= passage.questions.length) {
      showReadingResults();
    } else {
      renderReadingQuestion();
    }
  };
}

function showReadingResults() {
  const passage = readingData[state.readingCategory];
  const pct = Math.round((state.readingScore / passage.questions.length) * 100);
  state.totalQuizzes++;
  state.totalCorrect += state.readingScore;
  saveStats();
  updateDashboard();

  qs('#reading-question').textContent = 'Results';
  qs('#reading-options').innerHTML = '';
  qs('#reading-feedback').textContent = 'You scored ' + state.readingScore + '/' + passage.questions.length + ' (' + pct + '%)';
  qs('#reading-feedback').className = 'quiz-feedback ' + (pct >= 60 ? 'correct' : 'wrong') + ' show';
  qs('#reading-counter').textContent = '';
  qs('#reading-progress-fill').style.width = '100%';
  const nextBtn = qs('#reading-next');
  nextBtn.style.display = 'block';
  nextBtn.textContent = 'Try Again';
  nextBtn.onclick = () => {
    state.readingIndex = 0;
    state.readingScore = 0;
    renderReadingQuestion();
  };
}

// ---------- Quiz ----------

function initQuizSetup() {
  qs('#quiz-setup').classList.remove('hidden');
  qs('#quiz-active').classList.add('hidden');
  qs('#quiz-results').classList.add('hidden');
}

function generateQuizQuestions(count, difficulty) {
  // Collect all grammar questions
  let grammarPool = [];
  Object.values(grammarData).forEach(arr => {
    arr.forEach(q => grammarPool.push({ ...q, topic: 'Grammar' }));
  });

  // Collect all reading questions
  let readingPool = [];
  Object.values(readingData).forEach(passage => {
    passage.questions.forEach(q => readingPool.push({ ...q, topic: 'Reading', passageTitle: passage.title }));
  });

  // Filter by difficulty if needed (using categories as proxy)
  if (difficulty === 'easy') {
    grammarPool = grammarPool.filter((_, i) => i < 5);
    readingPool = readingPool.filter((_, i) => i < 3);
  } else if (difficulty === 'hard') {
    grammarPool = grammarPool.filter((_, i) => i >= 5);
    readingPool = readingPool.filter((_, i) => i >= 2);
  }

  // Combine and shuffle
  const combined = [...grammarPool, ...readingPool];
  const shuffled = combined.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

qs('#quiz-start').addEventListener('click', () => {
  const count = parseInt(qs('#quiz-count').value);
  const difficulty = qs('#quiz-difficulty').value;
  state.quizTotal = count;
  state.quizQuestions = generateQuizQuestions(count, difficulty);
  state.quizIndex = 0;
  state.quizScore = 0;

  qs('#quiz-setup').classList.add('hidden');
  qs('#quiz-active').classList.remove('hidden');
  qs('#quiz-results').classList.add('hidden');
  renderQuizQuestion();
});

function renderQuizQuestion() {
  const q = state.quizQuestions[state.quizIndex];
  qs('#quiz-topic-badge').textContent = q.topic;
  qs('#quiz-question').textContent = q.question;
  qs('#quiz-counter').textContent = (state.quizIndex + 1) + ' / ' + state.quizTotal;
  qs('#quiz-progress-fill').style.width = (state.quizIndex / state.quizTotal * 100) + '%';

  const optionsContainer = qs('#quiz-options');
  optionsContainer.innerHTML = q.options.map((opt, i) =>
    '<button class="option-btn" data-idx="' + i + '">' + opt + '</button>'
  ).join('');

  const feedback = qs('#quiz-feedback');
  feedback.classList.remove('show', 'correct', 'wrong');
  feedback.textContent = '';
  qs('#quiz-next-btn').style.display = 'none';

  optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => handleQuizAnswer(parseInt(btn.dataset.idx)));
  });
}

function handleQuizAnswer(idx) {
  const q = state.quizQuestions[state.quizIndex];
  const buttons = qsa('#quiz-options .option-btn');
  buttons.forEach(b => b.disabled = true);

  buttons[q.answer].classList.add('correct');
  const feedback = qs('#quiz-feedback');

  if (idx === q.answer) {
    state.quizScore++;
    buttons[idx].classList.add('correct');
    feedback.textContent = 'Correct!';
    feedback.className = 'quiz-feedback correct show';
  } else {
    buttons[idx].classList.add('wrong');
    const expl = q.explanation || ('The correct answer was: ' + q.options[q.answer]);
    feedback.textContent = 'Incorrect. ' + expl;
    feedback.className = 'quiz-feedback wrong show';
  }

  qs('#quiz-progress-fill').style.width = ((state.quizIndex + 1) / state.quizTotal * 100) + '%';
  const nextBtn = qs('#quiz-next-btn');
  nextBtn.style.display = 'block';
  nextBtn.textContent = state.quizIndex < state.quizTotal - 1 ? 'Next' : 'Show Results';

  nextBtn.onclick = () => {
    state.quizIndex++;
    if (state.quizIndex >= state.quizTotal) {
      showQuizResults();
    } else {
      renderQuizQuestion();
    }
  };
}

function showQuizResults() {
  qs('#quiz-active').classList.add('hidden');
  qs('#quiz-results').classList.remove('hidden');

  const pct = Math.round((state.quizScore / state.quizTotal) * 100);
  state.totalQuizzes++;
  state.totalCorrect += state.quizScore;
  saveStats();
  updateDashboard();

  qs('#result-score').textContent = state.quizScore + '/' + state.quizTotal;
  qs('#result-percentage').textContent = pct + '%';

  let message = '';
  if (pct >= 80) message = 'Excellent work! You have a strong command of English.';
  else if (pct >= 60) message = 'Good job! Keep practicing to improve further.';
  else message = 'Keep studying! Regular practice will help you improve.';
  qs('#result-message').textContent = message;

  // Show per-question results
  qs('#result-details').innerHTML = state.quizQuestions.map((q, i) =>
    '<div class="result-item">' +
    '<span class="icon">' + (/* we don't track per-question, just show the question */ '📝') + '</span>' +
    '<span class="text">' + q.question + '<br><small>Answer: ' + q.options[q.answer] + '</small></span>' +
    '</div>'
  ).join('');
}

qs('#quiz-retry').addEventListener('click', () => {
  qs('#quiz-results').classList.add('hidden');
  qs('#quiz-setup').classList.remove('hidden');
});

// ---------- Init ----------

function init() {
  applyTheme();
  updateStreak();
  updateDashboard();
  setWordOfDay();
  navigateTo('dashboard');
}

init();
