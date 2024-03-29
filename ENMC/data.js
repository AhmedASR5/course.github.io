
const title = 'Birzeit University Computer Engineering Advisory Plan';
// const note = 'ملاحظة: التدريب العملي في صيف السنة الرابعة حسب الخطة بعد إتمام 90 ساعة'; 
// حطها في الجدول
const link_title = ' ';
const url = ' ';
const link_more_info = ' ';
const courses = [
    //['NAME', 'CODE', ['requirement']s, 'notes']
    //'year 1 semester 1',
    ['التفاضل والتكامل 1', 'MATH1411', []],
    ['الفيزياء العامة 1', 'PHYS141',[]],
    ['مختبر الفيزياء العامة 1', 'PHYS111', ['PHYS141']],
    ['مشغل', 'ENME120', []],
    ['مهارات اللغة العربية 1', 'ARAB135', []],
    ['لغة إنجليزية مستوى متوسط 1', 'ENGC1201', []],

    'year 1 semester2',
    ['التفاضل والتكامل 2', 'MATH1321', ['MATH1411']],
    ['الفيزياء العامة 2', 'PHYS132', ['PHYS141', 'MATH1411']],
    ['مختبر الفيزياء العامة 2', 'PHYS112', ['PHYS132', 'PHYS111']],
    ['الرسم الهندسي', 'ENME121', []],
    ['الكيمياء لطلبة كلية الهندسه', 'CHEM143', []],
    ['مهارات اللغة العربية 2', 'ARAB136', ['ARAB135']],
    ['لغة إنجليزية مستوى متوسط 2', 'ENGC1202', ['ENGC1201']],

    'year 2 semester 1',
    ['الدوائر الكهربائية', 'ENEE2311', ['PHYS132']],
    ['التفاضل والتكامل 3', 'MATH2311', ['MATH1321']],
    ['الحاسوب والبرمجة', 'COMP230', []],
    ['الرسم الميكانيكي', 'ENME2111', ['ENME121']],
    ['الاستاتيكا', 'ENCE232', ['PHYS141']],
    ['لغة إنجليزية مستوى متوسط 3', 'ENGC2201', ['ENGC1202']],

    'year 2 semester 2',
    ['الإلكترونيات التمثيلية', 'ENEE236', ['ENEE2311']],
    ['الجبر الخطي', 'MATH234', ['MATH1321']],
    ['مختبر دوائر كهربائية', 'ENEE2101', ['ENEE2311','PHYS112']],
    ['أنظمة رقمية', 'ENCS2340', ['COMP230']],
    ['الديناميكا', 'ENME232', ['ENCE232']],
    ['المعادلات التفاضلية العادية', 'MATH331', ['MATH1321']],
    ['لغة إنجليزية مستوى متوسط 4', 'ENGC2202', ['ENGC2201']],

    'year 3 semester 1',
    ['مختبر الإلكترونيات التمثيلية (لطلبة هندسة الميكاترونكس)', 'ENEE3103', ['ENEE236']],
    ['أساسيات الآلات الكهربائية', 'ENEE4303', ['ENEE2311']],
    ['اجهزة القياس وتحويل الاشارة', 'ENMC3361', ['ENCS2340','ENEE236']],
    ['الانظمة المدمجة', 'ENCS3341', ['ENCS2340']],
    ['ديناميكا الآلات', 'ENME332', ['ENME232']],
    ['مختبر المحاكاة الهندسية باستخدام الحاسوب', 'ENMC3111', ['ENME2111']],
    ['علم المواد', 'ENME331', ['CHEM143']],

    'year 3 semester 2',
    ['الديناميكا الحرارية', 'ENME333', ['PHYS141']],
    ['الكترونيات القوى و ادارة الآلات', 'ENEE4401', ['ENEE4303', 'ENEE236']],
    ['مختبر أساسيات الآلات الكهربائية', 'ENEE4102', ['ENEE4303']],
    ['القياسات الهندسية والتحليل الاحصائي', 'ENMC3351', ['PHYS112','ENMC3361']],
    ['مختبر الإلكترونيات الرقمية وتنظيم الحاسوب', 'ENCS2110', ['ENCS3341']],
    ['الاهتزازات والتمثيل الديناميكي', 'ENMC431', ['ENME332','MATH331']],

    'year 4 semester 1',
    ['أنظمة التحكم', 'ENME438', ['MATH331','MATH234','ENMC431']],
    ['هندسة موائع وحراريات', 'ENMC4411', ['ENME333', 'ENME232']],
    ['الحضارة الأوروبية المعاصرة', 'CULS331',[],'يجب اجتياز 30 ساعة'],
    ['مختبرالانظمة المدمجة', 'ENCS4101', ['ENCS3341']],
    ['تصميم اجزاء الماكنات', 'ENMC4421', ['ENME2111', 'ENCE232']],
    ['الكتف حر', ' ', []],
    ['مختبر الأنظمة المدمجة', 'ENCS4101', [], '*مستوى سنة 4'],

    'year 4 semester 2',
    ['التحكم في طاقة الموائع', 'ENME537', ['ENME438']],
    ['أنظمة التحكم المتقدمة ', 'ENMC531', ['ENME438']],
    ['مختبر الموائع والحراريات', 'ENMC411', ['ENMC4411']],
    ['الفكر العربي المعاصر', 'CULS332', [],'يجب اجتياز 30 ساعة'],
    ['طرق التحليل العددي', 'MATH330', ['MATH234']],
    ['تصميم الآلات 2', 'ENME436', ['ENMC4421','ENME332']],


    'year 5 semester 1',
    ['الكتف تخصص', ' ', []],
    ['أنظمة التحكم الرقمي', 'ENMC5362', ['ENCS3341','ENMC531']],
    ['الأتمتة الصناعية ', 'ENMC5371', ['ENME537','ENEE4401']],
    [' تصميم انظمة الميكاترونكس  ', 'ENMC5331', ['ENME438','ENEE4401']],
    ['مقدمة مشروع التخرج ', 'ENMC5201', ['ENMC401']],


    'year 5 semester 2',
    ['مختبر التحكم  ', 'ENMC512', ['ENMC5362']], // ['ENMC5362'] ??
    [' مختبر ميكاترونيكس', 'ENMC511', ['ENMC5371']],
    [' مشروع التخرج ', 'ENMC5301', ['ENMC5201']],
    ['الكتف حر', ' ', []]
];
