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
    ['المحاسبة المالية', 'ACCT130',[]],
    ['مبادئ الإدارة المالية', 'FINN1300', []],
    ['التفاضل والتكامل 1', 'MATH1411', []],
    ['مهارات اللغة العربية 1', 'ARAB135', []],
    ['لغة إنجليزية مستوى متوسط 3', 'ENGC2201', []],

    'year 1 semester2',
    ['المحاسبة المالية 2', 'ACCT230', ['ACCT130']],
    ['مقدمة في إدارة الأعمال', 'BUSA130', ['NUTD231']],
    ['مبادئ الإقتصاد الجزئي', 'ECON131', []],
    ['التفاضل والتكامل 2', 'MATH1321', ['MATH1411']],
    ['الإحصاء 1', 'STAT2311', []],
    ['مهارات اللغة العربية 2', 'ARAB136', ['ARAB135']],
    ['لغة إنجليزية مستوى متوسط 4', 'ENGC2202', ['ENGC2201']],


    'year 2 semester 1',
    ['مبادئ الإقتصاد الكلي', 'ECON132', []],
    ['مختبر الكيمياء العضوية', 'FINN2300', ['FINN1300','ACCT230']],
    ['التفاضل والتكامل 3', 'MATH2311', ['MATH1321']],
    ['الإحصاء 2', 'STAT3311', ['STAT2311']],
    ['لغة إنجليزية مستوى متقدم 1', 'ENGC2203', ['ENGC2202']],

    'year 2 semester 2',
    ['الإقتصاد التحليلي الجزئي 1', 'ECON3311', ['ECON132','MATH1411']],
    ['مقدمة في الجبر الخطي', 'MATH234', ['MATH1321']],
    ['نظرية الإحتمالات', 'STAT3321', ['STAT3311','MATH2311']],
    ['اختياري جامعة', ' ', []],
    ['لغة إنجليزية مستوى متقدم 2', 'ENGC2204', ['ENGC2203']],

    'year 3 semester 1',
    ['نظرية الفائدة', 'ACFI331', ['MATH2311']],
    ['مبادئ التأمين', 'FINN233', ['FINN2300']],
    ['الإدارة المالية للشركات', 'FINN3300', ['FINN2300']],
    ['الإستدلال الإحصائي', 'STAT3331', ['STAT3321','MATH234']],
    ['اختياري جامعة', ' ', []],

    'year 3 semester 2',
    ['التدريب العملي في العلوم الإكتوارية', 'ACFI430', [],'موافقة الدائرة'],
    ['نظرية المخاطرة', 'ACFI434', ['STAT3321']],
    ['نماذج البقاء', 'ACFI435', ['STAT3331']],
    ['الإقتصاد التحليلي الكلي 1', 'ECON3321', ['ECON132','MATH1411']],
    ['تحليل مالي للشركات', 'FINN331', ['FINN3300']],
    ['تحليل الإنحدار', 'STAT3341', ['STAT3321','MATH234']],

    'year 4 semester 1',
    ['الطوارئ على الحياة', 'ACFI431', ['STAT3321']],
    ['مقدمة في الإقتصاد القياسي', 'ECON432', ['STAT2361']],
    ['إدارة الإستثمار', 'FINN431', ['FINN3300']],
    ['تحليل المتسلسلات الزمنية', 'STAT435', ['STAT3321', 'MATH234']],
    ['اختياري تخصص', ' ', []],
    ['اختياري الكتف', ' ', []],

    'year 4 semester 2',
    ['حلقة دراسية في العلوم الإكتوارية', 'ACFI439', [],'موافقة الدائرة'],
    ['المشتقات المالية والأسواق الاجله', 'FINN434', ['FINN3300']],
    ['العمليات التصادفية', 'STAT436', ['STAT3321','MATH234']],
    ['اختياري تخصص', ' ', []],
    ['اختياري تخصص', ' ', []],
    ['اختياري الكتف', ' ', []]
];
