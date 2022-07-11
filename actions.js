// zoom parameter to determine what is the zoom size and to select the coures by click not by hover when zoom 
var z = 1; 

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
        document.getElementsByTagName('html')[0].style.fontSize = `${z*9}vw`;
        if(z > 2.2) document.getElementById('magnifier').style.textDecoration = 'line-through';
    } 
    if(z < 1.3) document.getElementById('smagnifier').style.textDecoration = 'none';
}
function zoomout() {
    if(z > 1.2) {
        z = z/1.1 - .1;
        document.getElementsByTagName('html')[0].style.fontSize = `${z*9}vw`;
        if(z < 1.02) document.getElementById('smagnifier').style.textDecoration = 'line-through';
    } 
    if(z > 1.9) document.getElementById('magnifier').style.textDecoration = 'none';
}