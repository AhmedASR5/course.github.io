const title = 'Birzeit University Computer Engineering Advisory Plan';
const note = '(ENCS4300) ملاحظة: التدريب العملي في صيف السنة الرابعة حسب الخطة بعد إتمام 90 ساعة';
const link_title = '-- تفاصيل حول مساقات التركيز --';
const url = 'https://drive.google.com/file/d/1L8dn-5Di_MJwF3AJjOZRkw2MhvT_tiBd/view';
const link_more_info = 'تحتوي أيضاً على خطة هندسة الكهرباء';
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
    ['الحاسوب والبرمجة', 'COMP133', []],
    ['الرسم الهندسي', 'ENME121', []],
    ['مهارات اللغة العربية 2', 'ARAB136', ['ARAB135']],
    ['لغة إنجليزية مستوى متوسط 2', 'ENGC1202', ['ENGC1201']],

    'year 2 semester 1',
    ['أنظمة رقمية', 'ENCS2340', ['COMP133']],
    ['البرمجة الشيئية', 'COMP2310', ['COMP133']],
    ['الرياضيات المنفصلة', 'COMP233', ['MATH1411']],
    ['المعادلات التفاضلية العادية', 'MATH331', ['MATH1321']],
    ['الاحتمالات والإحصاء الهندسي', 'ENEE2307', ['MATH1321']],
    ['لغة إنجليزية مستوى متوسط 3', 'ENGC2201', ['ENGC1202']],
    
    'year 2 semester 2',
    ['تنظيم الحاسوب والمعالج الدقيق', 'ENCS2380', ['ENCS2340']],
    ['بنية المعلومات والخوارزميات', 'COMP2421', ['COMP133']],
    ['مختبر الأنظمة الرقمية وتنظيم الحاسوب', 'ENCS2110', ['ENCS2380']],
    ['الإشارات والأنظمة', 'ENEE2312', ['MATH331']],
    ['تحليل الدوائر الكهربائية', 'ENEE2304', ['PHYS132', 'MATH331']],
    ['لغة إنجليزية مستوى متوسط 4', 'ENGC2202', ['ENGC2201']],

    'year 3 semester 1',
    ['تصميم الأنظمة الرقمية المتقدمة', 'ENCS3310', ['ENCS2380']],
    ['أنظمة الاتصالات', 'ENEE3309', ['ENEE2312', 'ENEE2307']],
    ['نظم التشغيل', 'ENCS3390', ['ENCS2380']],
    ['مقدمة في الجبر الخطي', 'MATH234', ['MATH1321']],
    ['الإلكترونيات التمثيلية', 'ENEE2360', ['ENEE2304']],
    ['مختبر لينوكس', 'ENCS3130', ['COMP133']],
    ['مختبر تطبيقات الحاسوب', 'ENCS4110', ['ENCS2380', 'ENCS2110']],

    'year 3 semester 2',
    ['عمارة الحاسبات', 'ENCS4370', ['ENCS2380']],
    ['الذكاء الإصطناعي', 'ENCS3340', ['COMP133', 'COMP233']],
    ['الدوائر الرقمية المتكاملة', 'ENCS3330', ['ENEE2360', 'ENCS2340']],
    ['شبكات الحاسوب', 'ENCS3320', ['COMP133'], '*COMP230 أو COMP133<br>*مستوى سنة 3'],
    ['مختبر الدوائر والإلكترونيات', 'ENEE2103', ['ENEE2360', 'PHYS112']],
    ['مختبر الإتصالات', 'ENEE4113', ['ENEE3309']],
    ['إدارة المشاريع الهندسية', 'BUSA2302', []],

    'year 4 semester 1',
    ['إدارة قواعد البيانات', 'COMP333', ['COMP2421']],
    ['أساليب المواءمة', 'ENCS4380', ['ENEE2360', 'ENCS2380']],
    ['معالجة الإشارات الرقمية', 'ENCS4310', ['ENEE2312', 'MATH234']],
    ['التشفير التطبيقي', 'ENCS4320', ['COMP233', 'COMP133']],
    ['مختبر شبكات الحاسوب', 'ENCS4130', ['ENCS3320']],
    ['أخلاقيات هندسة الحاسوب', 'ENCS4210', [], ['*مستوى سنة 4']],
    
    'year 4 semester 2',
    ['الهندسة البرمجية', 'COMP433', ['COMP333']],
    ['تطبيقات الزمن الحقيقي والأنظمة المقحمة', 'ENCS4330', ['ENCS3130', 'ENCS3390']],
    ['مساق من أحد التراكيز', 'ENCS53(2,3,4)1', [], `<table><tr><th>المتطلبات</th><th>المادة</th></tr>
                                                    <tr><td>ENCS3320</td><td>*(2)شبكات الحاسوب المتقدمة</td></tr>
                                                    <tr><td>ENCS4370, ENCS3390</td><td>*(3)عمارة الحاسبات المتقدمة</td></tr>
                                                    <tr><td>ENCS3340</td><td>*(4)تعلم الآلة وعلم البيانات</td></tr>
                                                    </table>`],
    ['مساق اختياري تركيز', ' ', [], 'المتطلبات حسب التركيز'],
    ['الحضارة الأوروبية المعاصرة', 'CULS331', []],

    'year 5 semester 1',
    ['مساق من أحد التراكيز', 'ENCS53(2,3,4)2', [], `<table><tr><th>المتطلبات</th><th>المادة</th></tr>
                                                    <tr><td>ENCS4320</td><td>*(2)بروتوكولات أمان الشبكة</td></tr>
                                                    <tr><td>ENCS3330</td><td>*(3)(VLSI)تصميم الرقائق المتكاملة</td></tr>
                                                    <tr><td>ENCS3340</td><td>*(4)(NLP)نظم المعلومات القائمة على النصوص</td></tr>
                                                    </table>`],
    ['مساق اختياري تركيز', ' ', [], 'المتطلبات حسب التركيز'],
    ['مقدمة مشروع التخرج', 'ENCS5200', [], '*ساعة 115'],
    ['مختبر نظم الزمن الحقيقي وأساليب المواءمة', 'ENCS5140', ['ENCS4330']],
    ['اختياري جامعة 1', ' ', [], 'حسب دائرة المساق'],
    ['الفكر العربي المعاصر', 'CULS332', []],

    'year 5 semester 2',
    ['مشروع التخرج', 'ENCS5300', ['ENCS5200'], ['*ENCS4300 التدريب العملي']],
    ['مساق من أحد التراكيز', 'ENCS53(2,3,4)3', [], `<table><tr><th>المتطلبات</th><th>المادة</th></tr>
                                                    <tr><td>ENEE339أوENEE3309, ENCS3320</td><td>*(2)الشبكات اللاسلكية وشبكات الهاتف النقال</td></tr>
                                                    <tr><td>ENCS4330</td><td>(3)*الأنظمة المدمجة المتقدمة</td></tr>
                                                    <tr><td>ENCS3340</td><td>*(4)رؤية الحاسوب</td></tr>
                                                    </table>`],
    ['مختبر تركيز', 'ENCS51(2,3,4)1', [], `<table><tr><th>المتطلبات</th><th>المادة</th></tr>
                                            <tr><td>ENCS5322</td><td>*(2)مختبر أمن المعلومات وشبكات الحاسوب</td></tr>
                                            <tr><td>ENCS3330</td><td>*(3)مختبر تصميم الأجهزة</td></tr>
                                            <tr><td>ENCS3340</td><td>*(4)مختبر الأنظمة الذكية</td></tr>
                                            </table>`],
    ['مختبر متقدم في هندسة الحاسوب', 'ENCS5150', [], '*ساعة 115'],
    ['اختياري جامعة 2', ' ', [], 'حسب دائرة المساق']
];