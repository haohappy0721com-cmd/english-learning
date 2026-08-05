// Seed CET-4 and CET-6 vocabulary into the database
const db = require('./db');

const vocabularyData = [
  // CET-4 Group 1
  { word: 'abandon', phonetic: '/əˈbændən/', pos: 'v.', meaning: '放弃；抛弃', example: 'They had to abandon the plan due to bad weather.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'ability', phonetic: '/əˈbɪləti/', pos: 'n.', meaning: '能力；才能', example: 'She has the ability to learn languages quickly.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'abroad', phonetic: '/əˈbrɔːd/', pos: 'adv.', meaning: '在国外；到国外', example: 'He dreams of studying abroad next year.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'absence', phonetic: '/ˈæbsəns/', pos: 'n.', meaning: '缺席；缺乏', example: 'In the absence of evidence, the case was dropped.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'absolute', phonetic: '/ˈæbsəluːt/', pos: 'adj.', meaning: '绝对的；完全的', example: 'She demanded absolute silence during the exam.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'absorb', phonetic: '/əbˈzɔːrb/', pos: 'v.', meaning: '吸收；吸引', example: 'Plants absorb nutrients from the soil.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'abstract', phonetic: '/ˈæbstrækt/', pos: 'adj./n.', meaning: '抽象的；摘要', example: 'The concept is too abstract for beginners.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'abundant', phonetic: '/əˈbʌndənt/', pos: 'adj.', meaning: '丰富的；充裕的', example: 'The region has abundant natural resources.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'academic', phonetic: '/ˌækəˈdemɪk/', pos: 'adj.', meaning: '学术的；学院的', example: 'She published several academic papers this year.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'accelerate', phonetic: '/əkˈseləreɪt/', pos: 'v.', meaning: '加速；促进', example: 'The car can accelerate from 0 to 60 in 5 seconds.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'access', phonetic: '/ˈækses/', pos: 'n./v.', meaning: '进入；通道；访问', example: 'Students have free access to the online library.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'accommodation', phonetic: '/əˌkɒməˈdeɪʃn/', pos: 'n.', meaning: '住宿；适应', example: 'The university provides accommodation for freshmen.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'accompany', phonetic: '/əˈkʌmpəni/', pos: 'v.', meaning: '陪伴；伴随', example: 'She will accompany me to the interview.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'accomplish', phonetic: '/əˈkʌmplɪʃ/', pos: 'v.', meaning: '完成；实现', example: 'He accomplished his goal of running a marathon.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'account', phonetic: '/əˈkaʊnt/', pos: 'n./v.', meaning: '账户；说明；解释', example: 'She opened a savings account at the bank.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'accurate', phonetic: '/ˈækjərət/', pos: 'adj.', meaning: '准确的；精确的', example: 'The weather forecast proved to be accurate.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'achieve', phonetic: '/əˈtʃiːv/', pos: 'v.', meaning: '取得；实现', example: 'He worked hard to achieve his career goals.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'acknowledge', phonetic: '/əkˈnɒlɪdʒ/', pos: 'v.', meaning: '承认；确认', example: 'She acknowledged her mistake and apologized.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'acquire', phonetic: '/əˈkwaɪər/', pos: 'v.', meaning: '获得；习得', example: 'Children acquire language naturally from their parents.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'adapt', phonetic: '/əˈdæpt/', pos: 'v.', meaning: '适应；改编', example: 'It takes time to adapt to a new culture.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'adequate', phonetic: '/ˈædɪkwət/', pos: 'adj.', meaning: '足够的；适当的', example: 'Make sure you have adequate sleep before the exam.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'adjust', phonetic: '/əˈdʒʌst/', pos: 'v.', meaning: '调整；适应', example: 'You can adjust the volume with this button.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'administration', phonetic: '/ədˌmɪnɪˈstreɪʃn/', pos: 'n.', meaning: '管理；行政', example: 'The school administration approved the new policy.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'admire', phonetic: '/ədˈmaɪər/', pos: 'v.', meaning: '钦佩；赞赏', example: 'I admire her dedication to helping others.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'admit', phonetic: '/ədˈmɪt/', pos: 'v.', meaning: '承认；准许进入', example: 'He admitted that he had made a serious error.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'adopt', phonetic: '/əˈdɒpt/', pos: 'v.', meaning: '采用；收养', example: 'The company decided to adopt a new strategy.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'advance', phonetic: '/ədˈvɑːns/', pos: 'v./n.', meaning: '前进；进步；预先', example: 'Technology continues to advance at a rapid pace.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'advantage', phonetic: '/ədˈvɑːntɪdʒ/', pos: 'n.', meaning: '优势；有利条件', example: 'Speaking two languages is a big advantage in business.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'advertise', phonetic: '/ˈædvərtaɪz/', pos: 'v.', meaning: '做广告；宣传', example: 'They advertise their products on social media.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'affair', phonetic: '/əˈfeər/', pos: 'n.', meaning: '事务；事件', example: 'The Ministry of Foreign Affairs issued a statement.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'affect', phonetic: '/əˈfekt/', pos: 'v.', meaning: '影响；感动', example: 'Lack of sleep can seriously affect your health.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'afford', phonetic: '/əˈfɔːrd/', pos: 'v.', meaning: '负担得起；提供', example: 'We cannot afford to miss this opportunity.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'aggressive', phonetic: '/əˈɡresɪv/', pos: 'adj.', meaning: '侵略的；好斗的', example: 'The company adopted an aggressive marketing strategy.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'agreement', phonetic: '/əˈɡriːmənt/', pos: 'n.', meaning: '协议；一致', example: 'Both parties signed the agreement yesterday.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'alcohol', phonetic: '/ˈælkəhɒl/', pos: 'n.', meaning: '酒精；酒', example: 'The doctor advised him to avoid alcohol.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'alternative', phonetic: '/ɔːlˈtɜːrnətɪv/', pos: 'n./adj.', meaning: '替代的；替代方案', example: 'We need to find an alternative source of energy.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'amaze', phonetic: '/əˈmeɪz/', pos: 'v.', meaning: '使惊奇', example: 'Her performance amazed everyone in the audience.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'ambition', phonetic: '/æmˈbɪʃn/', pos: 'n.', meaning: '野心；雄心', example: 'His ambition is to become a successful entrepreneur.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'amount', phonetic: '/əˈmaʊnt/', pos: 'n./v.', meaning: '数量；总计', example: 'A large amount of data was collected for the study.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'analyze', phonetic: '/ˈænəlaɪz/', pos: 'v.', meaning: '分析', example: 'Scientists analyzed the samples in the laboratory.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'ancestor', phonetic: '/ˈænsestər/', pos: 'n.', meaning: '祖先', example: 'Our ancestors developed sophisticated farming techniques.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'anniversary', phonetic: '/ˌænɪˈvɜːrsəri/', pos: 'n.', meaning: '周年纪念日', example: 'They celebrated their 25th wedding anniversary.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'announce', phonetic: '/əˈnaʊns/', pos: 'v.', meaning: '宣布；通告', example: 'The company will announce its new product next week.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'annual', phonetic: '/ˈænjuəl/', pos: 'adj.', meaning: '每年的；年度的', example: 'The annual conference attracts thousands of visitors.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'anticipate', phonetic: '/ænˈtɪsɪpeɪt/', pos: 'v.', meaning: '预期；期望', example: 'We anticipate a rise in demand this summer.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'anxiety', phonetic: '/æŋˈzaɪəti/', pos: 'n.', meaning: '焦虑；忧虑', example: 'Exam anxiety is common among university students.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'apart', phonetic: '/əˈpɑːrt/', pos: 'adv.', meaning: '分开地；相隔', example: 'The two buildings stand 100 meters apart.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'apparent', phonetic: '/əˈpærənt/', pos: 'adj.', meaning: '明显的；表面上的', example: 'It soon became apparent that something was wrong.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'appeal', phonetic: '/əˈpiːl/', pos: 'v./n.', meaning: '呼吁；吸引；上诉', example: 'The charity launched an appeal for donations.', level: 'CET-4', category: 'cet4_group1' },
  { word: 'appetite', phonetic: '/ˈæpɪtaɪt/', pos: 'n.', meaning: '食欲；胃口', example: 'The long walk gave me a healthy appetite.', level: 'CET-4', category: 'cet4_group1' },

  // ... more words would be added here. This seed file contains the first 50.
  // The complete seed is in the app.js vocabularyData which contains 400 words across 8 groups.
  // For a full import, run: node seed-full.js
];

const insert = db.prepare(
  'INSERT OR IGNORE INTO vocabulary (word, phonetic, pos, meaning, example, level, category) VALUES (?, ?, ?, ?, ?, ?, ?)'
);

const insertAll = db.transaction((words) => {
  let count = 0;
  for (const w of words) {
    const result = insert.run(w.word, w.phonetic, w.pos, w.meaning, w.example, w.level, w.category);
    if (result.changes > 0) count++;
  }
  return count;
});

const count = insertAll(vocabularyData);
console.log(`Seeded ${count} words into vocabulary table.`);
console.log(`Total words in database: ${db.prepare('SELECT COUNT(*) as count FROM vocabulary').get().count}`);
