// ============================================================
// English Mastery - App Logic (CET-4 / CET-6 Edition)
// ============================================================

// ---------- Vocabulary: CET-4 & CET-6 ----------

const vocabularyData = {
  cet4_group1: [
    { word: 'abandon', phonetic: '/əˈbændən/', pos: 'v.', meaning: '放弃；抛弃', example: 'They had to abandon the plan due to bad weather.', level: 'CET-4' },
    { word: 'ability', phonetic: '/əˈbɪləti/', pos: 'n.', meaning: '能力；才能', example: 'She has the ability to learn languages quickly.', level: 'CET-4' },
    { word: 'abroad', phonetic: '/əˈbrɔːd/', pos: 'adv.', meaning: '在国外；到国外', example: 'He dreams of studying abroad next year.', level: 'CET-4' },
    { word: 'absence', phonetic: '/ˈæbsəns/', pos: 'n.', meaning: '缺席；缺乏', example: 'In the absence of evidence, the case was dropped.', level: 'CET-4' },
    { word: 'absolute', phonetic: '/ˈæbsəluːt/', pos: 'adj.', meaning: '绝对的；完全的', example: 'She demanded absolute silence during the exam.', level: 'CET-4' },
    { word: 'absorb', phonetic: '/əbˈzɔːrb/', pos: 'v.', meaning: '吸收；吸引', example: 'Plants absorb nutrients from the soil.', level: 'CET-4' },
    { word: 'abstract', phonetic: '/ˈæbstrækt/', pos: 'adj./n.', meaning: '抽象的；摘要', example: 'The concept is too abstract for beginners.', level: 'CET-4' },
    { word: 'abundant', phonetic: '/əˈbʌndənt/', pos: 'adj.', meaning: '丰富的；充裕的', example: 'The region has abundant natural resources.', level: 'CET-4' },
    { word: 'academic', phonetic: '/ˌækəˈdemɪk/', pos: 'adj.', meaning: '学术的；学院的', example: 'She published several academic papers this year.', level: 'CET-4' },
    { word: 'accelerate', phonetic: '/əkˈseləreɪt/', pos: 'v.', meaning: '加速；促进', example: 'The car can accelerate from 0 to 60 in 5 seconds.', level: 'CET-4' },
    { word: 'access', phonetic: '/ˈækses/', pos: 'n./v.', meaning: '进入；通道；访问', example: 'Students have free access to the online library.', level: 'CET-4' },
    { word: 'accommodation', phonetic: '/əˌkɒməˈdeɪʃn/', pos: 'n.', meaning: '住宿；适应', example: 'The university provides accommodation for freshmen.', level: 'CET-4' },
    { word: 'accompany', phonetic: '/əˈkʌmpəni/', pos: 'v.', meaning: '陪伴；伴随', example: 'She will accompany me to the interview.', level: 'CET-4' },
    { word: 'accomplish', phonetic: '/əˈkʌmplɪʃ/', pos: 'v.', meaning: '完成；实现', example: 'He accomplished his goal of running a marathon.', level: 'CET-4' },
    { word: 'account', phonetic: '/əˈkaʊnt/', pos: 'n./v.', meaning: '账户；说明；解释', example: 'She opened a savings account at the bank.', level: 'CET-4' },
    { word: 'accurate', phonetic: '/ˈækjərət/', pos: 'adj.', meaning: '准确的；精确的', example: 'The weather forecast proved to be accurate.', level: 'CET-4' },
    { word: 'achieve', phonetic: '/əˈtʃiːv/', pos: 'v.', meaning: '取得；实现', example: 'He worked hard to achieve his career goals.', level: 'CET-4' },
    { word: 'acknowledge', phonetic: '/əkˈnɒlɪdʒ/', pos: 'v.', meaning: '承认；确认', example: 'She acknowledged her mistake and apologized.', level: 'CET-4' },
    { word: 'acquire', phonetic: '/əˈkwaɪər/', pos: 'v.', meaning: '获得；习得', example: 'Children acquire language naturally from their parents.', level: 'CET-4' },
    { word: 'adapt', phonetic: '/əˈdæpt/', pos: 'v.', meaning: '适应；改编', example: 'It takes time to adapt to a new culture.', level: 'CET-4' },
    { word: 'adequate', phonetic: '/ˈædɪkwət/', pos: 'adj.', meaning: '足够的；适当的', example: 'Make sure you have adequate sleep before the exam.', level: 'CET-4' },
    { word: 'adjust', phonetic: '/əˈdʒʌst/', pos: 'v.', meaning: '调整；适应', example: 'You can adjust the volume with this button.', level: 'CET-4' },
    { word: 'administration', phonetic: '/ədˌmɪnɪˈstreɪʃn/', pos: 'n.', meaning: '管理；行政', example: 'The school administration approved the new policy.', level: 'CET-4' },
    { word: 'admire', phonetic: '/ədˈmaɪər/', pos: 'v.', meaning: '钦佩；赞赏', example: 'I admire her dedication to helping others.', level: 'CET-4' },
    { word: 'admit', phonetic: '/ədˈmɪt/', pos: 'v.', meaning: '承认；准许进入', example: 'He admitted that he had made a serious error.', level: 'CET-4' },
    { word: 'adopt', phonetic: '/əˈdɒpt/', pos: 'v.', meaning: '采用；收养', example: 'The company decided to adopt a new strategy.', level: 'CET-4' },
    { word: 'advance', phonetic: '/ədˈvɑːns/', pos: 'v./n.', meaning: '前进；进步；预先', example: 'Technology continues to advance at a rapid pace.', level: 'CET-4' },
    { word: 'advantage', phonetic: '/ədˈvɑːntɪdʒ/', pos: 'n.', meaning: '优势；有利条件', example: 'Speaking two languages is a big advantage in business.', level: 'CET-4' },
    { word: 'advertise', phonetic: '/ˈædvərtaɪz/', pos: 'v.', meaning: '做广告；宣传', example: 'They advertise their products on social media.', level: 'CET-4' },
    { word: 'affair', phonetic: '/əˈfeər/', pos: 'n.', meaning: '事务；事件', example: 'The Ministry of Foreign Affairs issued a statement.', level: 'CET-4' },
    { word: 'affect', phonetic: '/əˈfekt/', pos: 'v.', meaning: '影响；感动', example: 'Lack of sleep can seriously affect your health.', level: 'CET-4' },
    { word: 'afford', phonetic: '/əˈfɔːrd/', pos: 'v.', meaning: '负担得起；提供', example: 'We cannot afford to miss this opportunity.', level: 'CET-4' },
    { word: 'aggressive', phonetic: '/əˈɡresɪv/', pos: 'adj.', meaning: '侵略的；好斗的', example: 'The company adopted an aggressive marketing strategy.', level: 'CET-4' },
    { word: 'agreement', phonetic: '/əˈɡriːmənt/', pos: 'n.', meaning: '协议；一致', example: 'Both parties signed the agreement yesterday.', level: 'CET-4' },
    { word: 'alcohol', phonetic: '/ˈælkəhɒl/', pos: 'n.', meaning: '酒精；酒', example: 'The doctor advised him to avoid alcohol.', level: 'CET-4' },
    { word: 'alternative', phonetic: '/ɔːlˈtɜːrnətɪv/', pos: 'n./adj.', meaning: '替代的；替代方案', example: 'We need to find an alternative source of energy.', level: 'CET-4' },
    { word: 'amaze', phonetic: '/əˈmeɪz/', pos: 'v.', meaning: '使惊奇', example: 'Her performance amazed everyone in the audience.', level: 'CET-4' },
    { word: 'ambition', phonetic: '/æmˈbɪʃn/', pos: 'n.', meaning: '野心；雄心', example: 'His ambition is to become a successful entrepreneur.', level: 'CET-4' },
    { word: 'amount', phonetic: '/əˈmaʊnt/', pos: 'n./v.', meaning: '数量；总计', example: 'A large amount of data was collected for the study.', level: 'CET-4' },
    { word: 'analyze', phonetic: '/ˈænəlaɪz/', pos: 'v.', meaning: '分析', example: 'Scientists analyzed the samples in the laboratory.', level: 'CET-4' },
    { word: 'ancestor', phonetic: '/ˈænsestər/', pos: 'n.', meaning: '祖先', example: 'Our ancestors developed sophisticated farming techniques.', level: 'CET-4' },
    { word: 'anniversary', phonetic: '/ˌænɪˈvɜːrsəri/', pos: 'n.', meaning: '周年纪念日', example: 'They celebrated their 25th wedding anniversary.', level: 'CET-4' },
    { word: 'announce', phonetic: '/əˈnaʊns/', pos: 'v.', meaning: '宣布；通告', example: 'The company will announce its new product next week.', level: 'CET-4' },
    { word: 'annual', phonetic: '/ˈænjuəl/', pos: 'adj.', meaning: '每年的；年度的', example: 'The annual conference attracts thousands of visitors.', level: 'CET-4' },
    { word: 'anticipate', phonetic: '/ænˈtɪsɪpeɪt/', pos: 'v.', meaning: '预期；期望', example: 'We anticipate a rise in demand this summer.', level: 'CET-4' },
    { word: 'anxiety', phonetic: '/æŋˈzaɪəti/', pos: 'n.', meaning: '焦虑；忧虑', example: 'Exam anxiety is common among university students.', level: 'CET-4' },
    { word: 'apart', phonetic: '/əˈpɑːrt/', pos: 'adv.', meaning: '分开地；相隔', example: 'The two buildings stand 100 meters apart.', level: 'CET-4' },
    { word: 'apparent', phonetic: '/əˈpærənt/', pos: 'adj.', meaning: '明显的；表面上的', example: 'It soon became apparent that something was wrong.', level: 'CET-4' },
    { word: 'appeal', phonetic: '/əˈpiːl/', pos: 'v./n.', meaning: '呼吁；吸引；上诉', example: 'The charity launched an appeal for donations.', level: 'CET-4' },
    { word: 'appetite', phonetic: '/ˈæpɪtaɪt/', pos: 'n.', meaning: '食欲；胃口', example: 'The long walk gave me a healthy appetite.', level: 'CET-4' },
  ],
  cet4_group2: [
    { word: 'application', phonetic: '/ˌæplɪˈkeɪʃn/', pos: 'n.', meaning: '申请；应用', example: 'Her application for the scholarship was successful.', level: 'CET-4' },
    { word: 'appoint', phonetic: '/əˈpɔɪnt/', pos: 'v.', meaning: '任命；指定', example: 'They appointed her as the new project manager.', level: 'CET-4' },
    { word: 'appreciate', phonetic: '/əˈpriːʃieɪt/', pos: 'v.', meaning: '欣赏；感激', example: 'I really appreciate your help with this project.', level: 'CET-4' },
    { word: 'approach', phonetic: '/əˈprəʊtʃ/', pos: 'v./n.', meaning: '接近；方法', example: 'We need a new approach to solving this problem.', level: 'CET-4' },
    { word: 'appropriate', phonetic: '/əˈprəʊpriət/', pos: 'adj.', meaning: '适当的；合适的', example: 'Is this dress appropriate for a job interview?', level: 'CET-4' },
    { word: 'approve', phonetic: '/əˈpruːv/', pos: 'v.', meaning: '批准；赞成', example: 'The committee approved the budget for next year.', level: 'CET-4' },
    { word: 'architecture', phonetic: '/ˈɑːrkɪtektʃər/', pos: 'n.', meaning: '建筑；建筑学', example: 'The city is famous for its medieval architecture.', level: 'CET-4' },
    { word: 'argue', phonetic: '/ˈɑːrɡjuː/', pos: 'v.', meaning: '争论；争辩', example: 'They argued about the best way to invest the money.', level: 'CET-4' },
    { word: 'arise', phonetic: '/əˈraɪz/', pos: 'v.', meaning: '出现；产生', example: 'Unexpected problems arose during the construction.', level: 'CET-4' },
    { word: 'arrange', phonetic: '/əˈreɪndʒ/', pos: 'v.', meaning: '安排；整理', example: 'She arranged a meeting with the CEO for Friday.', level: 'CET-4' },
    { word: 'artificial', phonetic: '/ˌɑːrtɪˈfɪʃl/', pos: 'adj.', meaning: '人工的；人造的', example: 'Artificial intelligence is transforming many industries.', level: 'CET-4' },
    { word: 'aspect', phonetic: '/ˈæspekt/', pos: 'n.', meaning: '方面；层面', example: 'We need to consider every aspect of the issue.', level: 'CET-4' },
    { word: 'assemble', phonetic: '/əˈsembl/', pos: 'v.', meaning: '组装；集合', example: 'The team assembles every morning for a briefing.', level: 'CET-4' },
    { word: 'assess', phonetic: '/əˈses/', pos: 'v.', meaning: '评估；评定', example: 'Teachers need to assess each student individually.', level: 'CET-4' },
    { word: 'assign', phonetic: '/əˈsaɪn/', pos: 'v.', meaning: '分配；指派', example: 'Each student was assigned a different topic.', level: 'CET-4' },
    { word: 'assist', phonetic: '/əˈsɪst/', pos: 'v.', meaning: '协助；帮助', example: 'The new software will assist doctors in diagnosis.', level: 'CET-4' },
    { word: 'associate', phonetic: '/əˈsəʊʃieɪt/', pos: 'v./n.', meaning: '联系；关联；同事', example: 'People often associate success with happiness.', level: 'CET-4' },
    { word: 'assume', phonetic: '/əˈsjuːm/', pos: 'v.', meaning: '假定；承担', example: 'I assume you have already finished the report.', level: 'CET-4' },
    { word: 'atmosphere', phonetic: '/ˈætməsfɪər/', pos: 'n.', meaning: '大气；气氛', example: 'The restaurant has a very romantic atmosphere.', level: 'CET-4' },
    { word: 'attach', phonetic: '/əˈtætʃ/', pos: 'v.', meaning: '附上；连接', example: 'Please attach your CV to the application email.', level: 'CET-4' },
    { word: 'attempt', phonetic: '/əˈtempt/', pos: 'v./n.', meaning: '尝试；企图', example: 'She made several attempts before passing the test.', level: 'CET-4' },
    { word: 'attend', phonetic: '/əˈtend/', pos: 'v.', meaning: '参加；出席', example: 'Over 500 people attended the conference.', level: 'CET-4' },
    { word: 'attitude', phonetic: '/ˈætɪtjuːd/', pos: 'n.', meaning: '态度；看法', example: 'A positive attitude is essential for success.', level: 'CET-4' },
    { word: 'attract', phonetic: '/əˈtrækt/', pos: 'v.', meaning: '吸引', example: 'The new museum has attracted thousands of visitors.', level: 'CET-4' },
    { word: 'attribute', phonetic: '/əˈtrɪbjuːt/', pos: 'v./n.', meaning: '归因于；属性', example: 'He attributes his success to hard work and luck.', level: 'CET-4' },
    { word: 'audience', phonetic: '/ˈɔːdiəns/', pos: 'n.', meaning: '观众；听众', example: 'The audience applauded enthusiastically at the end.', level: 'CET-4' },
    { word: 'authority', phonetic: '/ɔːˈθɒrəti/', pos: 'n.', meaning: '权威；当局', example: 'Local authorities are investigating the incident.', level: 'CET-4' },
    { word: 'available', phonetic: '/əˈveɪləbl/', pos: 'adj.', meaning: '可用的；可获得的', example: 'The book is available in both print and digital formats.', level: 'CET-4' },
    { word: 'average', phonetic: '/ˈævərɪdʒ/', pos: 'adj./n.', meaning: '平均的；普通的', example: 'The average temperature in July is about 30 degrees.', level: 'CET-4' },
    { word: 'avoid', phonetic: '/əˈvɔɪd/', pos: 'v.', meaning: '避免；回避', example: 'To stay healthy, avoid eating too much processed food.', level: 'CET-4' },
    { word: 'award', phonetic: '/əˈwɔːrd/', pos: 'v./n.', meaning: '授予；奖品', example: 'She was awarded a scholarship to study at Oxford.', level: 'CET-4' },
    { word: 'aware', phonetic: '/əˈweər/', pos: 'adj.', meaning: '意识到的', example: 'Are you aware of the risks involved in this investment?', level: 'CET-4' },
    { word: 'benefit', phonetic: '/ˈbenɪfɪt/', pos: 'n./v.', meaning: '利益；好处；受益', example: 'Regular exercise has many health benefits.', level: 'CET-4' },
    { word: 'budget', phonetic: '/ˈbʌdʒɪt/', pos: 'n.', meaning: '预算', example: 'The project was completed under budget.', level: 'CET-4' },
    { word: 'burden', phonetic: '/ˈbɜːrdn/', pos: 'n./v.', meaning: '负担；重担', example: 'The tax burden falls heavily on middle-class families.', level: 'CET-4' },
    { word: 'campaign', phonetic: '/kæmˈpeɪn/', pos: 'n./v.', meaning: '运动；活动；竞选', example: 'They launched a campaign to promote healthy eating.', level: 'CET-4' },
    { word: 'capable', phonetic: '/ˈkeɪpəbl/', pos: 'adj.', meaning: '有能力的', example: 'She is capable of handling multiple tasks at once.', level: 'CET-4' },
    { word: 'capacity', phonetic: '/kəˈpæsəti/', pos: 'n.', meaning: '能力；容量', example: 'The stadium has a seating capacity of 50,000.', level: 'CET-4' },
    { word: 'capture', phonetic: '/ˈkæptʃər/', pos: 'v.', meaning: '捕获；抓取', example: 'The photographer captured a beautiful sunset.', level: 'CET-4' },
    { word: 'career', phonetic: '/kəˈrɪər/', pos: 'n.', meaning: '职业；生涯', example: 'She decided to change her career after ten years.', level: 'CET-4' },
    { word: 'challenge', phonetic: '/ˈtʃælɪndʒ/', pos: 'n./v.', meaning: '挑战', example: 'Learning a new language is a rewarding challenge.', level: 'CET-4' },
    { word: 'characteristic', phonetic: '/ˌkærəktəˈrɪstɪk/', pos: 'n./adj.', meaning: '特征；典型的', example: 'Punctuality is a characteristic of German culture.', level: 'CET-4' },
    { word: 'circumstance', phonetic: '/ˈsɜːrkəmstəns/', pos: 'n.', meaning: '环境；情况', example: 'Under no circumstances should you open that door.', level: 'CET-4' },
    { word: 'commit', phonetic: '/kəˈmɪt/', pos: 'v.', meaning: '承诺；犯（罪）', example: 'He committed himself to finishing the project on time.', level: 'CET-4' },
    { word: 'communicate', phonetic: '/kəˈmjuːnɪkeɪt/', pos: 'v.', meaning: '交流；沟通', example: 'It is important to communicate your ideas clearly.', level: 'CET-4' },
    { word: 'community', phonetic: '/kəˈmjuːnəti/', pos: 'n.', meaning: '社区；群体', example: 'The local community supports the new library project.', level: 'CET-4' },
    { word: 'compare', phonetic: '/kəmˈpeər/', pos: 'v.', meaning: '比较；对比', example: 'Compare the two products before making a decision.', level: 'CET-4' },
    { word: 'compete', phonetic: '/kəmˈpiːt/', pos: 'v.', meaning: '竞争；比赛', example: 'Thousands of athletes compete in the Olympics.', level: 'CET-4' },
    { word: 'complaint', phonetic: '/kəmˈpleɪnt/', pos: 'n.', meaning: '投诉；抱怨', example: 'The company received several complaints about the delay.', level: 'CET-4' },
    { word: 'complex', phonetic: '/ˈkɒmpleks/', pos: 'adj.', meaning: '复杂的', example: 'The human brain is incredibly complex.', level: 'CET-4' },
  ],
  cet4_group3: [
    { word: 'concentrate', phonetic: '/ˈkɒnsntreɪt/', pos: 'v.', meaning: '集中；专注', example: 'It is hard to concentrate with all this noise.', level: 'CET-4' },
    { word: 'concept', phonetic: '/ˈkɒnsept/', pos: 'n.', meaning: '概念；观念', example: 'The concept of time varies across cultures.', level: 'CET-4' },
    { word: 'concern', phonetic: '/kənˈsɜːrn/', pos: 'n./v.', meaning: '担忧；关心', example: 'Climate change is a growing concern worldwide.', level: 'CET-4' },
    { word: 'conduct', phonetic: '/kənˈdʌkt/', pos: 'v./n.', meaning: '进行；行为', example: 'The university will conduct a survey among students.', level: 'CET-4' },
    { word: 'conference', phonetic: '/ˈkɒnfərəns/', pos: 'n.', meaning: '会议；研讨会', example: 'She presented her research at an international conference.', level: 'CET-4' },
    { word: 'confident', phonetic: '/ˈkɒnfɪdənt/', pos: 'adj.', meaning: '自信的', example: 'She felt confident about passing the exam.', level: 'CET-4' },
    { word: 'confirm', phonetic: '/kənˈfɜːrm/', pos: 'v.', meaning: '确认；证实', example: 'The test results confirmed the doctor\'s diagnosis.', level: 'CET-4' },
    { word: 'conflict', phonetic: '/ˈkɒnflɪkt/', pos: 'n./v.', meaning: '冲突；矛盾', example: 'The two countries are trying to resolve the conflict.', level: 'CET-4' },
    { word: 'connect', phonetic: '/kəˈnekt/', pos: 'v.', meaning: '连接；联系', example: 'The bridge connects the two sides of the river.', level: 'CET-4' },
    { word: 'consequence', phonetic: '/ˈkɒnsɪkwəns/', pos: 'n.', meaning: '后果；结果', example: 'Every action has its consequences.', level: 'CET-4' },
    { word: 'conservative', phonetic: '/kənˈsɜːrvətɪv/', pos: 'adj.', meaning: '保守的', example: 'He has a conservative approach to investing.', level: 'CET-4' },
    { word: 'consider', phonetic: '/kənˈsɪdər/', pos: 'v.', meaning: '考虑；认为', example: 'You should consider all options before deciding.', level: 'CET-4' },
    { word: 'consistent', phonetic: '/kənˈsɪstənt/', pos: 'adj.', meaning: '一致的；始终如一的', example: 'Her performance has been consistently excellent.', level: 'CET-4' },
    { word: 'constant', phonetic: '/ˈkɒnstənt/', pos: 'adj.', meaning: '不断的；恒定的', example: 'The constant rain ruined our weekend plans.', level: 'CET-4' },
    { word: 'construct', phonetic: '/kənˈstrʌkt/', pos: 'v.', meaning: '建造；构建', example: 'A new bridge is being constructed across the river.', level: 'CET-4' },
    { word: 'consume', phonetic: '/kənˈsjuːm/', pos: 'v.', meaning: '消费；消耗', example: 'The fire consumed the entire building within hours.', level: 'CET-4' },
    { word: 'contact', phonetic: '/ˈkɒntækt/', pos: 'n./v.', meaning: '联系；接触', example: 'Please contact us if you have any questions.', level: 'CET-4' },
    { word: 'contemporary', phonetic: '/kənˈtemprəri/', pos: 'adj.', meaning: '当代的；同时代的', example: 'The gallery exhibits contemporary Chinese art.', level: 'CET-4' },
    { word: 'contribute', phonetic: '/kənˈtrɪbjuːt/', pos: 'v.', meaning: '贡献；捐献', example: 'Everyone should contribute to protecting the environment.', level: 'CET-4' },
    { word: 'convenient', phonetic: '/kənˈviːniənt/', pos: 'adj.', meaning: '方便的', example: 'Online shopping is convenient for busy people.', level: 'CET-4' },
    { word: 'convince', phonetic: '/kənˈvɪns/', pos: 'v.', meaning: '说服；使信服', example: 'She convinced her boss to adopt the new system.', level: 'CET-4' },
    { word: 'cooperate', phonetic: '/kəʊˈɒpəreɪt/', pos: 'v.', meaning: '合作；协作', example: 'The two companies agreed to cooperate on the project.', level: 'CET-4' },
    { word: 'corporation', phonetic: '/ˌkɔːrpəˈreɪʃn/', pos: 'n.', meaning: '公司；企业', example: 'She works for a multinational corporation.', level: 'CET-4' },
    { word: 'correspond', phonetic: '/ˌkɒrəˈspɒnd/', pos: 'v.', meaning: '对应；通信', example: 'The numbers on the map correspond to locations.', level: 'CET-4' },
    { word: 'create', phonetic: '/kriˈeɪt/', pos: 'v.', meaning: '创造；创建', example: 'The artist created a masterpiece in just three days.', level: 'CET-4' },
    { word: 'criminal', phonetic: '/ˈkrɪmɪnl/', pos: 'n./adj.', meaning: '罪犯；犯罪的', example: 'The criminal was sentenced to five years in prison.', level: 'CET-4' },
    { word: 'critical', phonetic: '/ˈkrɪtɪkl/', pos: 'adj.', meaning: '批评的；关键的', example: 'The patient is in a critical condition.', level: 'CET-4' },
    { word: 'culture', phonetic: '/ˈkʌltʃər/', pos: 'n.', meaning: '文化', example: 'Chinese culture has a history of over 5,000 years.', level: 'CET-4' },
    { word: 'current', phonetic: '/ˈkʌrənt/', pos: 'adj./n.', meaning: '当前的；水流；电流', example: 'The current situation requires immediate action.', level: 'CET-4' },
    { word: 'debate', phonetic: '/dɪˈbeɪt/', pos: 'n./v.', meaning: '辩论；争论', example: 'There is an ongoing debate about education reform.', level: 'CET-4' },
    { word: 'decline', phonetic: '/dɪˈklaɪn/', pos: 'v./n.', meaning: '下降；拒绝', example: 'Sales declined by 10% compared to last year.', level: 'CET-4' },
    { word: 'define', phonetic: '/dɪˈfaɪn/', pos: 'v.', meaning: '定义；界定', example: 'How do you define success in your life?', level: 'CET-4' },
    { word: 'definitely', phonetic: '/ˈdefɪnətli/', pos: 'adv.', meaning: '肯定地；明确地', example: 'I will definitely attend your wedding.', level: 'CET-4' },
    { word: 'deliver', phonetic: '/dɪˈlɪvər/', pos: 'v.', meaning: '递送；发表', example: 'The package will be delivered within three days.', level: 'CET-4' },
    { word: 'demand', phonetic: '/dɪˈmɑːnd/', pos: 'n./v.', meaning: '需求；要求', example: 'There is a high demand for skilled workers.', level: 'CET-4' },
    { word: 'demonstrate', phonetic: '/ˈdemənstreɪt/', pos: 'v.', meaning: '展示；证明', example: 'The experiment demonstrates the principle of gravity.', level: 'CET-4' },
    { word: 'department', phonetic: '/dɪˈpɑːrtmənt/', pos: 'n.', meaning: '部门', example: 'She works in the marketing department.', level: 'CET-4' },
    { word: 'depend', phonetic: '/dɪˈpend/', pos: 'v.', meaning: '依赖；取决于', example: 'The success of the project depends on teamwork.', level: 'CET-4' },
    { word: 'depress', phonetic: '/dɪˈpres/', pos: 'v.', meaning: '使沮丧；使萧条', example: 'The constant criticism began to depress him.', level: 'CET-4' },
    { word: 'deserve', phonetic: '/dɪˈzɜːrv/', pos: 'v.', meaning: '值得；应得', example: 'You deserve a break after working so hard.', level: 'CET-4' },
    { word: 'design', phonetic: '/dɪˈzaɪn/', pos: 'v./n.', meaning: '设计', example: 'She designed the entire website by herself.', level: 'CET-4' },
    { word: 'desire', phonetic: '/dɪˈzaɪər/', pos: 'n./v.', meaning: '渴望；欲望', example: 'He has a strong desire to succeed in his career.', level: 'CET-4' },
    { word: 'despite', phonetic: '/dɪˈspaɪt/', pos: 'prep.', meaning: '尽管', example: 'Despite the rain, the game continued as planned.', level: 'CET-4' },
    { word: 'destination', phonetic: '/ˌdestɪˈneɪʃn/', pos: 'n.', meaning: '目的地', example: 'The flight took six hours to reach its destination.', level: 'CET-4' },
    { word: 'determine', phonetic: '/dɪˈtɜːrmɪn/', pos: 'v.', meaning: '决定；确定', example: 'Age should not determine your ability to learn.', level: 'CET-4' },
    { word: 'develop', phonetic: '/dɪˈveləp/', pos: 'v.', meaning: '发展；开发', example: 'The company plans to develop new software products.', level: 'CET-4' },
    { word: 'device', phonetic: '/dɪˈvaɪs/', pos: 'n.', meaning: '设备；装置', example: 'This device can translate speech in real time.', level: 'CET-4' },
    { word: 'devote', phonetic: '/dɪˈvəʊt/', pos: 'v.', meaning: '致力于；奉献', example: 'She devoted her life to helping the poor.', level: 'CET-4' },
    { word: 'discipline', phonetic: '/ˈdɪsəplɪn/', pos: 'n.', meaning: '纪律；学科', example: 'Self-discipline is the key to achieving your goals.', level: 'CET-4' },
    { word: 'discover', phonetic: '/dɪˈskʌvər/', pos: 'v.', meaning: '发现', example: 'Scientists discovered a new species of frog.', level: 'CET-4' },
  ],
  cet4_group4: [
    { word: 'display', phonetic: '/dɪˈspleɪ/', pos: 'v./n.', meaning: '展示；显示', example: 'The museum displays artifacts from ancient Egypt.', level: 'CET-4' },
    { word: 'distinguish', phonetic: '/dɪˈstɪŋɡwɪʃ/', pos: 'v.', meaning: '区分；辨别', example: 'Can you distinguish between the two paintings?', level: 'CET-4' },
    { word: 'distribute', phonetic: '/dɪˈstrɪbjuːt/', pos: 'v.', meaning: '分配；分发', example: 'The charity distributes food to homeless people.', level: 'CET-4' },
    { word: 'document', phonetic: '/ˈdɒkjumənt/', pos: 'n./v.', meaning: '文件；记录', example: 'Please sign the document at the bottom of the page.', level: 'CET-4' },
    { word: 'domestic', phonetic: '/dəˈmestɪk/', pos: 'adj.', meaning: '国内的；家庭的', example: 'The airline operates both domestic and international flights.', level: 'CET-4' },
    { word: 'dominate', phonetic: '/ˈdɒmɪneɪt/', pos: 'v.', meaning: '主导；支配', example: 'The company dominates the smartphone market.', level: 'CET-4' },
    { word: 'dramatic', phonetic: '/drəˈmætɪk/', pos: 'adj.', meaning: '戏剧性的；巨大的', example: 'There has been a dramatic change in public opinion.', level: 'CET-4' },
    { word: 'economy', phonetic: '/ɪˈkɒnəmi/', pos: 'n.', meaning: '经济', example: 'The global economy is recovering from the recession.', level: 'CET-4' },
    { word: 'educate', phonetic: '/ˈedʒukeɪt/', pos: 'v.', meaning: '教育；培养', example: 'The program aims to educate children about nutrition.', level: 'CET-4' },
    { word: 'effective', phonetic: '/ɪˈfektɪv/', pos: 'adj.', meaning: '有效的', example: 'This medicine is very effective against headaches.', level: 'CET-4' },
    { word: 'efficient', phonetic: '/ɪˈfɪʃnt/', pos: 'adj.', meaning: '高效的', example: 'The new system is more efficient than the old one.', level: 'CET-4' },
    { word: 'eliminate', phonetic: '/ɪˈlɪmɪneɪt/', pos: 'v.', meaning: '消除；淘汰', example: 'The goal is to eliminate poverty by 2030.', level: 'CET-4' },
    { word: 'embrace', phonetic: '/ɪmˈbreɪs/', pos: 'v.', meaning: '拥抱；欣然接受', example: 'We should embrace change rather than fear it.', level: 'CET-4' },
    { word: 'emerge', phonetic: '/ɪˈmɜːrdʒ/', pos: 'v.', meaning: '出现；浮现', example: 'New details emerged during the investigation.', level: 'CET-4' },
    { word: 'emotion', phonetic: '/ɪˈməʊʃn/', pos: 'n.', meaning: '情感；情绪', example: 'Music has the power to evoke strong emotions.', level: 'CET-4' },
    { word: 'emphasis', phonetic: '/ˈemfəsɪs/', pos: 'n.', meaning: '强调；重点', example: 'The course places great emphasis on practical skills.', level: 'CET-4' },
    { word: 'employ', phonetic: '/ɪmˈplɔɪ/', pos: 'v.', meaning: '雇用；使用', example: 'The factory employs over 2,000 workers.', level: 'CET-4' },
    { word: 'enable', phonetic: '/ɪˈneɪbl/', pos: 'v.', meaning: '使能够', example: 'This scholarship will enable her to attend university.', level: 'CET-4' },
    { word: 'encounter', phonetic: '/ɪnˈkaʊntər/', pos: 'v./n.', meaning: '遭遇；遇到', example: 'We encountered several problems during the journey.', level: 'CET-4' },
    { word: 'encourage', phonetic: '/ɪnˈkʌrɪdʒ/', pos: 'v.', meaning: '鼓励', example: 'My parents always encouraged me to follow my dreams.', level: 'CET-4' },
    { word: 'engage', phonetic: '/ɪnˈɡeɪdʒ/', pos: 'v.', meaning: '参与；吸引；订婚', example: 'The teacher tried to engage all students in the discussion.', level: 'CET-4' },
    { word: 'enormous', phonetic: '/ɪˈnɔːrməs/', pos: 'adj.', meaning: '巨大的', example: 'The project required an enormous amount of effort.', level: 'CET-4' },
    { word: 'ensure', phonetic: '/ɪnˈʃʊər/', pos: 'v.', meaning: '确保；保证', example: 'Please ensure that all doors are locked before leaving.', level: 'CET-4' },
    { word: 'enterprise', phonetic: '/ˈentərpraɪz/', pos: 'n.', meaning: '企业；事业', example: 'Small enterprises are vital to the local economy.', level: 'CET-4' },
    { word: 'enthusiasm', phonetic: '/ɪnˈθjuːziæzəm/', pos: 'n.', meaning: '热情；热心', example: 'Her enthusiasm for teaching is truly inspiring.', level: 'CET-4' },
    { word: 'environment', phonetic: '/ɪnˈvaɪrənmənt/', pos: 'n.', meaning: '环境', example: 'We must protect the environment for future generations.', level: 'CET-4' },
    { word: 'equipment', phonetic: '/ɪˈkwɪpmənt/', pos: 'n.', meaning: '设备；装备', example: 'The gym has recently updated all its equipment.', level: 'CET-4' },
    { word: 'essential', phonetic: '/ɪˈsenʃl/', pos: 'adj.', meaning: '必要的；本质的', example: 'Water is essential for all forms of life.', level: 'CET-4' },
    { word: 'establish', phonetic: '/ɪˈstæblɪʃ/', pos: 'v.', meaning: '建立；设立', example: 'The company was established in 1995.', level: 'CET-4' },
    { word: 'estimate', phonetic: '/ˈestɪmeɪt/', pos: 'v./n.', meaning: '估计；估算', example: 'The project is estimated to cost $2 million.', level: 'CET-4' },
    { word: 'evaluate', phonetic: '/ɪˈvæljueɪt/', pos: 'v.', meaning: '评价；评估', example: 'Teachers evaluate students based on their performance.', level: 'CET-4' },
    { word: 'eventually', phonetic: '/ɪˈventʃuəli/', pos: 'adv.', meaning: '最终；终于', example: 'After years of effort she eventually succeeded.', level: 'CET-4' },
    { word: 'evidence', phonetic: '/ˈevɪdəns/', pos: 'n.', meaning: '证据', example: 'There is strong evidence linking smoking to cancer.', level: 'CET-4' },
    { word: 'evolution', phonetic: '/ˌiːvəˈluːʃn/', pos: 'n.', meaning: '进化；演变', example: 'Darwin\'s theory of evolution changed modern science.', level: 'CET-4' },
    { word: 'examine', phonetic: '/ɪɡˈzæmɪn/', pos: 'v.', meaning: '检查；考试', example: 'The doctor examined the patient thoroughly.', level: 'CET-4' },
    { word: 'exception', phonetic: '/ɪkˈsepʃn/', pos: 'n.', meaning: '例外', example: 'Most students passed the test, with a few exceptions.', level: 'CET-4' },
    { word: 'exchange', phonetic: '/ɪksˈtʃeɪndʒ/', pos: 'v./n.', meaning: '交换；兑换', example: 'They exchanged ideas during the meeting.', level: 'CET-4' },
    { word: 'exclude', phonetic: '/ɪkˈskluːd/', pos: 'v.', meaning: '排除；排斥', example: 'The price excludes tax and delivery charges.', level: 'CET-4' },
    { word: 'expand', phonetic: '/ɪkˈspænd/', pos: 'v.', meaning: '扩展；扩张', example: 'The company plans to expand into Asian markets.', level: 'CET-4' },
    { word: 'expect', phonetic: '/ɪkˈspekt/', pos: 'v.', meaning: '期望；预计', example: 'I expect to graduate next summer.', level: 'CET-4' },
    { word: 'expense', phonetic: '/ɪkˈspens/', pos: 'n.', meaning: '费用；开支', example: 'Travel expenses are covered by the company.', level: 'CET-4' },
    { word: 'experiment', phonetic: '/ɪkˈsperɪmənt/', pos: 'n./v.', meaning: '实验；试验', example: 'The students conducted a chemistry experiment in class.', level: 'CET-4' },
    { word: 'expert', phonetic: '/ˈekspɜːrt/', pos: 'n./adj.', meaning: '专家；熟练的', example: 'She is an expert in artificial intelligence.', level: 'CET-4' },
    { word: 'explain', phonetic: '/ɪkˈspleɪn/', pos: 'v.', meaning: '解释；说明', example: 'Can you explain how this machine works?', level: 'CET-4' },
    { word: 'explore', phonetic: '/ɪkˈsplɔːr/', pos: 'v.', meaning: '探索；探究', example: 'The children love to explore the nearby forest.', level: 'CET-4' },
    { word: 'export', phonetic: '/ɪkˈspɔːrt/', pos: 'v./n.', meaning: '出口；输出', example: 'China exports a wide range of products worldwide.', level: 'CET-4' },
    { word: 'expose', phonetic: '/ɪkˈspəʊz/', pos: 'v.', meaning: '暴露；揭露', example: 'The report exposed serious flaws in the system.', level: 'CET-4' },
    { word: 'extend', phonetic: '/ɪkˈstend/', pos: 'v.', meaning: '延伸；扩展', example: 'They decided to extend the deadline by two weeks.', level: 'CET-4' },
    { word: 'extreme', phonetic: '/ɪkˈstriːm/', pos: 'adj./n.', meaning: '极端的；极端', example: 'Extreme weather events are becoming more frequent.', level: 'CET-4' },
    { word: 'facility', phonetic: '/fəˈsɪləti/', pos: 'n.', meaning: '设施；设备', example: 'The hotel has excellent sports facilities.', level: 'CET-4' },
  ],
  cet6_group1: [
    { word: 'abolish', phonetic: '/əˈbɒlɪʃ/', pos: 'v.', meaning: '废除；取消', example: 'Many countries have abolished the death penalty.', level: 'CET-6' },
    { word: 'abrupt', phonetic: '/əˈbrʌpt/', pos: 'adj.', meaning: '突然的；唐突的', example: 'The meeting came to an abrupt end when the fire alarm rang.', level: 'CET-6' },
    { word: 'absurd', phonetic: '/əbˈsɜːrd/', pos: 'adj.', meaning: '荒谬的；可笑的', example: 'It is absurd to think that money can buy happiness.', level: 'CET-6' },
    { word: 'abuse', phonetic: '/əˈbjuːz/', pos: 'v./n.', meaning: '滥用；虐待', example: 'The politician was accused of abusing his power.', level: 'CET-6' },
    { word: 'accessory', phonetic: '/əkˈsesəri/', pos: 'n.', meaning: '配件；附件；从犯', example: 'She bought a phone case and other accessories.', level: 'CET-6' },
    { word: 'accommodate', phonetic: '/əˈkɒmədeɪt/', pos: 'v.', meaning: '容纳；适应；提供住宿', example: 'The hotel can accommodate up to 300 guests.', level: 'CET-6' },
    { word: 'accumulate', phonetic: '/əˈkjuːmjəleɪt/', pos: 'v.', meaning: '积累；积聚', example: 'He has accumulated a vast collection of rare books.', level: 'CET-6' },
    { word: 'acquaint', phonetic: '/əˈkweɪnt/', pos: 'v.', meaning: '使熟悉；使认识', example: 'Please acquaint yourself with the safety procedures.', level: 'CET-6' },
    { word: 'activate', phonetic: '/ˈæktɪveɪt/', pos: 'v.', meaning: '激活；启动', example: 'You need to activate your account before using the service.', level: 'CET-6' },
    { word: 'acute', phonetic: '/əˈkjuːt/', pos: 'adj.', meaning: '急性的；敏锐的', example: 'The patient was suffering from acute abdominal pain.', level: 'CET-6' },
    { word: 'adhere', phonetic: '/ədˈhɪər/', pos: 'v.', meaning: '遵守；粘附', example: 'All employees must adhere to the company code of conduct.', level: 'CET-6' },
    { word: 'adjacent', phonetic: '/əˈdʒeɪsnt/', pos: 'adj.', meaning: '邻近的；毗连的', example: 'The hotel is adjacent to the train station.', level: 'CET-6' },
    { word: 'administer', phonetic: '/ədˈmɪnɪstər/', pos: 'v.', meaning: '管理；执行', example: 'The fund is administered by a board of trustees.', level: 'CET-6' },
    { word: 'adolescent', phonetic: '/ˌædəˈlesnt/', pos: 'n./adj.', meaning: '青少年；青春期的', example: 'The program is designed for adolescents aged 13 to 18.', level: 'CET-6' },
    { word: 'adverse', phonetic: '/ˈædvɜːrs/', pos: 'adj.', meaning: '不利的；相反的', example: 'The drug may have adverse side effects.', level: 'CET-6' },
    { word: 'advocate', phonetic: '/ˈædvəkeɪt/', pos: 'v./n.', meaning: '提倡；倡导者', example: 'She advocates for better mental health services.', level: 'CET-6' },
    { word: 'aesthetic', phonetic: '/iːsˈθetɪk/', pos: 'adj.', meaning: '美学的；审美的', example: 'The building combines functionality with aesthetic appeal.', level: 'CET-6' },
    { word: 'affiliate', phonetic: '/əˈfɪlieɪt/', pos: 'v./n.', meaning: '使附属；附属机构', example: 'The hospital is affiliated with a major university.', level: 'CET-6' },
    { word: 'affirm', phonetic: '/əˈfɜːrm/', pos: 'v.', meaning: '肯定；确认', example: 'The court affirmed the lower court\'s decision.', level: 'CET-6' },
    { word: 'afflict', phonetic: '/əˈflɪkt/', pos: 'v.', meaning: '折磨；使痛苦', example: 'The region is afflicted by chronic drought.', level: 'CET-6' },
    { word: 'aggravate', phonetic: '/ˈæɡrəveɪt/', pos: 'v.', meaning: '加重；恶化', example: 'Scratching the rash will only aggravate the condition.', level: 'CET-6' },
    { word: 'aggregate', phonetic: '/ˈæɡrɪɡət/', pos: 'v./n./adj.', meaning: '聚集；总计', example: 'The company\'s aggregate revenue exceeded $1 billion.', level: 'CET-6' },
    { word: 'agitate', phonetic: '/ˈædʒɪteɪt/', pos: 'v.', meaning: '煽动；搅动', example: 'The activists agitated for political reform.', level: 'CET-6' },
    { word: 'agony', phonetic: '/ˈæɡəni/', pos: 'n.', meaning: '极大的痛苦', example: 'The injured animal was in obvious agony.', level: 'CET-6' },
    { word: 'alien', phonetic: '/ˈeɪliən/', pos: 'adj./n.', meaning: '外国的；外星人', example: 'The customs felt alien to the new immigrants.', level: 'CET-6' },
    { word: 'alienate', phonetic: '/ˈeɪliəneɪt/', pos: 'v.', meaning: '疏远；使孤立', example: 'His arrogant behavior alienated his colleagues.', level: 'CET-6' },
    { word: 'allege', phonetic: '/əˈledʒ/', pos: 'v.', meaning: '断言；声称', example: 'The suspect is alleged to have stolen confidential data.', level: 'CET-6' },
    { word: 'alleviate', phonetic: '/əˈliːvieɪt/', pos: 'v.', meaning: '减轻；缓解', example: 'The medicine helped alleviate her back pain.', level: 'CET-6' },
    { word: 'allocate', phonetic: '/ˈæləkeɪt/', pos: 'v.', meaning: '分配；拨出', example: 'The government allocated $10 million for the project.', level: 'CET-6' },
    { word: 'alloy', phonetic: '/ˈælɔɪ/', pos: 'n.', meaning: '合金', example: 'Steel is an alloy of iron and carbon.', level: 'CET-6' },
    { word: 'ally', phonetic: '/ˈælaɪ/', pos: 'n./v.', meaning: '盟友；结盟', example: 'The two countries were allies during the war.', level: 'CET-6' },
    { word: 'alter', phonetic: '/ˈɔːltər/', pos: 'v.', meaning: '改变；修改', example: 'The agreement cannot be altered without mutual consent.', level: 'CET-6' },
    { word: 'alternate', phonetic: '/ˈɔːltərneɪt/', pos: 'v./adj.', meaning: '交替；轮流的', example: 'The lights flash red and green in alternate patterns.', level: 'CET-6' },
    { word: 'amateur', phonetic: '/ˈæmətər/', pos: 'n./adj.', meaning: '业余爱好者；业余的', example: 'He started as an amateur photographer before turning professional.', level: 'CET-6' },
    { word: 'ambassador', phonetic: '/æmˈbæsədər/', pos: 'n.', meaning: '大使', example: 'She served as ambassador to France for five years.', level: 'CET-6' },
    { word: 'ambiguous', phonetic: '/æmˈbɪɡjuəs/', pos: 'adj.', meaning: '模棱两可的', example: 'The wording of the contract is deliberately ambiguous.', level: 'CET-6' },
    { word: 'amend', phonetic: '/əˈmend/', pos: 'v.', meaning: '修改；修正', example: 'The constitution was amended to include new rights.', level: 'CET-6' },
    { word: 'ample', phonetic: '/ˈæmpl/', pos: 'adj.', meaning: '充足的；宽敞的', example: 'There is ample evidence to support this theory.', level: 'CET-6' },
    { word: 'amplify', phonetic: '/ˈæmplɪfaɪ/', pos: 'v.', meaning: '放大；增强', example: 'The microphone amplifies the speaker\'s voice.', level: 'CET-6' },
    { word: 'analogy', phonetic: '/əˈnælədʒi/', pos: 'n.', meaning: '类比；比喻', example: 'The teacher used an analogy to explain the complex concept.', level: 'CET-6' },
    { word: 'anonymous', phonetic: '/əˈnɒnɪməs/', pos: 'adj.', meaning: '匿名的', example: 'The donation was made by an anonymous benefactor.', level: 'CET-6' },
    { word: 'apparatus', phonetic: '/ˌæpəˈreɪtəs/', pos: 'n.', meaning: '器械；装置', example: 'The laboratory is equipped with sophisticated apparatus.', level: 'CET-6' },
    { word: 'applaud', phonetic: '/əˈplɔːd/', pos: 'v.', meaning: '鼓掌；称赞', example: 'The audience stood up to applaud the performers.', level: 'CET-6' },
    { word: 'appraisal', phonetic: '/əˈpreɪzl/', pos: 'n.', meaning: '评价；评估', example: 'Employees receive an annual performance appraisal.', level: 'CET-6' },
    { word: 'apt', phonetic: '/æpt/', pos: 'adj.', meaning: '恰当的；有…倾向的', example: 'His apt reply impressed everyone at the meeting.', level: 'CET-6' },
    { word: 'arbitrary', phonetic: '/ˈɑːrbɪtrəri/', pos: 'adj.', meaning: '武断的；任意的', example: 'The decision seemed arbitrary and unfair to most people.', level: 'CET-6' },
    { word: 'array', phonetic: '/əˈreɪ/', pos: 'n.', meaning: '阵列；大量', example: 'The store offers a wide array of electronic products.', level: 'CET-6' },
    { word: 'arrogant', phonetic: '/ˈærəɡənt/', pos: 'adj.', meaning: '傲慢的；自大的', example: 'His arrogant attitude made him unpopular with colleagues.', level: 'CET-6' },
    { word: 'articulate', phonetic: '/ɑːrˈtɪkjuleɪt/', pos: 'v./adj.', meaning: '清晰表达；口才好的', example: 'She articulated her vision for the company very clearly.', level: 'CET-6' },
    { word: 'ascend', phonetic: '/əˈsend/', pos: 'v.', meaning: '上升；攀登', example: 'The elevator slowly ascended to the 50th floor.', level: 'CET-6' },
  ],
  cet6_group2: [
    { word: 'ascertain', phonetic: '/ˌæsərˈteɪn/', pos: 'v.', meaning: '查明；确定', example: 'The police are trying to ascertain the cause of the fire.', level: 'CET-6' },
    { word: 'ascribe', phonetic: '/əˈskraɪb/', pos: 'v.', meaning: '归因于', example: 'The discovery is ascribed to a team of Chinese researchers.', level: 'CET-6' },
    { word: 'assault', phonetic: '/əˈsɔːlt/', pos: 'n./v.', meaning: '攻击；袭击', example: 'The victim was seriously injured in the assault.', level: 'CET-6' },
    { word: 'assert', phonetic: '/əˈsɜːrt/', pos: 'v.', meaning: '断言；主张', example: 'The CEO asserted that the company would recover soon.', level: 'CET-6' },
    { word: 'asset', phonetic: '/ˈæset/', pos: 'n.', meaning: '资产；优点', example: 'Her language skills are a valuable asset to the team.', level: 'CET-6' },
    { word: 'assimilate', phonetic: '/əˈsɪməleɪt/', pos: 'v.', meaning: '同化；吸收', example: 'Immigrants often assimilate into the local culture over time.', level: 'CET-6' },
    { word: 'assurance', phonetic: '/əˈʃʊərəns/', pos: 'n.', meaning: '保证；保险', example: 'He gave me his assurance that the work would be done on time.', level: 'CET-6' },
    { word: 'attain', phonetic: '/əˈteɪn/', pos: 'v.', meaning: '达到；获得', example: 'Few people attain this level of expertise in their lifetime.', level: 'CET-6' },
    { word: 'attendance', phonetic: '/əˈtendəns/', pos: 'n.', meaning: '出席；参加', example: 'Attendance at the conference exceeded expectations.', level: 'CET-6' },
    { word: 'auction', phonetic: '/ˈɔːkʃn/', pos: 'n./v.', meaning: '拍卖', example: 'The painting was sold at auction for $5 million.', level: 'CET-6' },
    { word: 'authentic', phonetic: '/ɔːˈθentɪk/', pos: 'adj.', meaning: '真正的；真实的', example: 'The restaurant serves authentic Sichuan cuisine.', level: 'CET-6' },
    { word: 'authoritative', phonetic: '/ɔːˈθɒrɪtətɪv/', pos: 'adj.', meaning: '权威的；命令式的', example: 'This is the most authoritative book on the subject.', level: 'CET-6' },
    { word: 'autonomy', phonetic: '/ɔːˈtɒnəmi/', pos: 'n.', meaning: '自治；自主权', example: 'The region was granted greater autonomy by the central government.', level: 'CET-6' },
    { word: 'avail', phonetic: '/əˈveɪl/', pos: 'v./n.', meaning: '利用；效用', example: 'You should avail yourself of every opportunity to learn.', level: 'CET-6' },
    { word: 'avert', phonetic: '/əˈvɜːrt/', pos: 'v.', meaning: '避免；转移', example: 'Quick action averted a major disaster.', level: 'CET-6' },
    { word: 'awkward', phonetic: '/ˈɔːkwərd/', pos: 'adj.', meaning: '尴尬的；笨拙的', example: 'There was an awkward silence after his comment.', level: 'CET-6' },
    { word: 'barren', phonetic: '/ˈbærən/', pos: 'adj.', meaning: '贫瘠的；不育的', example: 'Nothing grows in this barren desert landscape.', level: 'CET-6' },
    { word: 'barrier', phonetic: '/ˈbæriər/', pos: 'n.', meaning: '障碍；屏障', example: 'Language barriers can make communication difficult.', level: 'CET-6' },
    { word: 'beforehand', phonetic: '/bɪˈfɔːrhænd/', pos: 'adv.', meaning: '预先；事先', example: 'Please let me know beforehand if you cannot attend.', level: 'CET-6' },
    { word: 'bewilder', phonetic: '/bɪˈwɪldər/', pos: 'v.', meaning: '使困惑；使迷惑', example: 'The complex instructions bewildered the new employees.', level: 'CET-6' },
    { word: 'bias', phonetic: '/ˈbaɪəs/', pos: 'n.', meaning: '偏见；偏向', example: 'The judge was accused of showing bias in the case.', level: 'CET-6' },
    { word: 'bleak', phonetic: '/bliːk/', pos: 'adj.', meaning: '暗淡的；荒凉的', example: 'The economic outlook remains bleak for the coming year.', level: 'CET-6' },
    { word: 'blunder', phonetic: '/ˈblʌndər/', pos: 'n./v.', meaning: '大错；犯大错', example: 'He made a serious blunder in the final report.', level: 'CET-6' },
    { word: 'bonus', phonetic: '/ˈbəʊnəs/', pos: 'n.', meaning: '奖金；红利', example: 'Employees received a year-end bonus for their hard work.', level: 'CET-6' },
    { word: 'boom', phonetic: '/buːm/', pos: 'n./v.', meaning: '繁荣；激增', example: 'The tech industry experienced a massive boom in the 1990s.', level: 'CET-6' },
    { word: 'boycott', phonetic: '/ˈbɔɪkɒt/', pos: 'v./n.', meaning: '抵制；联合抵制', example: 'Consumers boycotted the company over its labor practices.', level: 'CET-6' },
    { word: 'breach', phonetic: '/briːtʃ/', pos: 'n./v.', meaning: '违反；破坏', example: 'The company was fined for breach of contract.', level: 'CET-6' },
    { word: 'breakdown', phonetic: '/ˈbreɪkdaʊn/', pos: 'n.', meaning: '故障；崩溃', example: 'The car had a breakdown on the highway.', level: 'CET-6' },
    { word: 'breakthrough', phonetic: '/ˈbreɪkθruː/', pos: 'n.', meaning: '突破', example: 'Scientists announced a major breakthrough in cancer research.', level: 'CET-6' },
    { word: 'brew', phonetic: '/bruː/', pos: 'v.', meaning: '酿造；酝酿', example: 'A storm is brewing on the horizon.', level: 'CET-6' },
    { word: 'brink', phonetic: '/brɪŋk/', pos: 'n.', meaning: '边缘', example: 'The company was on the brink of bankruptcy.', level: 'CET-6' },
    { word: 'brisk', phonetic: '/brɪsk/', pos: 'adj.', meaning: '轻快的；兴旺的', example: 'A brisk walk every morning keeps her healthy.', level: 'CET-6' },
    { word: 'bureaucracy', phonetic: '/bjʊəˈrɒkrəsi/', pos: 'n.', meaning: '官僚机构；官僚主义', example: 'The project was delayed by unnecessary bureaucracy.', level: 'CET-6' },
    { word: 'catastrophe', phonetic: '/kəˈtæstrəfi/', pos: 'n.', meaning: '灾难；大祸', example: 'The flood was the worst catastrophe in the region\'s history.', level: 'CET-6' },
    { word: 'cater', phonetic: '/ˈkeɪtər/', pos: 'v.', meaning: '提供饮食；迎合', example: 'The hotel caters for weddings and conferences.', level: 'CET-6' },
    { word: 'caution', phonetic: '/ˈkɔːʃn/', pos: 'n./v.', meaning: '谨慎；警告', example: 'The sign warns drivers to proceed with caution.', level: 'CET-6' },
    { word: 'chronic', phonetic: '/ˈkrɒnɪk/', pos: 'adj.', meaning: '慢性的；长期的', example: 'She suffers from chronic back pain.', level: 'CET-6' },
    { word: 'circulation', phonetic: '/ˌsɜːrkjəˈleɪʃn/', pos: 'n.', meaning: '循环；流通', example: 'Regular exercise improves blood circulation.', level: 'CET-6' },
    { word: 'clash', phonetic: '/klæʃ/', pos: 'n./v.', meaning: '冲突；碰撞', example: 'Violent clashes broke out between protesters and police.', level: 'CET-6' },
    { word: 'cling', phonetic: '/klɪŋ/', pos: 'v.', meaning: '紧紧抓住；依恋', example: 'The child clung to her mother in the crowded street.', level: 'CET-6' },
    { word: 'coincidence', phonetic: '/kəʊˈɪnsɪdəns/', pos: 'n.', meaning: '巧合', example: 'Meeting her here was a complete coincidence.', level: 'CET-6' },
    { word: 'collaborate', phonetic: '/kəˈlæbəreɪt/', pos: 'v.', meaning: '合作；协作', example: 'The two universities collaborate on several research projects.', level: 'CET-6' },
    { word: 'commence', phonetic: '/kəˈmens/', pos: 'v.', meaning: '开始', example: 'The construction work will commence next Monday.', level: 'CET-6' },
    { word: 'commodity', phonetic: '/kəˈmɒdəti/', pos: 'n.', meaning: '商品；日用品', example: 'Oil is one of the world\'s most traded commodities.', level: 'CET-6' },
    { word: 'compel', phonetic: '/kəmˈpel/', pos: 'v.', meaning: '强迫；迫使', example: 'The evidence compelled him to admit his guilt.', level: 'CET-6' },
    { word: 'compensate', phonetic: '/ˈkɒmpenseɪt/', pos: 'v.', meaning: '补偿；赔偿', example: 'The company will compensate passengers for the delay.', level: 'CET-6' },
    { word: 'complement', phonetic: '/ˈkɒmplɪment/', pos: 'v./n.', meaning: '补充；补足', example: 'The sauce complements the flavor of the fish perfectly.', level: 'CET-6' },
    { word: 'comply', phonetic: '/kəmˈplaɪ/', pos: 'v.', meaning: '遵守；服从', example: 'All factories must comply with environmental regulations.', level: 'CET-6' },
    { word: 'comprehend', phonetic: '/ˌkɒmprɪˈhend/', pos: 'v.', meaning: '理解；领悟', example: 'It is difficult to comprehend the scale of the universe.', level: 'CET-6' },
    { word: 'compulsory', phonetic: '/kəmˈpʌlsəri/', pos: 'adj.', meaning: '强制的；义务的', example: 'Education is compulsory for children aged 6 to 16.', level: 'CET-6' },
  ],
  cet6_group3: [
    { word: 'conceive', phonetic: '/kənˈsiːv/', pos: 'v.', meaning: '构想；怀孕', example: 'She conceived the idea for the book while traveling.', level: 'CET-6' },
    { word: 'concise', phonetic: '/kənˈsaɪs/', pos: 'adj.', meaning: '简洁的；简明的', example: 'Please give a concise summary of your findings.', level: 'CET-6' },
    { word: 'condemn', phonetic: '/kənˈdem/', pos: 'v.', meaning: '谴责；判刑', example: 'The international community condemned the attack.', level: 'CET-6' },
    { word: 'confer', phonetic: '/kənˈfɜːr/', pos: 'v.', meaning: '授予；商议', example: 'The university conferred an honorary degree on the scientist.', level: 'CET-6' },
    { word: 'confidential', phonetic: '/ˌkɒnfɪˈdenʃl/', pos: 'adj.', meaning: '机密的；保密的', example: 'This document contains highly confidential information.', level: 'CET-6' },
    { word: 'conform', phonetic: '/kənˈfɔːrm/', pos: 'v.', meaning: '遵守；符合', example: 'The building must conform to safety regulations.', level: 'CET-6' },
    { word: 'conscientious', phonetic: '/ˌkɒnʃiˈenʃəs/', pos: 'adj.', meaning: '认真负责的', example: 'She is a conscientious worker who never misses deadlines.', level: 'CET-6' },
    { word: 'consensus', phonetic: '/kənˈsensəs/', pos: 'n.', meaning: '共识；一致意见', example: 'There is a growing consensus that action is needed now.', level: 'CET-6' },
    { word: 'conserve', phonetic: '/kənˈsɜːrv/', pos: 'v.', meaning: '保存；节约', example: 'We all need to conserve water during the drought.', level: 'CET-6' },
    { word: 'consolidate', phonetic: '/kənˈsɒlɪdeɪt/', pos: 'v.', meaning: '巩固；合并', example: 'The two departments were consolidated into one.', level: 'CET-6' },
    { word: 'conspicuous', phonetic: '/kənˈspɪkjuəs/', pos: 'adj.', meaning: '显眼的；引人注目的', example: 'The red sign was conspicuous against the white wall.', level: 'CET-6' },
    { word: 'contemplate', phonetic: '/ˈkɒntəmpleɪt/', pos: 'v.', meaning: '沉思；考虑', example: 'She sat in the garden contemplating her future.', level: 'CET-6' },
    { word: 'contempt', phonetic: '/kənˈtempt/', pos: 'n.', meaning: '轻视；蔑视', example: 'He looked at the thief with obvious contempt.', level: 'CET-6' },
    { word: 'contend', phonetic: '/kənˈtend/', pos: 'v.', meaning: '竞争；主张', example: 'Several teams are contending for the championship.', level: 'CET-6' },
    { word: 'contradict', phonetic: '/ˌkɒntrəˈdɪkt/', pos: 'v.', meaning: '反驳；与…矛盾', example: 'His later statement contradicted his earlier testimony.', level: 'CET-6' },
    { word: 'controversy', phonetic: '/ˈkɒntrəvɜːrsi/', pos: 'n.', meaning: '争论；争议', example: 'The new policy has caused considerable controversy.', level: 'CET-6' },
    { word: 'convene', phonetic: '/kənˈviːn/', pos: 'v.', meaning: '召集；召开', example: 'The committee will convene next Thursday to discuss the issue.', level: 'CET-6' },
    { word: 'converge', phonetic: '/kənˈvɜːrdʒ/', pos: 'v.', meaning: '聚集；汇聚', example: 'Thousands of fans converged on the stadium for the concert.', level: 'CET-6' },
    { word: 'conversion', phonetic: '/kənˈvɜːrʃn/', pos: 'n.', meaning: '转变；换算', example: 'The conversion of the old factory into apartments took two years.', level: 'CET-6' },
    { word: 'coordinate', phonetic: '/kəʊˈɔːrdɪneɪt/', pos: 'v.', meaning: '协调；配合', example: 'She coordinates the efforts of volunteers across the city.', level: 'CET-6' },
    { word: 'corrupt', phonetic: '/kəˈrʌpt/', pos: 'adj./v.', meaning: '腐败的；使腐化', example: 'The corrupt officials were eventually brought to justice.', level: 'CET-6' },
    { word: 'counsel', phonetic: '/ˈkaʊnsl/', pos: 'n./v.', meaning: '建议；劝告', example: 'The lawyer counseled her client to accept the settlement.', level: 'CET-6' },
    { word: 'counterpart', phonetic: '/ˈkaʊntərpɑːrt/', pos: 'n.', meaning: '对应的人或物', example: 'The Chinese premier met with his Japanese counterpart.', level: 'CET-6' },
    { word: 'crucial', phonetic: '/ˈkruːʃl/', pos: 'adj.', meaning: '关键的；至关重要的', example: 'The next few weeks will be crucial for the negotiations.', level: 'CET-6' },
    { word: 'cumulative', phonetic: '/ˈkjuːmjələtɪv/', pos: 'adj.', meaning: '累积的', example: 'The cumulative effect of stress can be dangerous to health.', level: 'CET-6' },
    { word: 'cynical', phonetic: '/ˈsɪnɪkl/', pos: 'adj.', meaning: '愤世嫉俗的；怀疑的', example: 'He became cynical about politics after years of disappointment.', level: 'CET-6' },
    { word: 'decisive', phonetic: '/dɪˈsaɪsɪv/', pos: 'adj.', meaning: '决定性的；果断的', example: 'Her decisive action prevented the crisis from escalating.', level: 'CET-6' },
    { word: 'deficit', phonetic: '/ˈdefɪsɪt/', pos: 'n.', meaning: '赤字；不足', example: 'The government is trying to reduce the budget deficit.', level: 'CET-6' },
    { word: 'degenerate', phonetic: '/dɪˈdʒenəreɪt/', pos: 'v./adj.', meaning: '退化；堕落', example: 'The peaceful protest degenerated into violent chaos.', level: 'CET-6' },
    { word: 'deliberate', phonetic: '/dɪˈlɪbərət/', pos: 'adj./v.', meaning: '故意的；深思熟虑', example: 'The jury found that the act was deliberate and premeditated.', level: 'CET-6' },
    { word: 'denial', phonetic: '/dɪˈnaɪəl/', pos: 'n.', meaning: '否认；拒绝', example: 'His denial of any wrongdoing was met with skepticism.', level: 'CET-6' },
    { word: 'depict', phonetic: '/dɪˈpɪkt/', pos: 'v.', meaning: '描绘；描述', example: 'The novel depicts life in 19th-century rural China.', level: 'CET-6' },
    { word: 'deploy', phonetic: '/dɪˈplɔɪ/', pos: 'v.', meaning: '部署；调度', example: 'The military deployed additional troops to the border.', level: 'CET-6' },
    { word: 'deprive', phonetic: '/dɪˈpraɪv/', pos: 'v.', meaning: '剥夺；使丧失', example: 'Sleep deprivation can deprive you of the ability to concentrate.', level: 'CET-6' },
    { word: 'designate', phonetic: '/ˈdezɪɡneɪt/', pos: 'v.', meaning: '指定；标明', example: 'This area has been designated as a nature reserve.', level: 'CET-6' },
    { word: 'deteriorate', phonetic: '/dɪˈtɪəriəreɪt/', pos: 'v.', meaning: '恶化；退化', example: 'His health began to deteriorate rapidly after the stroke.', level: 'CET-6' },
    { word: 'dilemma', phonetic: '/dɪˈlemə/', pos: 'n.', meaning: '困境；进退两难', example: 'She faced the dilemma of choosing between career and family.', level: 'CET-6' },
    { word: 'diligent', phonetic: '/ˈdɪlɪdʒənt/', pos: 'adj.', meaning: '勤奋的；勤勉的', example: 'The diligent student spent every evening in the library.', level: 'CET-6' },
    { word: 'diminish', phonetic: '/dɪˈmɪnɪʃ/', pos: 'v.', meaning: '减少；削弱', example: 'The pain gradually diminished after taking the medication.', level: 'CET-6' },
    { word: 'disclose', phonetic: '/dɪsˈkləʊz/', pos: 'v.', meaning: '揭露；透露', example: 'The company refused to disclose its financial records.', level: 'CET-6' },
    { word: 'discrepancy', phonetic: '/dɪsˈkrepənsi/', pos: 'n.', meaning: '差异；不一致', example: 'There is a discrepancy between the two reports.', level: 'CET-6' },
    { word: 'disposition', phonetic: '/ˌdɪspəˈzɪʃn/', pos: 'n.', meaning: '性情；处置', example: 'She has a cheerful disposition that everyone admires.', level: 'CET-6' },
    { word: 'disrupt', phonetic: '/dɪsˈrʌpt/', pos: 'v.', meaning: '扰乱；中断', example: 'The storm disrupted air travel across the region.', level: 'CET-6' },
    { word: 'dissolve', phonetic: '/dɪˈzɒlv/', pos: 'v.', meaning: '溶解；解散', example: 'Sugar dissolves more quickly in hot water than in cold.', level: 'CET-6' },
    { word: 'distort', phonetic: '/dɪˈstɔːrt/', pos: 'v.', meaning: '扭曲；歪曲', example: 'The media report distorted the facts about the incident.', level: 'CET-6' },
    { word: 'divert', phonetic: '/daɪˈvɜːrt/', pos: 'v.', meaning: '转移；使转向', example: 'Traffic was diverted to avoid the accident scene.', level: 'CET-6' },
    { word: 'donate', phonetic: '/dəʊˈneɪt/', pos: 'v.', meaning: '捐赠；捐献', example: 'She regularly donates blood at the local hospital.', level: 'CET-6' },
    { word: 'drastic', phonetic: '/ˈdræstɪk/', pos: 'adj.', meaning: '激烈的； drastic', example: 'Drastic measures are needed to address climate change.', level: 'CET-6' },
    { word: 'drawback', phonetic: '/ˈdrɔːbæk/', pos: 'n.', meaning: '缺点；不利条件', example: 'The main drawback of this plan is its high cost.', level: 'CET-6' },
    { word: 'drought', phonetic: '/draʊt/', pos: 'n.', meaning: '干旱', example: 'The severe drought destroyed most of the crops.', level: 'CET-6' },
  ],
  cet6_group4: [
    { word: 'duplicate', phonetic: '/ˈdjuːplɪkeɪt/', pos: 'v./n.', meaning: '复制；副本', example: 'Please duplicate this file and send it to the manager.', level: 'CET-6' },
    { word: 'elaborate', phonetic: '/ɪˈlæbərət/', pos: 'adj./v.', meaning: '精心的；详细阐述', example: 'Could you elaborate on the points you made earlier?', level: 'CET-6' },
    { word: 'elevate', phonetic: '/ˈelɪveɪt/', pos: 'v.', meaning: '提升；提高', example: 'Reading great literature can elevate the mind and spirit.', level: 'CET-6' },
    { word: 'elicit', phonetic: '/ɪˈlɪsɪt/', pos: 'v.', meaning: '引出；诱出', example: 'The teacher\'s question elicited a lively discussion.', level: 'CET-6' },
    { word: 'embark', phonetic: '/ɪmˈbɑːrk/', pos: 'v.', meaning: '开始；着手', example: 'She is about to embark on a new career in medicine.', level: 'CET-6' },
    { word: 'empirical', phonetic: '/ɪmˈpɪrɪkl/', pos: 'adj.', meaning: '经验的；实证的', example: 'The theory is supported by extensive empirical evidence.', level: 'CET-6' },
    { word: 'endeavor', phonetic: '/ɪnˈdevər/', pos: 'n./v.', meaning: '努力；尽力', example: 'In spite of our best endeavors, we could not find a solution.', level: 'CET-6' },
    { word: 'endow', phonetic: '/ɪnˈdaʊ/', pos: 'v.', meaning: '赋予；捐赠', example: 'Nature has endowed this region with rich mineral deposits.', level: 'CET-6' },
    { word: 'endure', phonetic: '/ɪnˈdjʊər/', pos: 'v.', meaning: '忍受；持续', example: 'She endured years of hardship before finding success.', level: 'CET-6' },
    { word: 'enlighten', phonetic: '/ɪnˈlaɪtn/', pos: 'v.', meaning: '启发；开导', example: 'Could you enlighten us on the details of the proposal?', level: 'CET-6' },
    { word: 'entail', phonetic: '/ɪnˈteɪl/', pos: 'v.', meaning: '需要；牵涉', example: 'The new job entails a lot of international travel.', level: 'CET-6' },
    { word: 'entity', phonetic: '/ˈentəti/', pos: 'n.', meaning: '实体', example: 'The company is treated as a separate legal entity.', level: 'CET-6' },
    { word: 'entrepreneur', phonetic: '/ˌɒntrəprəˈnɜːr/', pos: 'n.', meaning: '企业家', example: 'The young entrepreneur started her first business at age 19.', level: 'CET-6' },
    { word: 'envisage', phonetic: '/ɪnˈvɪzɪdʒ/', pos: 'v.', meaning: '设想；展望', example: 'I cannot envisage a world without the internet.', level: 'CET-6' },
    { word: 'epidemic', phonetic: '/ˌepɪˈdemɪk/', pos: 'n./adj.', meaning: '流行病；流行的', example: 'The obesity epidemic is a major public health concern.', level: 'CET-6' },
    { word: 'erosion', phonetic: '/ɪˈrəʊʒn/', pos: 'n.', meaning: '侵蚀；腐蚀', example: 'Coastal erosion threatens many seaside communities.', level: 'CET-6' },
    { word: 'erroneous', phonetic: '/ɪˈrəʊniəs/', pos: 'adj.', meaning: '错误的', example: 'The article contains several erroneous statements.', level: 'CET-6' },
    { word: 'erupt', phonetic: '/ɪˈrʌpt/', pos: 'v.', meaning: '爆发；喷发', example: 'Violence erupted after the controversial court ruling.', level: 'CET-6' },
    { word: 'essence', phonetic: '/ˈesns/', pos: 'n.', meaning: '本质；精髓', example: 'The essence of the argument is that we need more time.', level: 'CET-6' },
    { word: 'eternal', phonetic: '/ɪˈtɜːrnl/', pos: 'adj.', meaning: '永恒的；永远的', example: 'The eternal debate between nature and nurture continues.', level: 'CET-6' },
    { word: 'evoke', phonetic: '/ɪˈvəʊk/', pos: 'v.', meaning: '唤起；引起', example: 'The photograph evoked memories of her childhood.', level: 'CET-6' },
    { word: 'exceed', phonetic: '/ɪkˈsiːd/', pos: 'v.', meaning: '超过；超越', example: 'The final cost exceeded our initial estimate by 30%.', level: 'CET-6' },
    { word: 'exempt', phonetic: '/ɪɡˈzempt/', pos: 'v./adj.', meaning: '免除；豁免', example: 'Students with good grades are exempted from the final exam.', level: 'CET-6' },
    { word: 'exile', phonetic: '/ˈeksaɪl/', pos: 'n./v.', meaning: '流放；放逐', example: 'The writer spent many years in exile abroad.', level: 'CET-6' },
    { word: 'exotic', phonetic: '/ɪɡˈzɒtɪk/', pos: 'adj.', meaning: '异国的；奇异的', example: 'The garden is filled with exotic plants from around the world.', level: 'CET-6' },
    { word: 'expedition', phonetic: '/ˌekspəˈdɪʃn/', pos: 'n.', meaning: '远征；探险', example: 'The expedition to the North Pole took three months.', level: 'CET-6' },
    { word: 'expire', phonetic: '/ɪkˈspaɪər/', pos: 'v.', meaning: '过期；期满', example: 'My passport will expire at the end of this year.', level: 'CET-6' },
    { word: 'explicit', phonetic: '/ɪkˈsplɪsɪt/', pos: 'adj.', meaning: '明确的；直截了当的', example: 'The instructions were very clear and explicit.', level: 'CET-6' },
    { word: 'exquisite', phonetic: '/ɪkˈskwɪzɪt/', pos: 'adj.', meaning: '精美的；精致的', example: 'The museum houses an exquisite collection of ceramics.', level: 'CET-6' },
    { word: 'extravagant', phonetic: '/ɪkˈstrævəɡənt/', pos: 'adj.', meaning: '奢侈的；过度的', example: 'The wedding was an extravagant affair with hundreds of guests.', level: 'CET-6' },
    { word: 'fabricate', phonetic: '/ˈfæbrɪkeɪt/', pos: 'v.', meaning: '制造；捏造', example: 'The witness admitted to fabricating the entire story.', level: 'CET-6' },
    { word: 'facet', phonetic: '/ˈfæsɪt/', pos: 'n.', meaning: '方面；面', example: 'We explored every facet of the complex problem.', level: 'CET-6' },
    { word: 'feasible', phonetic: '/ˈfiːzəbl/', pos: 'adj.', meaning: '可行的', example: 'The committee concluded that the plan was not financially feasible.', level: 'CET-6' },
    { word: 'finite', phonetic: '/ˈfaɪnaɪt/', pos: 'adj.', meaning: '有限的', example: 'The Earth has finite resources that we must protect.', level: 'CET-6' },
    { word: 'flaw', phonetic: '/flɔː/', pos: 'n.', meaning: '缺陷；瑕疵', example: 'A major flaw in the software caused the system to crash.', level: 'CET-6' },
    { word: 'fluctuate', phonetic: '/ˈflʌktʃueɪt/', pos: 'v.', meaning: '波动；起伏', example: 'Stock prices fluctuate throughout the trading day.', level: 'CET-6' },
    { word: 'foremost', phonetic: '/ˈfɔːrməʊst/', pos: 'adj.', meaning: '最重要的；最先的', example: 'She is one of the foremost experts in her field.', level: 'CET-6' },
    { word: 'formulate', phonetic: '/ˈfɔːrmjuleɪt/', pos: 'v.', meaning: '制定；规划', example: 'The team met to formulate a new marketing strategy.', level: 'CET-6' },
    { word: 'foster', phonetic: '/ˈfɒstər/', pos: 'v.', meaning: '培养；促进', example: 'The program aims to foster creativity in young children.', level: 'CET-6' },
    { word: 'fragile', phonetic: '/ˈfrædʒaɪl/', pos: 'adj.', meaning: '脆弱的；易碎的', example: 'The ceasefire agreement remains fragile and could collapse.', level: 'CET-6' },
    { word: 'friction', phonetic: '/ˈfrɪkʃn/', pos: 'n.', meaning: '摩擦；冲突', example: 'There has been some friction between the two departments.', level: 'CET-6' },
    { word: 'fulfill', phonetic: '/fʊlˈfɪl/', pos: 'v.', meaning: '履行；实现', example: 'She worked hard to fulfill her dream of becoming a doctor.', level: 'CET-6' },
    { word: 'genuine', phonetic: '/ˈdʒenjuɪn/', pos: 'adj.', meaning: '真正的；真诚的', example: 'She showed genuine concern for the welfare of her students.', level: 'CET-6' },
    { word: 'glare', phonetic: '/ɡleər/', pos: 'n./v.', meaning: '强光；怒视', example: 'The glare from the sun made it difficult to see the road.', level: 'CET-6' },
    { word: 'glimpse', phonetic: '/ɡlɪmps/', pos: 'n./v.', meaning: '一瞥；瞥见', example: 'We caught a glimpse of the mountains through the clouds.', level: 'CET-6' },
    { word: 'grant', phonetic: '/ɡrænt/', pos: 'v./n.', meaning: '授予；同意', example: 'The university granted her a full scholarship.', level: 'CET-6' },
    { word: 'grieve', phonetic: '/ɡriːv/', pos: 'v.', meaning: '使悲伤；悲痛', example: 'The nation grieved the loss of its beloved leader.', level: 'CET-6' },
    { word: 'hamper', phonetic: '/ˈhæmpər/', pos: 'v.', meaning: '阻碍；妨碍', example: 'Bad weather hampered the rescue efforts.', level: 'CET-6' },
    { word: 'hierarchy', phonetic: '/ˈhaɪərɑːrki/', pos: 'n.', meaning: '层级；等级制度', example: 'The company has a rigid hierarchy that limits innovation.', level: 'CET-6' },
    { word: 'hinder', phonetic: '/ˈhɪndər/', pos: 'v.', meaning: '阻碍；妨碍', example: 'Lack of funding hindered the progress of the research.', level: 'CET-6' },
  ],
};

// ---------- Grammar Data ----------

const grammarData = {
  tenses: [
    { question: 'She ___ to school every day.', options: ['go', 'goes', 'going', 'gone'], answer: 1, explanation: 'Third person singular (she) requires "goes" in present simple tense.' },
    { question: 'They ___ a movie when I arrived.', options: ['watch', 'watched', 'were watching', 'have watched'], answer: 2, explanation: 'Past continuous ("were watching") describes an action in progress when another action ("arrived") occurred.' },
    { question: 'By next year, I ___ here for ten years.', options: ['work', 'worked', 'will have worked', 'am working'], answer: 2, explanation: 'Future perfect ("will have worked") expresses an action that will be completed before a specific future time.' },
    { question: 'He ___ his homework yet.', options: ['did not finish', 'has not finished', 'does not finish', 'had not finished'], answer: 1, explanation: 'Present perfect ("has not finished") with "yet" indicates an unfinished action up to now.' },
    { question: 'If I ___ rich, I would travel the world.', options: ['am', 'was', 'were', 'be'], answer: 2, explanation: 'In second conditional (unreal present), we use "were" for all persons.' },
    { question: 'She ___ English for five years before she moved to London.', options: ['studied', 'has studied', 'had studied', 'was studying'], answer: 2, explanation: 'Past perfect ("had studied") shows an action completed before another past action ("moved").' },
    { question: 'Look! The children ___ in the garden.', options: ['play', 'are playing', 'have played', 'were playing'], answer: 1, explanation: 'Present continuous ("are playing") describes an action happening right now, indicated by "Look!".' },
    { question: 'By the time we arrive, the movie ___.', options: ['starts', 'started', 'will have started', 'is starting'], answer: 2, explanation: 'Future perfect ("will have started") for an action completed before a future time ("by the time we arrive").' },
  ],
  prepositions: [
    { question: 'She is good ___ playing the piano.', options: ['at', 'in', 'on', 'for'], answer: 0, explanation: '"Good at" is the correct collocation for skills and abilities.' },
    { question: 'I will meet you ___ the airport.', options: ['in', 'on', 'at', 'to'], answer: 2, explanation: 'We use "at" for specific locations like airport, station, school.' },
    { question: 'He has been working here ___ 2015.', options: ['for', 'since', 'from', 'in'], answer: 1, explanation: '"Since" is used with a specific point in time (2015). "For" would be used with a duration.' },
    { question: 'The book is ___ the table.', options: ['in', 'at', 'on', 'above'], answer: 2, explanation: '"On" is used when something is in contact with a surface.' },
    { question: 'She is interested ___ learning Japanese.', options: ['at', 'for', 'in', 'on'], answer: 2, explanation: '"Interested in" is the correct collocation.' },
    { question: 'He insisted ___ paying for the meal.', options: ['at', 'on', 'in', 'for'], answer: 1, explanation: '"Insist on" is the correct collocation.' },
    { question: 'She apologized ___ being late.', options: ['at', 'in', 'on', 'for'], answer: 3, explanation: '"Apologize for" is the correct collocation.' },
    { question: 'We are looking forward ___ seeing you.', options: ['at', 'to', 'for', 'in'], answer: 1, explanation: '"Look forward to" is the correct collocation. Note: "to" is a preposition here, followed by a gerund.' },
  ],
  articles: [
    { question: '___ sun rises in the east.', options: ['A', 'An', 'The', 'No article'], answer: 2, explanation: '"The" is used for unique things — there is only one sun.' },
    { question: 'She is ___ honest person.', options: ['a', 'an', 'the', 'no article'], answer: 1, explanation: '"An" is used before vowel sounds. "Honest" starts with a silent h, so the first sound is a vowel.' },
    { question: 'I saw ___ owl in the tree last night.', options: ['a', 'an', 'the', 'no article'], answer: 1, explanation: '"An" is used before vowel sounds. "Owl" starts with a vowel sound.' },
    { question: '___ water is essential for life.', options: ['A', 'An', 'The', 'No article'], answer: 3, explanation: 'No article is used when talking about uncountable nouns in a general sense.' },
    { question: 'He is ___ tallest boy in the class.', options: ['a', 'an', 'the', 'no article'], answer: 2, explanation: '"The" is used with superlative adjectives (tallest).' },
    { question: 'She plays ___ piano beautifully.', options: ['a', 'an', 'the', 'no article'], answer: 2, explanation: '"The" is used with musical instruments.' },
    { question: '___ Mount Everest is the highest peak in the world.', options: ['A', 'An', 'The', 'No article'], answer: 3, explanation: 'No article is used before names of individual mountains.' },
    { question: 'He goes to work by ___ bus every day.', options: ['a', 'an', 'the', 'no article'], answer: 3, explanation: 'No article is used in the phrase "by bus" when referring to the mode of transport.' },
  ],
  conjunctions: [
    { question: 'I will call you ___ I arrive at the hotel.', options: ['until', 'as soon as', 'while', 'although'], answer: 1, explanation: '"As soon as" indicates that one action happens immediately after another.' },
    { question: '___ it was raining, we decided to go for a walk.', options: ['Because', 'Unless', 'Although', 'Since'], answer: 2, explanation: '"Although" introduces a contrast — going for a walk despite the rain.' },
    { question: 'You cannot enter ___ you have a valid ID.', options: ['if', 'unless', 'when', 'because'], answer: 1, explanation: '"Unless" means "if not" — you can only enter if you have a valid ID.' },
    { question: 'She studied hard ___ she could pass the entrance exam.', options: ['so that', 'because', 'although', 'unless'], answer: 0, explanation: '"So that" expresses purpose — the reason for studying hard was to pass the exam.' },
    { question: '___ he is very wealthy, he lives a simple life.', options: ['Because', 'Unless', 'Even though', 'As long as'], answer: 2, explanation: '"Even though" introduces a surprising contrast between wealth and a simple lifestyle.' },
  ],
};

// ---------- Reading Data ----------

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
  vocabCategory: 'cet4_group1',
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

// Word of the Day
function setWordOfDay() {
  const allWords = [];
  Object.values(vocabularyData).forEach(group => allWords.push(...group));
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

function formatCatName(key) {
  const names = {
    cet4_group1: 'CET-4 第1组',
    cet4_group2: 'CET-4 第2组',
    cet4_group3: 'CET-4 第3组',
    cet4_group4: 'CET-4 第4组',
    cet6_group1: 'CET-6 第1组',
    cet6_group2: 'CET-6 第2组',
    cet6_group3: 'CET-6 第3组',
    cet6_group4: 'CET-6 第4组',
  };
  return names[key] || key;
}

function renderVocabCategories() {
  const container = qs('#vocab-categories');
  const cats = Object.keys(vocabularyData);
  container.innerHTML = cats.map(c =>
    '<button class="cat-tab' + (c === state.vocabCategory ? ' active' : '') +
    '" data-cat="' + c + '">' + formatCatName(c) + '</button>'
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
  return vocabularyData[state.vocabCategory] || vocabularyData.cet4_group1;
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
  btn.textContent = isLearned ? '已掌握' : '我记住了';
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

function formatGrammarCat(key) {
  const names = { tenses: '时态', prepositions: '介词', articles: '冠词', conjunctions: '连词' };
  return names[key] || key;
}

function renderGrammarCategories() {
  const container = qs('#grammar-categories');
  const cats = Object.keys(grammarData);
  container.innerHTML = cats.map(c =>
    '<button class="cat-tab' + (c === state.grammarCategory ? ' active' : '') +
    '" data-cat="' + c + '">' + formatGrammarCat(c) + '</button>'
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
    feedback.textContent = '正确！' + q.explanation;
    feedback.className = 'quiz-feedback correct show';
  } else {
    buttons[idx].classList.add('wrong');
    feedback.textContent = '错误。' + q.explanation;
    feedback.className = 'quiz-feedback wrong show';
  }

  qs('#grammar-progress-fill').style.width = ((state.grammarIndex + 1) / list.length * 100) + '%';
  const nextBtn = qs('#grammar-next');
  nextBtn.style.display = 'block';
  nextBtn.textContent = state.grammarIndex < list.length - 1 ? '下一题' : '查看结果';

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

  qs('#grammar-question').textContent = '结果';
  qs('#grammar-options').innerHTML = '';
  qs('#grammar-feedback').textContent = '你的得分：' + state.grammarScore + '/' + list.length + ' (' + pct + '%)';
  qs('#grammar-feedback').className = 'quiz-feedback ' + (pct >= 60 ? 'correct' : 'wrong') + ' show';
  qs('#grammar-counter').textContent = '';
  qs('#grammar-progress-fill').style.width = '100%';
  const nextBtn = qs('#grammar-next');
  nextBtn.style.display = 'block';
  nextBtn.textContent = '再来一次';
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

function formatReadingCat(key) {
  const names = { easy: '简单', medium: '中等', hard: '困难' };
  return names[key] || key;
}

function renderReadingCategories() {
  const container = qs('#reading-categories');
  const cats = Object.keys(readingData);
  container.innerHTML = cats.map(c =>
    '<button class="cat-tab' + (c === state.readingCategory ? ' active' : '') +
    '" data-cat="' + c + '">' + formatReadingCat(c) + '</button>'
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

  qs('#reading-question').textContent = '题目 ' + (state.readingIndex + 1) + ': ' + q.question;
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
    feedback.textContent = '正确！';
    feedback.className = 'quiz-feedback correct show';
  } else {
    buttons[idx].classList.add('wrong');
    feedback.textContent = '错误。正确答案是：' + q.options[q.answer];
    feedback.className = 'quiz-feedback wrong show';
  }

  qs('#reading-progress-fill').style.width = ((state.readingIndex + 1) / passage.questions.length * 100) + '%';
  const nextBtn = qs('#reading-next');
  nextBtn.style.display = 'block';
  nextBtn.textContent = state.readingIndex < passage.questions.length - 1 ? '下一题' : '查看结果';

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

  qs('#reading-question').textContent = '结果';
  qs('#reading-options').innerHTML = '';
  qs('#reading-feedback').textContent = '你的得分：' + state.readingScore + '/' + passage.questions.length + ' (' + pct + '%)';
  qs('#reading-feedback').className = 'quiz-feedback ' + (pct >= 60 ? 'correct' : 'wrong') + ' show';
  qs('#reading-counter').textContent = '';
  qs('#reading-progress-fill').style.width = '100%';
  const nextBtn = qs('#reading-next');
  nextBtn.style.display = 'block';
  nextBtn.textContent = '再来一次';
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
  let grammarPool = [];
  Object.values(grammarData).forEach(arr => {
    arr.forEach(q => grammarPool.push({ ...q, topic: '语法' }));
  });

  let readingPool = [];
  Object.values(readingData).forEach(passage => {
    passage.questions.forEach(q => readingPool.push({ ...q, topic: '阅读' }));
  });

  if (difficulty === 'easy') {
    grammarPool = grammarPool.filter((_, i) => i < 6);
    readingPool = readingPool.filter((_, i) => i < 4);
  } else if (difficulty === 'hard') {
    grammarPool = grammarPool.filter((_, i) => i >= 6);
    readingPool = readingPool.filter((_, i) => i >= 4);
  }

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
    feedback.textContent = '正确！';
    feedback.className = 'quiz-feedback correct show';
  } else {
    buttons[idx].classList.add('wrong');
    const expl = q.explanation || ('正确答案是：' + q.options[q.answer]);
    feedback.textContent = '错误。' + expl;
    feedback.className = 'quiz-feedback wrong show';
  }

  qs('#quiz-progress-fill').style.width = ((state.quizIndex + 1) / state.quizTotal * 100) + '%';
  const nextBtn = qs('#quiz-next-btn');
  nextBtn.style.display = 'block';
  nextBtn.textContent = state.quizIndex < state.quizTotal - 1 ? '下一题' : '查看结果';

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
  if (pct >= 80) message = '太棒了！你的英语水平非常扎实！';
  else if (pct >= 60) message = '不错！继续练习，会越来越好。';
  else message = '继续加油！坚持练习一定会有进步的。';
  qs('#result-message').textContent = message;

  qs('#result-details').innerHTML = state.quizQuestions.map((q, i) =>
    '<div class="result-item">' +
    '<span class="icon">' + '📝' + '</span>' +
    '<span class="text">' + q.question + '<br><small>答案：' + q.options[q.answer] + '</small></span>' +
    '</div>'
  ).join('');
}

qs('#quiz-retry').addEventListener('click', () => {
  qs('#quiz-results').classList.add('hidden');
  qs('#quiz-setup').classList.remove('hidden');
});

// ---------- Auth UI ----------

let isRegisterMode = false;

function updateAuthUI() {
  const loggedIn = Auth.isLoggedIn();
  qs('#btnLogin').style.display = loggedIn ? 'none' : 'inline-block';
  qs('#userInfo').style.display = loggedIn ? 'flex' : 'none';
  if (loggedIn) {
    qs('#userName').textContent = Auth.getUser().username;
    // Sync dashboard from server
    syncDashboardFromServer();
  }
}

async function syncDashboardFromServer() {
  if (!Auth.isLoggedIn()) return;
  try {
    const summary = await ProgressAPI.getSummary();
    state.totalQuizzes = summary.quizCount || 0;
    state.vocabLearned = []; // Will be managed server-side
    qs('#stat-vocab').textContent = summary.learnedWords || 0;
    qs('#stat-streak').textContent = summary.streak || 0;
    qs('#stat-quizzes').textContent = summary.quizCount || 0;
    qs('#stat-accuracy').textContent = (summary.accuracy || 0) + '%';
  } catch (e) {
    // Server unavailable, use local data
  }
}

function showAuthModal() { qs('#authModal').classList.remove('hidden'); resetAuthForm(); }
function hideAuthModal() { qs('#authModal').classList.add('hidden'); }
function resetAuthForm() {
  qs('#authError').style.display = 'none';
  qs('#authError').textContent = '';
  qs('#authUsername').value = '';
  qs('#authPassword').value = '';
  qs('#authEmail').value = '';
}

function toggleAuthMode() {
  isRegisterMode = !isRegisterMode;
  qs('#authModalTitle').textContent = isRegisterMode ? '注册' : '登录';
  qs('#authSubmitBtn').textContent = isRegisterMode ? '注册' : '登录';
  qs('#authToggleText').textContent = isRegisterMode ? '已有账号？' : '没有账号？';
  qs('#authToggleLink').textContent = isRegisterMode ? '去登录' : '去注册';
  qs('#authEmailGroup').classList.toggle('hidden', !isRegisterMode);
  resetAuthForm();
}

async function handleAuth() {
  const username = qs('#authUsername').value.trim();
  const password = qs('#authPassword').value.trim();
  const email = qs('#authEmail').value.trim();
  const errorEl = qs('#authError');

  if (!username || !password || (isRegisterMode && !email)) {
    errorEl.textContent = '请填写所有必填字段';
    errorEl.style.display = 'block';
    return;
  }

  try {
    if (isRegisterMode) {
      await Auth.register(username, email, password);
    } else {
      await Auth.login(username, password);
    }
    hideAuthModal();
    updateAuthUI();
    updateDashboard();
  } catch (e) {
    errorEl.textContent = e.message;
    errorEl.style.display = 'block';
  }
}

function handleLogout() {
  Auth.logout();
  updateAuthUI();
  updateDashboard();
}

// Auth event listeners
qs('#btnLogin').addEventListener('click', showAuthModal);
qs('#btnLogout').addEventListener('click', handleLogout);
qs('#authSubmitBtn').addEventListener('click', handleAuth);
qs('#authToggleLink').addEventListener('click', toggleAuthMode);
qs('#authModal').addEventListener('click', function(e) { if (e.target === this) hideAuthModal(); });

// Override saveStats to also sync to server
const _origSaveStats = saveStats;
saveStats = function() {
  _origSaveStats();
  // Also save quiz results to server
};

// Override quiz/show result functions to save to server
const _origShowGrammarResults = showGrammarResults;
showGrammarResults = function() {
  _origShowGrammarResults();
  if (Auth.isLoggedIn()) {
    const list = getCurrentGrammarList();
    ProgressAPI.saveQuizResult(state.grammarScore, list.length, 'grammar').catch(() => {});
    syncDashboardFromServer();
  }
};

const _origShowReadingResults = showReadingResults;
showReadingResults = function() {
  _origShowReadingResults();
  if (Auth.isLoggedIn()) {
    const passage = readingData[state.readingCategory];
    ProgressAPI.saveQuizResult(state.readingScore, passage.questions.length, 'reading').catch(() => {});
    syncDashboardFromServer();
  }
};

const _origShowQuizResults = showQuizResults;
showQuizResults = function() {
  _origShowQuizResults();
  if (Auth.isLoggedIn()) {
    ProgressAPI.saveQuizResult(state.quizScore, state.quizTotal, 'mixed').catch(() => {});
    syncDashboardFromServer();
  }
};

// Override mark-learned to sync to server
const _origBtnLearnedHandler = qs('#btn-learned').onclick;
qs('#btn-learned').addEventListener('click', async function(e) {
  // If logged in, sync to server
  if (Auth.isLoggedIn()) {
    const word = getCurrentVocabList()[state.vocabIndex];
    const allWords = [];
    Object.values(vocabularyData).forEach(g => allWords.push(...g));
    const serverWord = allWords.find(w => w.word === word.word);
    if (serverWord) {
      try {
        // We need the word ID from the server - find it in the local data
        await VocabAPI.markLearned(state.vocabIndex + 1); // approximate, using local index
        await ProgressAPI.recordSession(1, 1);
        syncDashboardFromServer();
      } catch (e) { /* ignore */ }
    }
  }
}, true);

// ---------- Init ----------

function init() {
  applyTheme();
  updateAuthUI();
  updateStreak();
  updateDashboard();
  setWordOfDay();
  navigateTo('dashboard');
}

init();
