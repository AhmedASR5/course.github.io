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
    ['المحاسبة المالية 1', 'ACCT130',[]],
    ['مبادئ الإدارة المالية 1', 'FINN1300', []],
    ['رياضيات ما قبل التفاضل و التكامل 1', 'MATH1351', []],
    ['التربية الرياضية', 'PHED120', []],
    ['مهارات اللغة العربية 1', 'ARAB135', []],
    ['لغة إنجليزية مستوى متوسط 3', 'ENGC2201', []],

    'year 1 semester2',
    ['المحاسبة المالية 2', 'ACCT230', ['ACCT130']],
    ['مقدمة في إدارة الأعمال', 'BUSA130', []],
    ['مبادئ الإقتصاد الجزئي', 'ECON131', []],
    [' مقدمة في الحاسوب', 'COMP121', []],
    ['التفاضل و التكامل للأعمال والإقتصاد', 'MATH2351', ['MATH1351']],
    ['مهارات اللغة العربية 2', 'ARAB136', ['ARAB135']],
    ['لغة إنجليزية مستوى متوسط 4', 'ENGC2202', ['ENGC2201']],


    'year 2 semester 1',
    ['المتوسطة المحاسبة 1', 'ACCT335', ['ACCT230']],
    ['مبادئ الإقتصاد الكلي', 'ECON132', ['ECON131']],
    ['الإحصاء للأعمال والإقتصاد', 'STAT2361', ['MATH1351']],
    ['لغة إنجليزية مستوى متقدم 1', 'ENGC2203', ['ENGC2202']],

    'year 2 semester 2',
    ['محاسبة التكاليف', 'ACCT331', ['ACCT230']],
    [' المتوسطة المتوسطة 2', 'ACCT336', ['ACCT335']],
    [' مبادىء إدارة الأعمال', 'BUSA230', ['BUSA130']],
    ['مبادىء الإدارة المالية 2', 'FINN2300', ['FINN1300','ACCT230']],
    ['مبادىء التسويق 1', 'MKET130', []],
    ['لغة إنجليزية مستوى متقدم 2', 'ENGC2204', ['ENGC2203']],

    'year 3 semester 1',
    ['مبادىء الضريبة', 'ACCT332', ['ACCT230']],
    ['المحاسبة الإدارية', 'ACCT333', ['ACCT331']],
    ['مناهج البحث', 'ECON235', ['STAT2361']],
    ['اختياري تخصص', ' ', []],

    'year 3 semester 2',
    ['مبادىء تدقيق الحسابات 1', 'ACCT339', []],
    ['النظم المحاسبية', 'ACCT434', ['ACCT331']],
    ['اختياري تخصص', ' ', []],
    ['اختياري كلية', ' ', []],
    ['الكتف حر', ' ', []],

    'year 4 semester 1',
    ['المحاسبة المالية المتقدمة', 'ACCT432', ['ACCT336']],
    ['مقدمة في القانون التجاري', 'BUSA3301', ['BUSA230']],
    ['اختياري تخصص', ' ', []],
    ['اختياري كلية', ' ', []],
    ['الكتف حر', ' ', []],

    'year 4 semester 2',
    ['حلقة دراسية في المحاسبة', 'ACCT437', ['ECON235','ACCT339'],'أو اجتياز 90 ساعة مع انهاء مادة ECON235'],
    ['اختياري تخصص', ' ', []],
    ['اختياري كلية', ' ', []],
    ['اختياري تخصص', ' ', []],
    ['الكتف حر', ' ', []],
];
