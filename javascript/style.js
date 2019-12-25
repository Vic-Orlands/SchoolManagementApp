// use strict is used to make old javascript syntaxes to modern day syntaxes...i.e ES5 to ES6
"Use strict"

//function declared to toggle dropdown @ responsiveness of homepage
function Open() {
    let menulist = document.querySelectorAll(".hello");
    menulist.forEach(menulist => {
        menulist.classList.toggle("appear");
    });
    let menlist = document.querySelectorAll(".section-heading1");
    menlist.forEach(menlist => {
        menlist.classList.toggle("hel");
    });
}

//Onclick of the menu icon in the webpage, the dropdown function is called
document.querySelector(".menu").addEventListener("click", Open);