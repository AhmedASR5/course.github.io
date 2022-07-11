const title = 'Birzeit University Doctor of Pharmacy Advisory Plan';
const link_title = ' ';
const url = ' ';
const link_more_info = ' ';
const courses = [
    //['NAME', 'CODE', ['requirement']s, 'notes']
    //'year 1 semester 1',
    ['مختبر الأحياء العامة', 'BIOL111', ['BIOL131']],
    ['الأحياء العامة', 'BIOL131',[]],
    ['مختبر الكيمياء العامة 1', 'CHEM111', ['PHYS141']],
    ['الكيمياء العامة 1', 'CHEM141', []],
    ['التفاضل والتكامل للعلوم الصحية', 'MATH1431', []],
    ['مهارات اللغة العربية 1', 'ARAB135', []],
    ['لغة انجليزية مستوى متوسط / مكثف', 'ENGC2400', []],
    
    'year 1 semester2',
    ['الأحياء العامة 2', 'BIOL132', ['BIOL131']],
    ['مختبر الكيمياء العامة 2', 'CHEM112', ['CHEM141']],
    ['الكيمياء العامة 2', 'CHEM132', ['CHEM141']],
    ['اختياري كلية', ' ', []],
    ['مهارات اللغة العربية 2', 'ARAB136', ['ARAB135']],
    ['لغة انجليزية مستوى متقدم / مكثف', 'ENGC2401', ['ENGC2400']],

    'year 2 semester 1',
    ['علم الأحياء الدقيقة', 'BIOL243', []],
    ['الكيمياء التحليلية 1', 'CHEM234', []],
    ['الكيمياء العضوية 1', 'CHEM241', ['MATH1431']],
    ['مقدمة في علم الصيدلة وحساباتها', 'PHAR231', []],
    ['الفسيولوجيا البشرية وعلم التشريح 1', 'PHAR233', ['BIOL132']],
    
    'year 2 semester 2',
    ['مختبر الكيمياء العضوية', 'CHEM221', ['CHEM241']],
    ['الكيمياء العضوية 2', 'CHEM242', []],
    ['صيدلة فيزيائية', 'PHAR232', ['PHAR231']],
    ['الفسيولوجيا البشرية وعلم التشريح 2', 'PHAR243', ['PHAR233']],
    ['الفيزياء العامة (لطلبة العلوم الصحية والحيوية)', 'PHYS1431', []],
    ['اللغة الانجليزية من خلال محتويات تخصصية', 'ENGC332', [], 'يؤخذ صيفا', 2],
    ['مدخل الى علم النفس', 'PSYC231', [],'يؤخذ صيفا',3 ],

    'year 3 semester 1',
    ['الكيمياء الحيوية 1', 'BIOC331', ['BIOL131','CHEM234','CHEM242'],'أو تزامن'],
    ['قوانين وأخلاقيات الصيدلة', 'PHAR324', ['PHAR231']],
    ['صيدلانيات 1', 'PHAR331', ['PHAR232']],
    ['التغذية الإكلينيكية والعلاج بالحمية', 'PHAR322', ['BIOC331']],
    ['علم الأدوية 1', 'PHAR341', ['PHAR243','BIOC331'],'أو تزامن <br> أوالاكتفاء بمساق PHAR351 أو اخذه بالتزامن'],
    ['فسيولوجيا الأمراض 1', 'PHAR3310', ['PHAR243']],

    'year 3 semester 2',
    ['مختبر مهارات صيدلانية', 'PHAR321', ['PHAR331'],'أو تزامن'],
    ['فسيولوجيا الأمراض 2', 'PHAR331', ['PHAR232']],
    ['صيدلانيات 2', 'PHAR332', ['PHAR331']],
    ['النواتج الطبيعية والتداوي بالأعشاب الطبية', 'PHAR333', ['BIOC331','CHEM242']],
    ['الكيمياء الحيوية الطبية', 'PHAR334', ['BIOC331']],
    ['علم الأدوية 2', 'PHAR342', ['PHAR341']],
    ['فسيولوجيا الأمراض 2', 'PHAR3211', ['PHAR3310']],
    ['التدريب العملي في صيدليات المجتمع', 'PHAR3201', ['PHAR332','PHAR342','PHAR324','PHAR321',], 'يؤخذ صيفا', 5],

    'year 4 semester 1',
    ['الإحصاء الحيوي وعلم الأوبئة', 'PHAR222', []],
    ['ممارسة الرعاية الصيدلانية', 'PHAR422', ['PHAR231', 'PHAR342']],
    ['الكيمياء السريرية', 'PHAR431', ['PHAR334']],
    ['كيمياء الدواء 1', 'PHAR432', ['CHEM242', 'PHAR342']],
    ['صيدلة صناعية', 'PHAR441', ['PHAR332']],
    ['موضوع خاص : علم الأدوية', 'PHAR538', ['PHAR342']],
    ['التدريب العملي في صيدليات المستشفى', 'PHAR4101', ['PHAR3201'], 'يؤخذ صيفا', 7],
    
    'year 4 semester 2',
    ['تقييم المعلومات والمراجع الدوائية', 'PHAR421', ['PHAR222','PHAR342']],
    ['كيمياء الدواء 2', 'PHAR433', ['PHAR432']],
    ['صيدلة حيوية والحركة الدوائية', 'PHAR434', ['PHAR332']],
    ['أدوية دون وصفة طبية', 'PHAR437', ['PHAR422','PHAR3201']],
    ['العلاج الدوائي 1', 'PHAR452', ['PHAR342','PHAR3211','PHAR431','PHAR421','PHAR437']],

    'year 5 semester 1',
    ['مضادات حيوية ومناعة', 'PHAR532', ['PHAR342','BIOL243','PHAR538']],
    ['حركية الدواء السريرية', 'PHAR535', ['PHAR434']],
    ['العلاج الدوائي 2', 'PHAR554', ['PHAR452']],
    ['اختياري جامعة 1', ' ', []],

    'year 5 semester 2',
    ['إدارة الصيدليات', 'PHAR522', ['PHAR3201']],
    ['مشروع بحثي في الصيدلة', 'PHAR523', ['PHAR452']],
    ['العلاج الدوائي 3', 'PHAR555', ['PHAR554']],
    ['العلاج الدوائي 1', 'PHAR452', []],
    ['اختياري جامعة 1', ' ', []],
    ['تدريب سريري 1', 'PHAR641', [], 'مستوى سنة سادسة<br> يؤخذ صيفا', 9],


    'year 6 semester 1',
    ['تدريب سريري 2', 'PHAR642', [], 'مستوى سنة سادسة'],
    ['تدريب سريري 3', 'PHAR643', [], 'مستوى سنة سادسة'],
    ['تدريب سريري 4', 'PHAR644', [], 'مستوى سنة سادسة'],
    ['تدريب سريري 5', 'PHAR645', [], 'مستوى سنة سادسة'],

    'year 6 semester 2',
    ['تدريب سريري 6', 'PHAR646', [], 'مستوى سنة سادسة'],
    ['تدريب سريري 7', 'PHAR647', [], 'مستوى سنة سادسة'],
    ['تدريب سريري 8', 'PHAR648', [], 'مستوى سنة سادسة'],
    ['تدريب سريري 9', 'PHAR649', [], 'مستوى سنة سادسة']
];
