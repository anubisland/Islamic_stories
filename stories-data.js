const STORIES = [
  // ============================================================
  // قصة 1: معاذ بن عمرو ومعوذ بن عفراء
  // ============================================================
  {
    id: 'muadh-muawwidh',
    title: 'مُعاذ بن عمرو ومُعوّذ بن عفراء',
    titleEn: 'Muadh & Muawwidh',
    subtitle: 'الأخوان اللذان قتلا أبا جهل',
    subtitleEn: 'The brothers who defeated Abu Jahl',
    icon: '⚔',
    color: '#C0392B',
    bgGrad: 'linear-gradient(135deg, #2C1810, #4A1C14)',
    cardBg: 'linear-gradient(135deg, #3D1E14, #5C2A1A)',
    age: '13-15 سنة',
    ageEn: '13-15 years old',
    theme: 'الشجاعة وحب النبي',
    themeEn: 'Courage & Love for the Prophet',
    summary: 'غلامان في سن المراهقة وقفا مع الجيش في غزوة بدر، وهمسا للصحابي عبد الرحمن بن عوف قائلين: دلنا على أبي جهل! فانقضا عليه كالصقرين.',
    summaryEn: 'Two teenage boys stood in the army at Badr, whispering: Show us Abu Jahl! They swooped down like falcons.',
    intro: {
      title: 'مُعاذ بن عمرو ومُعوّذ بن عفراء',
      titleEn: 'Muadh ibn Amr & Muawwidh ibn Afra',
      subtitle: 'بطلا معركة بدر من صغار الصحابة',
      subtitleEn: 'Young heroes of the Battle of Badr',
      badge: 'صغار الصحابة | Little Companions',
      lines: [
        { ar: 'هما غلامان من الأنصار، من أهل المدينة المنورة', en: 'Two young boys from the Ansar of Madinah' },
        { ar: 'كانا في سن المراهقة، يملؤهما الإيمان والشجاعة', en: 'Teenagers filled with faith and courage' },
        { ar: 'خرجا مع الجيش الإسلامي في غزوة بدر الكبرى', en: 'They joined the Islamic army in the great Battle of Badr' },
        { ar: 'لم يكتفيا بالوقوف في الصفوف، بل طلبا أعظم هدف', en: 'They did not just stand in ranks but sought the greatest prize' }
      ],
      icon: '⚔',
      source: 'صحيح البخاري، صحيح مسلم'
    },
    scenes: [
      { img: '🏜', ar: 'في صحراء بدر الواسعة تحت أشعة الشمس الذهبية، وقف جيش المسلمين صفاً واحداً ليدافعوا عن دينهم.', en: 'In the vast Badr desert under golden sun, the Muslim army stood united to defend their faith.' },
      { img: '👦', ar: 'نظر الصحابي الجليل عبد الرحمن بن عوف حوله فإذا هو بغلامين صغيرين حديثي السن عن يمينه وشماله.', en: 'The noble Companion Abdurrahman ibn Auf looked around and found two young boys beside him.' },
      { img: '🤫', ar: 'اقترب أحد الغلامين وهمس في أذن عبد الرحمن سراً: يا عم! هل تعرف أبا جهل؟ لقد سمعت أنه يسب رسول الله!', en: 'One boy whispered secretly: O uncle! Do you know Abu Jahl? I heard he insults the Prophet!' },
      { img: '💪', ar: 'قال الغلام بكل عزم: والذي نفسي بيده، لئن رأيته لأقاتلنه حتى يموت الأعجل منا.', en: 'The boy said firmly: By Allah, if I see him I will fight him until one of us dies!' },
      { img: '🤝', ar: 'ثم غمزه الغلام الآخر من الجهة الثانية، وقال نفس الكلام تماماً بنفس الحماس والقوة.', en: 'Then the other boy from the other side said the exact same words with equal zeal.' },
      { img: '👉', ar: 'عندما بدأت المعركة، أشار لهما عبد الرحمن بن عوف إلى أبي جهل وسط جيش المشركين.', en: 'When the battle began, Abdurrahman pointed Abu Jahl out to them amidst the enemy army.' },
      { img: '⚔', ar: 'انطلق الشقيقان الشجاعان كالصقرين الجارحين وسط الغبار والسيوف، لم يخفا الأبطال ولا الموت.', en: 'The two brave brothers launched like fierce falcons through dust and swords, fearing neither warriors nor death.' },
      { img: '🏆', ar: 'ضرباه بسيفيهما ضربة واحدة قوية حتى أسقطاه، وأراحا المسلمين من شره. كانا سبباً في نصر عظيم في الإسلام.', en: 'They struck him together and felled him, ridding the Muslims of his evil. They were key to a great victory.' }
    ],
    morals: [
      { ar: 'أنا أحب النبي وأدافع عنه بأخلاقي وسلوكي', en: 'I love the Prophet and defend him through my manners and actions' },
      { ar: 'العمر الصغير لا يمنعني من العمل العظيم والنجاح', en: 'Young age does not prevent me from great achievements and success' },
      { ar: 'الشجاعة هي أن أقول الحق ولا أخاف', en: 'Courage is speaking the truth without fear' }
    ],
    source: 'صحيح البخاري، صحيح مسلم'
  },
  // ============================================================
  // قصة 2: أسامة بن زيد
  // ============================================================
  {
    id: 'usama',
    title: 'أُسامة بن زيد',
    titleEn: 'Usama ibn Zayd',
    subtitle: 'القائد الصغير ذو الثمانية عشر عاماً',
    subtitleEn: 'The young commander at 18',
    icon: '🐪',
    color: '#2980B9',
    bgGrad: 'linear-gradient(135deg, #0C1828, #1A3A5C)',
    cardBg: 'linear-gradient(135deg, #122A45, #1A3F66)',
    age: '18 سنة',
    ageEn: '18 years old',
    theme: 'القيادة وتحمل المسؤولية',
    themeEn: 'Leadership & Responsibility',
    summary: 'اختاره النبي قائداً لجيش فيه كبار الصحابة. طعن البعض في إمارته لصغر سنه، فخطب النبي مغضباً: إنه لخليق للإمارة.',
    summaryEn: 'The Prophet chose him to lead an army of senior Companions. When questioned, the Prophet declared him worthy.',
    intro: {
      title: 'أُسامة بن زيد بن حارثة',
      titleEn: 'Usama ibn Zayd ibn Haritha',
      subtitle: 'حِب رسول الله وابن حِبّه',
      subtitleEn: 'The beloved of the Messenger of Allah',
      badge: 'صغار الصحابة | Little Companions',
      lines: [
        { ar: 'كان النبي يحبه حباً شديداً ويسميه حِب رسول الله', en: 'The Prophet loved him dearly and called him the beloved of Allah Messenger' },
        { ar: 'هو ابن زيد بن حارثة مولى النبي وأحد قادة الإسلام', en: 'He was the son of Zayd ibn Haritha, the Prophet freed companion' },
        { ar: 'في سن 18 عاماً فقط، اختاره النبي لقيادة أقوى جيش', en: 'At only 18, the Prophet chose him to lead the strongest army' },
        { ar: 'كان في جيشه كبار الصحابة كأبي بكر وعمر بن الخطاب', en: 'His army included senior Companions like Abu Bakr and Umar' }
      ],
      icon: '👑',
      source: 'صحيح البخاري، صحيح مسلم'
    },
    scenes: [
      { img: '🏜', ar: 'قبل وفاة النبي بأيام، جهّز جيشاً عظيماً لقتال الروم أقوى دولة في العالم وقتها، واختار أسامة بن زيد قائداً عاماً.', en: 'Days before his passing, the Prophet prepared a mighty army against the Romans, choosing Usama as commander.' },
      { img: '👥', ar: 'كان في الجيش كبار الصحابة كأبي بكر وعمر، وكان أسامة في الثامنة عشرة من عمره فقط.', en: 'The army included great Companions like Abu Bakr and Umar, while Usama was only 18.' },
      { img: '🗣', ar: 'تعجب بعض الناس وقالوا: أَمَّر على المهاجرين الأولين غلاماً؟ فسمع النبي ذلك.', en: 'Some people wondered: He appointed a youth over the early emigrants? The Prophet heard this.' },
      { img: '⭐', ar: 'فخطب النبي في الناس مغضباً: إن تطعنوا في إمارته فقد كنتم تطعنون في إمارة أبيه من قبل، وإنه لخليق للإمارة.', en: 'The Prophet addressed the people: If you question his command, you questioned his father before. He is worthy.' },
      { img: '🤲', ar: 'وقال النبي عن أسامة وأبيه زيد: اللهم إني أحبهما فأحبهما. كان يدعو لهما.', en: 'The Prophet said about Usama and his father: O Allah, I love them both, so love them.' },
      { img: '🐪', ar: 'بعد وفاة النبي، أصر أبو بكر الصديق على إنفاذ جيش أسامة: والله لا أحل عقدة عقدها رسول الله.', en: 'After the Prophet death, Abu Bakr insisted on sending Usama army: I will not undo what the Prophet tied.' },
      { img: '🌅', ar: 'خرج أبو بكر يودع الجيش ماشياً وأسامة راكباً تواضعاً. وحقق الجيش نصراً باهراً وعاد سالماً.', en: 'Abu Bakr walked while Usama rode out of humility. The army achieved a brilliant victory.' }
    ],
    morals: [
      { ar: 'أنا شاب مسلم أستطيع تحمل المسؤولية مهما كان عمري', en: 'I am a young Muslim who can bear responsibility at any age' },
      { ar: 'النجاح والقيادة يحتاجان إلى الذكاء والأمانة لا العمر فقط', en: 'Success and leadership require intelligence and honesty, not just age' },
      { ar: 'ثقة الكبار في تدفعني لبذل أقصى جهدي', en: 'The trust of elders pushes me to give my best effort' }
    ],
    source: 'صحيح البخاري، صحيح مسلم'
  },
  // ============================================================
  // قصة 3: عمير بن أبي وقاص
  // ============================================================
  {
    id: 'umayr',
    title: 'عُمير بن أبي وقاص',
    titleEn: 'Umayr ibn Abi Waqqas',
    subtitle: 'البكاء من أجل الجهاد',
    subtitleEn: 'Tears for the sake of Jihad',
    icon: '🤲',
    color: '#27AE60',
    bgGrad: 'linear-gradient(135deg, #0D2818, #1A4A2E)',
    cardBg: 'linear-gradient(135deg, #143A22, #1C5230)',
    age: '16 سنة',
    ageEn: '16 years old',
    theme: 'صدق الرغبة ونصرة الحق',
    themeEn: 'Sincere Desire for Truth',
    summary: 'توارى خلف الرجال يوم بدر كي لا يراه النبي فيستصغره. ولما رده بكى بكاء حاراً، فرق له النبي وأجازه فاستشهد.',
    summaryEn: 'He hid behind the men at Badr. When rejected he wept bitterly, so the Prophet allowed him. He was martyred.',
    intro: {
      title: 'عُمير بن أبي وقاص الزهري',
      titleEn: 'Umayr ibn Abi Waqqas al-Zuhri',
      subtitle: 'البطل الذي بكى شوقاً للشهادة',
      subtitleEn: 'The hero who wept longing for martyrdom',
      badge: 'صغار الصحابة | Little Companions',
      lines: [
        { ar: 'هو الشقيق الأصغر للبطل العظيم سعد بن أبي وقاص خال النبي', en: 'He is the younger brother of Saad ibn Abi Waqqas, the Prophet uncle' },
        { ar: 'ينتمي لعائلة عريقة؛ أخوه من العشرة المبشرين بالجنة', en: 'His brother was among the ten promised Paradise' },
        { ar: 'كان عمره حوالي 16 سنة، قصير القامة نحيف الجسم', en: 'He was about 16, short and slender in build' },
        { ar: 'قلبه كان كبيراً مملوءاً بحب الله ورسوله وشوقاً للجهاد', en: 'But his heart was huge with love for Allah and longing for jihad' }
      ],
      icon: '💧',
      source: 'الطبقات الكبرى لابن سعد'
    },
    scenes: [
      { img: '⭐', ar: 'عُمير هو شقيق البطل الكبير سعد بن أبي وقاص، خال النبي وأحد العشرة المبشرين بالجنة.', en: 'Umayr was the brother of the great hero Saad ibn Abi Waqqas, the Prophet uncle and a man of Paradise.' },
      { img: '🙈', ar: 'في غزوة بدر، كان عمير يختبئ خلف ظهور الرجال كي لا يراه النبي فيمنعه لصغر سنه.', en: 'At the Battle of Badr, Umayr hid behind the men so the Prophet would not reject him for his age.' },
      { img: '😢', ar: 'رآه أخوه سعد يتخفى فقال: ما لك يا أخي؟ قال: إني أخاف أن يراني رسول الله فيستصغرني.', en: 'His brother Saad saw him: What is wrong? Umayr said: I fear the Prophet will reject me for being too young!' },
      { img: '💧', ar: 'ولكن النبي رآه ورده لصغر سنه، فلم يتمالك الغلام نفسه وبكى بكاء حاراً شوقاً للجهاد.', en: 'But the Prophet saw him and rejected him. The boy wept bitterly, yearning for jihad.' },
      { img: '🤲', ar: 'لما رأى النبي دموعه الصادقة ورغبته الشديدة، رق قلبه الشريف له وأجازه بالمشاركة.', en: 'When the Prophet saw his sincere tears, his noble heart softened and he allowed him to join.' },
      { img: '⚔', ar: 'جاء أخوه سعد يربط له حزام السيف حول وسطه الصغير، لأن السيف كان طويلاً وعمير قصير.', en: 'His brother Saad tied the sword belt around his small waist, as the sword was long and Umayr was short.' },
      { img: '🌙', ar: 'انطلق عمير مع الجيش وعيناه تلمعان فخراً، واستشهد في سبيل الله نائلاً ما تمنى.', en: 'Umayr marched with pride shining in his eyes and was martyred in battle, attaining his wish.' }
    ],
    morals: [
      { ar: 'صدقي في طلب الخير يجعل الله يوفقني ويحقق أمنياتي', en: 'My sincerity in seeking good makes Allah grant me success' },
      { ar: 'لا أستصغر نفسي، بل أحاول دائماً أن أكون مفيداً', en: 'I do not belittle myself; I always try to be useful' },
      { ar: 'الدموع الصادقة قد تفتح أبواباً لا تفتحها القوة', en: 'Sincere tears can open doors that strength cannot' }
    ],
    source: 'الطبقات الكبرى لابن سعد، الإصابة لابن حجر'
  },
  // ============================================================
  // قصة 4: رافع بن خديج وسمرة بن جندب
  // ============================================================
  {
    id: 'rafi-samura',
    title: 'رافع بن خديج وسَمُرة بن جُندب',
    titleEn: 'Rafi & Samura',
    subtitle: 'مسابقة المصارعة لدخول الجيش',
    subtitleEn: 'The wrestling match to join the army',
    icon: '🏹',
    color: '#8E44AD',
    bgGrad: 'linear-gradient(135deg, #1C0D2E, #3A1A5C)',
    cardBg: 'linear-gradient(135deg, #2A1840, #3D2260)',
    age: '14-15 سنة',
    ageEn: '14-15 years old',
    theme: 'القوة البدنية والتنافس الشريف',
    themeEn: 'Strength & Noble Competition',
    summary: 'أجاز النبي رافعاً للجيش لمهارته في الرماية، ورد سمرة. فطلب سمرة المصارعة وغلب رافعاً، فأجازهما النبي معاً.',
    summaryEn: 'The Prophet accepted Rafi for archery but rejected Samura. Samura challenged Rafi to wrestling, won, and both were accepted.',
    intro: {
      title: 'رافع بن خديج وسَمُرة بن جندب',
      titleEn: 'Rafi ibn Khadij & Samura ibn Jundab',
      subtitle: 'بطلا الرياضة والتنافس الشريف',
      subtitleEn: 'Heroes of sports and noble competition',
      badge: 'صغار الصحابة | Little Companions',
      lines: [
        { ar: 'غلامان من الأنصار، في الرابعة عشرة من عمرهما', en: 'Two boys from the Ansar, around 14 years old' },
        { ar: 'تميز رافع بمهارة الرماية الفائقة', en: 'Rafi excelled in archery skills' },
        { ar: 'وكان سمرة قوياً في المصارعة', en: 'Samura was strong in wrestling' },
        { ar: 'تنافسا تنافساً شريفاً أمام النبي لإثبات جدارتهما', en: 'They competed honorably before the Prophet to prove their worth' }
      ],
      icon: '💪',
      source: 'تاريخ الطبري، الاستيعاب لابن عبد البر'
    },
    scenes: [
      { img: '🏹', ar: 'في غزوة أحد، وقف النبي يتفقد الجيش ويختار الرجال. وعرض الغلمان مهاراتهم.', en: 'At Uhud, the Prophet inspected the army. The young boys presented their skills.' },
      { img: '🎯', ar: 'كان رافع بن خديج ماهراً جداً في تصويب السهام ورمي النبال بدقة عالية، فأجازه النبي.', en: 'Rafi was very skilled at archery, so the Prophet allowed him into the army.' },
      { img: '😢', ar: 'أما سمرة بن جندب فلم يجزه النبي لأنه كان أصغر جسماً، فحزن سمرة حزناً شديداً.', en: 'But Samura was rejected for being smaller in build. He was deeply saddened.' },
      { img: '💪', ar: 'ذهب سمرة إلى زوج أمه باكياً وقال: أجاز رسول الله رافعاً وردني، وأنا أصرع رافعاً.', en: 'Samura went to his stepfather crying: The Prophet accepted Rafi but rejected me, and I can beat him.' },
      { img: '🤼', ar: 'بلغت كلماته النبي، فقال لهما: تصارعا! فتصارعا تنافساً شريفاً والنبي ينظر.', en: 'The Prophet heard and said: Wrestle! So they wrestled honorably before him.' },
      { img: '🏆', ar: 'صرع سمرة رافعاً وغلبَه بقوته، فضحك النبي وأجازهما معاً في الجيش.', en: 'Samura defeated Rafi. The Prophet smiled and accepted both into the army.' }
    ],
    morals: [
      { ar: 'أهتم برياضتي وقوتي البدنية لأكون مفيداً لديني', en: 'I care about my fitness to serve my faith' },
      { ar: 'التنافس في الخير يجعلني أتطور وأنجح مع أصدقائي', en: 'Competing in goodness helps me grow with my friends' },
      { ar: 'إذا أغلقت أمامي الأبواب، أبحث عن طرق ذكية لأهدافي', en: 'If doors close, I find smart ways to achieve my goals' }
    ],
    source: 'تاريخ الطبري، الاستيعاب لابن عبد البر'
  },
  // ============================================================
  // قصة 5: زيد بن ثابت
  // ============================================================
  {
    id: 'zayd',
    title: 'زيد بن ثابت',
    titleEn: 'Zayd ibn Thabit',
    subtitle: 'طفل الترجمة وجامع القرآن',
    subtitleEn: 'The child translator & Quran compiler',
    icon: '📜',
    color: '#F39C12',
    bgGrad: 'linear-gradient(135deg, #2D1F0E, #4A3514)',
    cardBg: 'linear-gradient(135deg, #3D2A12, #5A3D1A)',
    age: '11-13 سنة',
    ageEn: '11-13 years old',
    theme: 'العلم والذكاء وخدمة الدين',
    themeEn: 'Knowledge & Serving the Deen',
    summary: 'أمره النبي بتعلم لغة اليهود فأتقنها في 15 ليلة. أصبح كاتب الوحي وقاد جمع القرآن الكريم.',
    summaryEn: 'The Prophet told him to learn Hebrew; he mastered it in 15 nights. He became scribe of revelation.',
    intro: {
      title: 'زيد بن ثابت بن الضحاك الأنصاري',
      titleEn: 'Zayd ibn Thabit al-Ansari',
      subtitle: 'عالم المدينة وكاتب الوحي',
      subtitleEn: 'The scholar of Madinah & scribe of revelation',
      badge: 'صغار الصحابة | Little Companions',
      lines: [
        { ar: 'غلام عبقري من بني النجار في المدينة المنورة', en: 'A brilliant boy from Banu al-Najjar in Madinah' },
        { ar: 'حفظ سبع عشرة سورة من القرآن في سن صغيرة جداً', en: 'He memorized 17 Quran chapters at a very young age' },
        { ar: 'اختاره النبي لتعلم اللغات فتفوق في أيام قلائل', en: 'The Prophet chose him to learn languages, excelling in days' },
        { ar: 'أصبح كاتب الوحي ثم قاد مشروع جمع القرآن الكريم', en: 'He became scribe of revelation and led the Quran compilation' }
      ],
      icon: '✍',
      source: 'صحيح البخاري، سنن الترمذي'
    },
    scenes: [
      { img: '📖', ar: 'جاءت عائلة زيد إلى النبي وقالوا بفخر: هذا غلام يحفظ سبع عشرة سورة من القرآن.', en: 'Zayd family brought him: This boy memorizes 17 chapters of the Quran.' },
      { img: '⭐', ar: 'استمع النبي لزيد وهو يقرأ القرآن بقراءة عذبة صحيحة، فأعجب بحفظه وذكائه.', en: 'The Prophet listened to Zayd recite beautifully and was impressed by his memory.' },
      { img: '✍', ar: 'قال النبي لزيد: يا زيد، تعلم لي كتابة يهود، فإني والله ما آمن يهود على كتابي.', en: 'The Prophet said: O Zayd, learn the writing of the Jews, for I do not trust them.' },
      { img: '📜', ar: 'انكب زيد على الدراسة بجد، فتعلم العبرية قراءة وكتابة في خمس عشرة ليلة فقط.', en: 'Zayd studied diligently and mastered Hebrew in just fifteen nights.' },
      { img: '🌐', ar: 'ثم أمره النبي بتعلم السريانية فتعلمها في أيام قلائل، وأصبح المترجم الرسمي.', en: 'Then the Prophet told him to learn Syriac, becoming the official translator.' },
      { img: '🖊', ar: 'أصبح زيد كاتب الوحي الأمين، يكتب القرآن بين يدي النبي كلما نزل الوحي.', en: 'Zayd became the trusted scribe, writing the Quran as revelation descended.' },
      { img: '🏛', ar: 'بعد وفاة النبي، اختاره أبو بكر وعمر لجمع القرآن في مصحف واحد. قال عمر: زيد شاب عاقل.', en: 'After the Prophet, Abu Bakr and Umar chose Zayd to compile the Quran. Umar said: Zayd is a wise youth.' }
    ],
    morals: [
      { ar: 'أهتم بدراستي وأجتهد لأكون متفوقاً مثل زيد', en: 'I care about my studies and strive to be excellent like Zayd' },
      { ar: 'حفظي للقرآن ينير عقلي ويرفع مكانتي', en: 'Memorizing the Quran illuminates my mind' },
      { ar: 'تعلم اللغات والعلوم من أعظم وسائل خدمة الدين', en: 'Learning languages and sciences serves faith and society' }
    ],
    source: 'صحيح البخاري، سنن الترمذي، سير أعلام النبلاء'
  }
];
