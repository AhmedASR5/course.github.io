document.getElementById('title').innerHTML = title;
document.getElementById('link').children[0].innerHTML = link_title;
document.getElementById('link').children[0].href = url;
document.getElementById('link').title = link_more_info;

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

document.getElementsByTagName('html')[0].style.transform = `scale(${1.1/i})`;
document.getElementsByTagName('body')[0].style.left = `-${(i*22.5 - 33.5)*2}%`;
document.getElementById('guide').style.gridColumn = `1/${i}`;
document.getElementById('guide').style.fontSize = `${i/11}rem`;