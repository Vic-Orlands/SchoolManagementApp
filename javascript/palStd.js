//declearation of variables
let spi = document.createElement('span');
let button = document.createElement('button');
let ol = document.createElement('span');
let li = document.createElement('li');
let t = document.querySelector('#t');
let div = document.querySelector('.Bscreen');
ol.className='screen';

// pulling out the students fron the localstorage
let Students = JSON.parse(localStorage.getItem('Students'));

//looping through the students picking their naes and classes and displaying it in the principals dashboard
Students.forEach(student => {
    let s = document.createElement('span')
    li.className = 'ss'
    s.className = 'pan'
    let p = document.createElement('p')
    p.className = 'pal';
    p.innerHTML ='<button class=\'delb\'>Expel</button>';
    s.append(student.class)
    p.append(student.name)
    li.appendChild(p)
    p.append(s)
    ol.appendChild(li)
    div.appendChild(ol)
})

//this function deletes a student from the dashboard and local storage
let delTe = function (e) {
    Students.forEach(student=> {
        if(e.target.nextSibling.nodeValue==student.name && Students.indexOf(student)!==-1){
            Students.splice(Students.indexOf(student),1);
            e.target.parentElement.remove();
        }
        localStorage.setItem('Students',JSON.stringify(Students));
    })
    
}
div.addEventListener('click',delTe)
