document.getElementById('title').innerHTML = title;
document.getElementById('note').innerHTML = note;
document.getElementById('link').children[0].innerHTML = link_title;
document.getElementById('link').children[0].href = url;
document.getElementById('link').title = link_more_info;


let str = '<h3 class="year">Year 1</h3><div class="semester"><h4>Semester 1</h4>';
let str2 = '', i = 2;
for(let course of courses) {
    if(typeof(course) === 'string') {
        i++;
        str2 += str + '</div>';
        str = i%2 === 1 ? '<div class="semester"><h4>Semester 2</h4>' :
            '<h3 class="year">Year ' + parseInt(i/2) + '</h3><div class="semester"><h4>Semester 1</h4>';
    }
    else {
        str += `<div id="${course[1]}" class="course released" onmouseleave="Remove_highlights()" onmouseover="get_requirements(this)"><div>
        ${course[0]}</div><div>${course[1]}</div>${course[3] ? `<div class="note">${course[3]}</div>`:''}</div>`;
    }
}
document.getElementById('schedule').innerHTML = str2 + str + '</div>' 
    + document.getElementById('schedule').innerHTML;

if(i > 10) document.getElementsByTagName('html')[0].style.zoom = `${1/(i - 1)}`;
else document.getElementById('guide').style.zoom = `${(i-1)/10}`;
function Remove_highlights() { //Remove highlight from items
    [...document.getElementsByTagName('div')].forEach(
        course => {if(/course/.test(course.className)) course.className = 'course released'});
}

function get_requirements(me) {
    me.className = 'course course_to_get_requisites'; //highlight the item
    let direct_requisites = courses.find((course) => course[1] === me.id)[2]; //find direct requisites items
    //highlight direct requisites items
    direct_requisites.forEach(req => {document.getElementById(req).className = 'course direct_requisites';});
    //find indirect requisites items
    let indirect_requisites = [];
    let preReqs = direct_requisites;
    let newReqs = [''];
    while(newReqs.length > 0){    
        newReqs = [];
        preReqs.forEach(req => newReqs.push(...courses.find((course) => course[1] === req)[2]));
        newReqs = [...new Set(newReqs.filter(course => !direct_requisites.includes(course)))];
        preReqs = newReqs;
        indirect_requisites.push(...newReqs);
    }
    //highlight indirect requisites items
    indirect_requisites.forEach(req => {document.getElementById(req).className = 'course indirect_requisites';});
    //find requisite for items
    let requisite_for = [];
    preReqs = [me.id];
    newReqs = [''];
    while(newReqs.length > 0){    
        newReqs = [];
        preReqs.forEach(req => newReqs.push(...courses.filter((course) => 
            course[2].includes(req)).map(course => course[1])));
        preReqs = newReqs = [...new Set(newReqs)];
        requisite_for.push(...newReqs);
    }
    //highlight requisite for items
    requisite_for.forEach(req => {document.getElementById(req).className = 'course requisite_for';});
}