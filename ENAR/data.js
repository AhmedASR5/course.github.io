const title = 'Birzeit University Department of Architectural Engineering Advisory Plan';
const note = '';
const link_title = '';
const url = '';
const link_more_info = '';


const courses = [
    //['NAME', 'CODE', ['requirement']s, 'notes']
    //'year 1 semester 1',
    [' مهارات بصرية 1', 'ENAR1111', []],
    ['رسم معماري ', 'ENAR 1211',['ENAR1111']],
    ['مهارات اللغة العربية 1', 'ARAB135', []],
    ['الفيزياء العامة 1', 'PHYS141',[]],
    ['مختبر الفيزياء العامة 1', 'PHYS111', ['PHYS141']],
    ['لغة إنجليزية مستوى متوسط 1', 'ENGC1201', []],

    'year 1 semester2',
    ['التفاضل والتكامل 2', 'MATH1321', ['MATH1411']],
    ['مهارات اللغة العربية 2', 'ARAB136', ['ARAB135']],
    ['لغة إنجليزية مستوى متوسط 2', 'ENGC1202', ['ENGC1201']],
    ['تاريخ عمارة 1', 'ENAR1241', []],
    ['مبادئ عمارة', 'ENAR1311', []],
    ['مشغل', 'ENME120', []],


    'year 2 semester 1',
    ['تصميم معماري 1', 'ENAR2311', ['ENAR1311']],
    ['تاريخ عمارة 2', 'ENAR2351', ['ENAR1241']],
    ['ظلال ومنظور', 'ENAR2211', ['ENAR1211']],
    ['تشيد مباني 1', 'ENAR2361', ['ENAR1211']],
    ['اخلاقيات مهنية', 'ENAR2111', []],
    ['استاتيكا', 'ENCE232', []],
    ['مهارات بصرية 2', 'ENAR2131', ['ENAR1111']],
    ['مختبر مواد بناء', 'ENCE216', ['ENAR1311']],


    'year 2 semester 2',
    ['تصميم معماري 2', 'ENAR2321', ['ENAR2311']],
    ['تاريخ عمارة 3', 'ENAR2381', ['ENAR2351']],
    ['ميكانيكا', 'ENCE223', ['ENCE232']],
    ['تشيد مباني 2', 'ENAR2371', ['ENAR2361']],
    ['فيزياء 2', 'PHYS132', ['PHYS141', 'MATH1411']],
    ['لاب فيزيا 2', 'PHYS112', ['PHYS132', 'PHYS111']],
    ['كيمياء لطلبة الهندسة', 'CHEM143', []],



    'year 3 semester 1',
    ['تصميم معماري 3', 'ENAR3411', ['ENAR2321']],
    ['نظريات عمارة 1', 'ENAR3331', ['ENAR2381']],
    ['التخطيط العمراني1', 'ENPL3331', [' ENAR238']],
    ['تشيد مباني3', 'ENAR3251', ['ENAR2471']],
    ['انظمة انشائية', 'ENCE2351', ['ENCE223']],
    ['مساحة', 'ENCE327', ['ENAR1211']],
    ['مختبر مساحة', 'ENCE317', ['ENCE327'],'أو متزامن'],



    'year 3 semester 2',
    ['تصميم معماري 4', 'ENAR3421', ['ENCE2351','ENAR3411']],
    ['نظريات عمارة 2', 'ENAR3241', ['ENAR3331']],
    ['العمارة في فلسطين', 'ENAR3301', ['ENAR2381']],
    ['الرسم بالحاسوب', 'ENAR3201', [],'60 HOURS SHOULD BE DONE'],
    ['التخطيط العمراني 2', 'ENPL3341', ['ENPL3331']],
    ['خرسانة مسلحة', 'ENCE3361', ['ENCE3251']],



    'year 4 semester 1',
    ['تصميم معماري 5', 'ENAR441', ['ENPL3341','ENAR3421']],
    ['عمارة المشهد', 'ENPL436', ['ENPL3341','ENAR3421']],
    ['هندسة اضاءة وصوت', 'ENEE3307', ['ENAR3251'],'أو متزامن'],
    ['الاخراح بالحاسوب', 'ENAR4211', ['ENAR3201']],
    ['ممارسة مهنة و ادارة مشاريع', 'ENCE4341', ['ENAR3251','ENAR2111']],
    ['تصميم معماري 6', 'ENAR4421', ['ENCE3361','ENAR441']],
    [' ندوة في التصميم المعماري', 'ENAR4121', ['ENAR4411']],


    'year 4 semester 2',


    ['ندوة في التصميم الداخلي', 'ENAR4101', ['ENAR4411']],
    ['ندوة في ترميم المباني وصيانتها', 'ENAR4141', ['ENAR4411']],
    ['تصميم داخلي', 'ENAR4391', ['ENAR3421']],
    ['عمارة بيئية', 'ENAR4251', ['ENAR3421']],
    ['هندسة ميكانيكية و صحية', 'ENME4301', ['ENAR3251']],
    ['مادة تركيز', ' ', [], `<table><tr><th>الرمز<th>المادة</th></tr>
                                                   <tr><td>ENAR4121</td><td>(2)ندوة في التصميم المعماري</td></tr>
                                                   <tr><td>ENAR5311</td><td>(2)ندوة في التصميم الداخلي</td></tr>
                                                    <tr><td>ENAR4101</td><td>(2)ندوة في التصميم الداخلي</td></tr>
                                                    </table>`],


    'year 5 semester 1',

    ['مقدمة مشروع تخرج', 'ENAR520',['ENAR4141','ENAR4101','ENAR4421']],
    ['مادة تركيز',' ',[], `<table><tr><th>الرمز<th>المادة</th></tr>
                                                   <tr><td>ENAR5311</td><td>(3) العمارة المعاصرة</td></tr>
                                                   <tr><td>ENAR5321</td><td>(3) نظريات التصميم الداخلي</td></tr>
                                                    <tr><td>ENAR5331</td><td>(3)نظريات الحفاظ و الترميم</td></tr>
                                                    </table>`],

    ['مادة تركيز',' ',[], `<table> <tr><th>الرمز<th>المادة</th></tr>
                                    <tr><td>ENAR5411</td><td>(4) تصميم معماري متقدم</td></tr>
                                    <tr><td>ENAR5421</td><td>(4) تصميم داخلي متقدم</td></tr>
                                    <tr><td>ENAR5441</td><td>(4) ترميم وصيانة مباني متقدم </td></tr>
                            </table>`],


    'year 5 semester 2',
    ['مهارات متقدمة',' ', [], 'ENAR5111'],
    ['مشروع تخرج', 'ENAR530', ['ENAR520'],'بالإضافة إلى اجتياز إحدى التراكيز']
];
