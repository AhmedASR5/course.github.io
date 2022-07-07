const title = 'Birzeit University Department of Architectural Engineering Advisory Plan';
const note = '(ENAR4300) ملاحظة التدريب العملي في صيف السنة الرابعة حسب الخطة بعد إتمام 90 ساعة';
const link_title = '-- تفاصيل حول مساقات التركيز --';
const url = 'httpsdrive.google.comfiled1eO7m7H1wFbwjzxwu6lwPcEcbwXWN7m5Aviewusp=sharing';
const link_more_info = 'تحتوي أيضاً على خطة هندسة الكهرباء';  I DON'T KNOW WHAT I SHOULD WRITE HERE


const courses = [
    ['NAME', 'CODE', ['requirement']s, 'notes']

    'year 1 semester 1',
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

    ,

    'year 2 semester 1',
    ['تصميم معماري 1', 'ENAR2311', ['ENAR1311']],
    ['تاريخ عمارة 2', 'ENAR2351', ['ENAR1241']],
    ['ظلال ومنظور', 'ENAR2211', ['ENAR1211']], DONE
        ['تشيد مباني 1', 'ENAR2361', ['ENAR1211']],DONE
        ['اخلاقيات مهنية', 'ENAR2111', []],DONE
        ['استاتيكا', 'ENCE232', []],DONE
        ['مهارات بصرية 2', 'ENAR2131', ['ENAR1111']],DONE
        ['مختبر مواد بناء', 'ENCE216', ['ENAR1311']],DONE


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
    ['تشيد مباني3', 'ENAR3251', ['ENAR2371']],  PROBLEM HERE ENAR2471 OR ENAR2371
        ['انظمة انشائية', 'ENCE2351', ['ENCE223']],
    ['مساحة', 'ENCE327', ['ENAR1211']],
    ['مختبر مساحة', 'ENCE317', ['ENCE327']],  او متزامن



    'year 3 semester 2',

    ['تصميم معماري 4', 'ENAR3421', ['ENCE2351','ENAR3411']],
    ['نظريات عمارة 2', 'ENAR3241', ['ENAR3331']],
    ['العمارة في فلسطين', 'ENAR3301', ['ENAR2381']],
    ['الرسم بالحاسوب', 'ENAR3201', []],  60 HOURS SHOULD BE DONE
        ['التخطيط العمراني 2', 'ENPL3341', ['ENPL3331']],
    ['خرسانة مسلحة', 'ENCE3361', ['ENCE3251']],



    'year 4 semester 1',

    ['تصميم معماري 5', 'ENAR441', ['ENPL3341','ENAR3421']],
    ['عمارة المشهد', 'ENPL436', ['ENPL3341','ENAR3421']],
    ['هندسة اضاءة وصوت', 'ENEE3307', ['ENAR3251']],  OR متزامن
        ['الاخراح بالحاسوب', 'ENAR4211', ['ENAR3201']],
    ['ممارسة مهنة و ادارة مشاريع', 'ENCE4341', ['ENAR3251','ENAR2111']],  HERE THEY WRITE JUST 2111 SO I SUPPOSED THAT THEY ARE TALK ABOUT ENAR2111



    'year 4 semester 2',

    ['تصميم معماري 6', 'ENAR4421', ['ENCE3361','ENAR4411']],
    [' ندوة في التصميم المعماري', 'ENAR4121', ['ENAR4411']],
    ['ندوة في التصميم الداخلي', 'ENAR4101', ['ENAR4411']],
    ['ندوة في ترميم المباني وصيانتها', 'ENAR4141', ['ENAR4411']],
    ['تصميم داخلي', 'ENAR4391', ['ENAR3421']],
    ['عمارة بيئية', 'ENAR4251', ['ENAR3421']],
    ['هندسة ميكانيكية و صحية', 'ENME4301', ['ENAR3251']],



    'year 5 semester 1',


    ['تركيز تصميم المعماري', '-------', [], `tabletrthالمتطلباتththالمادةthtr
                                                    trtdENAR4121tdtd(2)ندوة في التصميم المعماريtdtr
                                                    trtdENAR5311tdtd(3) العمارة المعاصرةtdtr
                                                    trtdENAR5411tdtd(4) تصميم معماري متقدمtdtr
                                                    table`],

    ['تركيز تصميم الداخلي', '-------', [], `tabletrthالمتطلباتththالمادةthtr
                                                    trtdENAR4101tdtd(2)ندوة في التصميم الداخليtdtr
                                                    trtdENAR5321tdtd(3) نظريات التصميم الداخليtdtr
                                                    trtdENAR5421tdtd(4) تصميم داخلي متقدمtdtr
                                                    table`],


    ['تركيز ترميم المباني وصيانتها ', '-------', [], `tabletrthالمتطلباتththالمادةthtr
                                                    trtdENAR4141tdtd(2)ندوة في التصميم المباني وصيانتهاtdtr
                                                    trtdENAR5331tdtd(3)نظريات الحفاظ و الترميمtdtr
                                                    trtdENAR5441tdtd(4) ترميم وصيانة مباني متقدم tdtr
                                                    table`],


    'year 5 semester 2',

    ['مهارات متقدمة', 'ENAR5111', []], الفصل االخير للتخرج
        ['مشروع تخرج', 'ENAR530', ['ENAR520']], ,ENAR520 , ENAR5411 or ENAR5421 or ENAR5441




];