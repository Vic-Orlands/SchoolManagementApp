// Declearation of variables
 let ol = document.createElement('span');
 let li = document.createElement('li');
 let div = document.querySelector('.Bscreen');
 ol.className='screen';

 //pulling out the teachers from the local storage
 let Teachers = JSON.parse(localStorage.getItem('Teachers'));

//looping through the teachers picking their names and subjets and displays to the principal
Teachers.forEach(teacher => {
    let s = document.createElement('span')
    let p = document.createElement('p')
    ol.className = 'sp';
    li.className = 'ss'
    p.className = 'pal';
    p.innerHTML ='<button class=\'delb\'>Dismiss</button>';
    s.append(teacher.subject)
    p.append(teacher.name)
    p.append(s)
    li.appendChild(p)
    ol.appendChild(li)
    div.appendChild(ol)
})

//this function deletes a teacher from the dash board and the local storage
let delTe = function (e) {
    Teachers.forEach(teacher=> {
        if(e.target.nextSibling.nodeValue==teacher.name && Teachers.indexOf(teacher)!==-1){
            setTimeout(console.log,500,Teachers)
            Teachers.splice(Teachers.indexOf(teacher),1);
            e.target.parentElement.remove();
        }
        localStorage.setItem('Teachers',JSON.stringify(Teachers));
    })
    
}
div.addEventListener('click',delTe)
