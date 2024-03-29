const title = 'Birzeit University Computer Science Advisory Plan';
const link_title = ' ';
const url = ' ';
const link_more_info = ' ';
const courses = [
    //['NAME', 'CODE', ['requirement']s, 'notes']
    //'year 1 semester 1',
    ['مهارات اللغة العربية 1', 'ARAB135', []],
    ['مقدمه في الحاسوب وأخلاقيات الحوسبة', 'COMP1310',[]],
    ['التفاضل والتكامل 1', 'MATH1411', []],
    ['الفيزياء العامة 1', 'PHYS141', []],
    ['مختبر الفيزياء العامة 1', 'PHYS111', ['PHYS141']],
    ['لغة إنجليزية مستوى متوسط 3', 'ENGC2201', []],

    'year 1 semester2',
    ['مهارات اللغة العربية 2', 'ARAB136', ['ARAB135']],
    ['لغة إنجليزية مستوى متوسط 4', 'ENGC2202', ['ENGC2201']],
    ['الحاسوب والبرمجة', 'COMP1331', ['COMP1310']],
    ['التفاضل والتكامل 2', 'MATH1321', ['MATH1411']],
    ['الفيزياء العامة 2', 'PHYS132', ['PHYS141','MATH1411']],
    ['مختبر الفيزياء العامة 2', 'PHYS112', ['PHYS132','PHYS111']],

    'year 2 semester 1',
    ['البرمجة الشيئية', 'COMP2311', ['COMP1331']],
    ['لغة إنجليزية مستوى متقدم 1', 'ENGC2203', ['ENGC2202']],
    ['الرياضيات المنفصلة', 'COMP233', ['MATH1411']],
    ['مختبر نظام تشغيل لينوكس', 'COMP311', ['COMP1331']],
    ['الإحصاء 1', 'STAT2311', []],
    ['اختياري جامعة', ' ', []],

    'year 2 semester 2',
    ['بنية المعلومات', 'COMP242', ['COMP2311']],
    ['لغة إنجليزية مستوى متقدم 2', 'ENGC2204', ['ENGC2203']],
    ['مقدمة في الجبر الخطي', 'MATH234', ['MATH1321']],
    ['أنظمة رقمية', 'ENCS2340', ['COMP1331']],
    ['اختياري تخصص', ' ', []],

    'year 3 semester 1',
    ['إدارة قواعد البيانات', 'COMP3330', ['COMP242'],'أو متزامن'],
    ['تحليل الخوارزميات', 'COMP336', ['COMP242']],
    ['تنظيم الحاسوب ولغة التجميع', 'ENCS3360', ['ENCS2340']],
    ['الحضارة الاوروبية الحديثه والمعاصره', 'CULS331', [],'يجب انهاء 30 ساعة'],
    ['اختياري تخصص', ' ', []],

    'year 3 semester 2',
    ['تطبيقات وتقنيات الويب', 'COMP3340', ['COMP3330']],
    ['الذكاء الاصطناعي', 'COMP338', ['COMP233', 'COMP242']],
    ['الهندسة البرمجية', 'COMP433', ['COMP3330']],
    ['مختبر الإلكترونيات الرقمية وتنظيم الحاسوب', 'ENCS2110', ['ENCS3360'],'أو متزامن'],
    ['تطوير برمجيات المحمول', 'COMP4310', ['COMP3330']],
    ['اختياري تخصص', ' ', []],
    ['فصل صيفي سنة رابعة', ' ', [], '', 1],
    ['التدريب العملي', 'COMP3300', [], 'موافقة الدائرة وإتمام 80 ساعة<br>يؤخذ صيفا', 2],

    'year 4 semester 1',
    ['نظم التشغيل', 'COMP431', ['COMP311','COMP242']],
    ['مقدمة لمشروع التخرج', 'COMP4200', ['COMP336'],'يتطلب موافقة الدائرة بالإضافة إلى<br> انهاء مواد التراكيز الذي اخترته'],
    ['شبكات الحاسوب', 'ENCS3320', ['COMP1331'],'بالإضافة إلى اجتياز 60 ساعة'],
    ['الفكر العربي الحديث والمعاصر', 'CULS332', [],'يجب انهاء 30 ساعة'],
    ['اختياري تخصص', ' ', []],
    ['اختياري تخصص', ' ', []],

    'year 4 semester 2',
    ['أمن وحماية الحاسوب', 'COMP432', ['COMP311','COMP242']],
    ['المترجمات ولغات البرمجة', 'COMP439', ['COMP233','COMP242']],
    ['مشروع التخرج', 'COMP4300', ['COMP4200','COMP3300']],
    ['مختبر شبكات الحاسوب', 'ENCS4130', ['ENCS3320']],
    ['اختياري جامعة', ' ', []],
    ['اختياري تخصص', ' ', []]
];
