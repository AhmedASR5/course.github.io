const title = 'Birzeit University Nutrition and Dietetics Advisory Plan';
const note = ' ';
const link_title = ' ';
const url = ' ';
const link_more_info = ' ';
/*
    notes:-
        1) course format is //['NAME', 'CODE', ['requirement']s, 'notes']
        2) 'notes' is not required
        3) you have to separate between the semesters by a string like: '', 'year 1 semester2'
        4) when there no requirements leave the array empty [] not ['']
        5) when there no 'CODE' (course code) write ' ' not ''
        6) you can use html tags like table, like: `<table><tr><th>المتطلبات</th><th>المادة</th></tr>
                                                    <tr><td>ENCS3320</td><td>*(2)شبكات الحاسوب المتقدمة</td></tr>
                                                    <tr><td>ENCS4370, ENCS3390</td><td>*(3)عمارة الحاسبات المتقدمة</td></tr>
                                                    <tr><td>ENCS3340</td><td>*(4)تعلم الآلة وعلم البيانات</td></tr>
                                                    </table>`
                                                    or
                                                    '<table><tr><th>المتطلبات</th><th>المادة</th></tr>'
                                                    + '<tr><td>ENCS3320</td><td>*(2)شبكات الحاسوب المتقدمة</td></tr>'
                                                    + '<tr><td>ENCS4370, ENCS3390</td><td>*(3)عمارة الحاسبات المتقدمة</td></tr>'
                                                    + '<tr><td>ENCS3340</td><td>*(4)تعلم الآلة وعلم البيانات</td></tr>'
                                                    + '</table>'
        7) separatelines in notes by <br> not \n like: '*COMP230 أو COMP133<br>*مستوى سنة 3'
*/
const courses = [
    //['NAME', 'CODE', ['requirement']s, 'notes']
    //'year 1 semester 1',
    ['مهارات اللغة العربية 1', 'ARAB135', []],
    ['مختبر الأحياء العامة', 'BIOL111',['BIOL131']],
    ['الأحياء العامة', 'BIOL131', []],
    ['مختبر الكيمياء العامة', 'CHEM113', ['CHEM133']],
    ['الكيمياء العامة', 'CHEM133', []],
    ['لغة إنجليزية مستوى متوسط 3', 'ENGC2201', []],
    ['التفاضل والتكامل للعلوم الصحية', 'MATH1431', []],

    'year 1 semester2',
    ['مهارات اللغة العربية 2', 'ARAB136', ['ARAB135']],
    ['أسس الكيمياء العضوية', 'CHEM230', ['CHEM133']],
    ['لغة إنجليزية مستوى متوسط 4', 'ENGC2202', ['ENGC2201']],
    ['أسس التغذية البشرية', 'NUTD231', ['CHEM230']],
    ['مقدمة في علم الحميات', 'NUTD321', ['NUTD231']],
    ['علم النفس للمهن الصحية', 'PSYC236', []],
    ['اختياري كلية', ' ', []],

    'year 2 semester 1',
    ['الكيمياء الحيوية التغذوية', 'BIOC231', ['BIOL131']],
    ['مختبر الكيمياء العضوية', 'CHEM221', ['CHEM113','CHEM230']],
    ['لغة إنجليزية مستوى متقدم 1', 'ENGC2203', ['ENGC2202']],
    ['مبادئ تجهيز الطعام', 'NUTD233', ['NUTD231']],
    ['التذية خلال المراحل الحياتية 1', 'NUTD238', ['NUTD231']],
    ['علم التشريح وفيسولوجيا الإنسان', 'NUTD341', ['BIOL111']],

    'year 2 semester 2',
    ['علم الأحياء الدقيقة', 'BIOL243', ['BIOL131']],
    ['لغة إنجليزية مستوى متقدم 2', 'ENGC2204', ['ENGC2203']],
    ['إدارة عمليات إنتاج الطعام في المؤسسات', 'NUTD234', ['NUTD233']],
    ['التغذية خلال المراحل الحياتية 2', 'NUTD239', ['NUTD231']],
    //['أخلاقيات مهنة التغذية', 'NUTD3290', ['MATH331']],
    ['اختياري جامعة', ' ', []],

    'year 3 semester 1',
    ['الإحصاء الحيوي وعلم الوبائيات', 'NURS232', []],
    ['التغذية السريرة 1', 'NUTD331', ['NUTD238', 'NUTD239']],
    ['أيض العناصر الغذائية', 'NUTD338', ['NUTD231','BIOC231']],
    ['تقييم الوضع الغذائي: طرق بحثية', 'NUTD432', ['NUTD231','NURS232']],
    ['اختياري جامعة', ' ', []],
    ['مساق اختياري', ' ', []],

    'year 3 semester 2',
    ['التغذية السريرة 2', 'NUTD332', ['NUTD238', 'NUTD239']],
    ['التغذية المجتمعية', 'NUTD3320', ['NUTD231', 'NURS232']],
    ['سلامة الأغذية', 'NUTD336', ['BIOL243']],
    //['تصميم الوجبات', 'NUTD439', ['COMP133'], '*COMP230 أو COMP133<br>*مستوى سنة 3',
    ['مساق اختياري', ' ', []],
    ['اختياري تخصص', ' ', []],

    'year 4 semester 1',
    ['ميكروبات الأغذية', 'NUTD343', ['BIOL243']],
    ['التدريب العملي 1', 'NUTD4200', ['ENEE2360', 'ENCS2380']],
  //  ['أساليب البحث في العلوم الصحية', 'NUTD4221', ['ENEE2312', 'MATH234']],
    ['التواصل والإرشاد الغذائي', 'NUTD431', ['NUTD231', 'PSYC236']],
    ['اختياري تخصص', ' ', []],
    ['اختياري تخصص', ' ', [], ['*مستوى سنة 4']],

    'year 4 semester 2',
    ['حلقة بحث', 'NUTD411', []],['أو موافقة الدائرة<br>*مستوى سنة 4'],
    ['تدريب عملي 2', 'NUTD4300', ['NUTD4200']]
];
