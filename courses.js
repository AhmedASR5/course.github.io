document.getElementById('title').innerHTML = title;
document.getElementById('link').children[0].innerHTML = link_title;
document.getElementById('link').children[0].href = url;
document.getElementById('link').title = link_more_info;

// zoom parameter to determine what is the zoom size and to select the coures by click not by hover when zoom 
var z = 1; 

let str = '<h3 class="year">Year 1</h3><div class="semester1"><h4>Semester 1</h4>';
let str2 = '', i = 2;
for(let course of courses) {
    if(typeof(course) === 'string') {
        i++;
        str2 += str + '</div>';
        str = i%2 === 1 ? `<div class="semester${i%2 + 1}"><h4>Semester 2</h4>` : '<h3 class="year">Year ' 
            + parseInt(i/2) + `</h3><div class="semester${i%2 + 1}"><h4>Semester 1</h4>`;
    }
    else {
        str += `<${typeof(course[course.length - 1]) === 'number' ? 'section' : 'div'} id="${course[1]}" 
        class="course" onmouseleave="remove_highlights_normal_mode()" onmouseover="get_and_remove_normal_mode(this)" 
        onclick="get_and_remove_zoom_mode(this)"><div>${course[0]}</div><div>${course[1]}</div>${course[3] ? `<div class="note">
        ${course[3]}</div>`:''}</${typeof(course[course.length - 1]) === 'number' ? 'section' : 'div'}>`;
    }
}
document.getElementById('schedule').innerHTML = str2 + str + '</div>' 
    + document.getElementById('schedule').innerHTML;

document.getElementById('guide').style.gridColumn = `1/${i}`;
if(i > 10) document.getElementsByTagName('html')[0].style.zoom = `${1/(i-.5)}`;
else if(i <= 5) document.getElementById('guide').style.zoom = '.7';

function remove_highlights_normal_mode() { //Remove highlight from items
    if(z < 1.01)
        [...document.getElementsByTagName('div'), ...document.getElementsByTagName('section')].forEach(
            course => {if(/course/.test(course.className)) course.className = 'course'});
}
function get_requirements(me) {
    [...document.getElementsByTagName('div'), ...document.getElementsByTagName('section')].forEach(
        course => {if(/course/.test(course.className)) course.className = 'course transparent'});
    me.className = 'course course_to_get_requisites appear'; //highlight the item
    let direct_requisites = courses.find((course) => course[1] === me.id)[2]; //find direct requisites items
    //highlight direct requisites items
    direct_requisites.forEach(req => {document.getElementById(req).className = 'course direct_requisites appear';});
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
    indirect_requisites.forEach(req => {document.getElementById(req).className = 'course indirect_requisites appear';});
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
    requisite_for.forEach(req => {document.getElementById(req).className = 'course requisite_for appear';});
}
function get_and_remove_normal_mode(me) {
    if(z < 1.01) {
        [...document.getElementsByTagName('div'), ...document.getElementsByTagName('section')].forEach(
            course => {if(/course/.test(course.className)) course.className = 'course'});
        get_requirements(me);
    }
}
function get_and_remove_zoom_mode(me) {
    if(z >= 1.01) {
        [...document.getElementsByTagName('div'), ...document.getElementsByTagName('section')].forEach(
            course => {if(/course/.test(course.className)) course.className = 'course'});
        get_requirements(me);
    }
}
function zoomin() {
    if(z < 2) {
        z = (z+.1)*1.1;
        document.getElementById('schedule').style.zoom = z;
        if(z > 2.2) document.getElementById('magnifier').style.textDecoration = 'line-through';
    } 
    if(z < 1.3) document.getElementById('smagnifier').style.textDecoration = 'none';
}
function zoomout() {
    if(z > 1.2) {
        z = z/1.1 - .1;
        document.getElementById('schedule').style.zoom = z;
        if(z < 1.02) document.getElementById('smagnifier').style.textDecoration = 'line-through';
    } 
    if(z > 1.9) document.getElementById('magnifier').style.textDecoration = 'none';
}