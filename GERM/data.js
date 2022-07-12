const title = 'Birzeit University German as a foreign language Advisory Plan';
const link_title = ' ';
const url = ' ';
const link_more_info = ' ';
const courses = [
    //['NAME', 'CODE', ['requirement']s, 'notes']
    //'year 1 semester 1',
    ['مهارات اللغة العربية 1', 'ARAB135', []],
    ['Introduction to German(A1)', 'GERM130',[]],
    ['German for Beginners 1 (A1)', 'GERM131', ['GERM130']],
    ['لغة إنجليزية مستوى متوسط 3', 'ENGC2201', []],
    ['اختياري كلية', ' ', []],

    'year 1 semester2',
    ['مهارات اللغة العربية 2', 'ARAB136', ['ARAB135']],
    ['German for Beginners 2a (A2)', 'GERM132', ['GERM131','GERM130']],
    ['لغة إنجليزية مستوى متوسط 4', 'ENGC2202', ['ENGC2201']],
    ['German for Beginners 2b (A2)', 'GERM133', ['GERM132']],
    ['اختياري كلية', ' ', []],
    ['مساق اختياري', ' ', []],

    'year 2 semester 1',
    ['Intermediate German 1a (B1.1)', 'GERM230', ['GERM132','GERM133']],
    ['Intermediate German 1b (B1.1)', 'GERM2311', ['GERM132','GERM133']],
    ['لغة إنجليزية مستوى متقدم 1', 'ENGC2203', ['ENGC2202']],
    ['Academic Study Skills', 'GERM235', ['GERM132','GERM133']],
    ['الحضارة الاوروبية الحديثه والمعاصره', 'CULS331', [],'يجب انهاء 30 ساعة'],
    ['مساق اختياري', ' ', []],

    'year 2 semester 2',
    ['Intermediate German 2 (B1.2)', 'GERM233', ['GERM230','GERM2311']],
    ['لغة إنجليزية مستوى متقدم 2', 'ENGC2204', ['ENGC2203']],
    ['إIntroduction to German Literature', 'GERM234', ['GERM230','GERM2311']],
    ['Introduction to German Country Studies', 'GERM2321', ['GERM230','GERM2311']],
    ['الفكر العربي الحديث والمعاصر', 'CULS332', [],'يجب انهاء 30 ساعة'],
    ['اختياري كلية', ' ', []],

    'year 3 semester 1',
    ['Intermediate German III (B2.1)', 'GERM3301', ['GERM233']],
    ['Introduction to Linguistics', 'GERM332', ['GERM233']],
    ['Methodology and Didactics of DaF', 'GERM333', ['GERM233']],
    ['مساق اختياري', ' ', []],
    ['مساق اختياري', ' ', []],

    'year 3 semester 2',
    ['Advanced German I(B2.1/B2.2)', 'GERM331', ['GERM3301']],
    ['Specialization Elective', 'GERM3**', ['GERM3301'],`<table><tr><th>الرمز</th><th>المادة</th></tr>
                               <tr><td>GERM334</td><td>Special Topic in German Language, Linguistics or Phonetics</td></tr>
                               <tr><td>GERM335</td><td>German-Arabic Translation I</td></tr>
                               <tr><td>GERM336</td><td>Special Topic in German Country Studies</td></tr>
                               <tr><td>GERM337</td><td>Special Topic in German Literature</td></tr>
                               </table>`],
    ['Specialization Elective', 'GERM3**', ['GERM3301'],`<table><tr><th>الرمز</th><th>المادة</th></tr>
                               <tr><td>GERM334</td><td>Special Topic in German Language, Linguistics or Phonetics</td></tr>
                               <tr><td>GERM335</td><td>German-Arabic Translation I</td></tr>
                               <tr><td>GERM336</td><td>Special Topic in German Country Studies</td></tr>
                               <tr><td>GERM337</td><td>Special Topic in German Literature</td></tr>
                               </table>`],
    ['مساق اختياري', ' ', []],
    ['مساق اختياري', ' ', []],

    'year 4 semester 1',
    ['Advanced German II (B2.2)', 'GERM430', ['GERM331']],
    ['Specialization Elective', 'GERM4**', ['GERM331'],`<table><tr><th>الرمز</th><th>المادة</th></tr>
                                <tr><td>GERM433</td><td>Current Issues in German Language Media</td></tr>
                                <tr><td>GERM434</td><td>Special Topic in DaF Didactics and Methodology</td></tr>
                               <tr><td>GERM435</td><td>German for Professional Purposes</td></tr>
                               <tr><td>GERM436</td><td>German-Arabic Translation II</td></tr>
                               <tr><td>GERM4371</td><td>Methods of Teaching German as a Foreign Language I</td></tr>
                               <tr><td>GERM4472</td><td>Methods of Teaching German as a Foreign Language II</td></tr>
                               <tr><td>GERM431</td><td>Contemporary German Literature</td></tr>
                               </table>`],
    ['Advanced German Writing', 'GERM432', ['GERM331']],
    ['اختياري كلية', ' ', []],
    ['مساق اختياري', ' ', []],

    'year 4 semester 2',
    ['Specialization Elective', 'GERM4**', ['GERM331'],`<table><tr><th>الرمز</th><th>المادة</th></tr>
                                <tr><td>GERM433</td><td>Current Issues in German Language Media</td></tr>
                                <tr><td>GERM434</td><td>Special Topic in DaF Didactics and Methodology</td></tr>
                               <tr><td>GERM435</td><td>German for Professional Purposes</td></tr>
                               <tr><td>GERM436</td><td>German-Arabic Translation II</td></tr>
                               <tr><td>GERM4371</td><td>Methods of Teaching German as a Foreign Language I</td></tr>
                               <tr><td>GERM4472</td><td>Methods of Teaching German as a Foreign Language II</td></tr>
                               <tr><td>GERM431</td><td>Contemporary German Literature</td></tr>
                               </table>`],
    ['Graduation Project', 'GERM438', ['GERM430']],
    ['اختياري كلية', ' ', []],
    ['اختياري كلية', ' ', []],
    ['مساق اختياري', ' ', []]
];
