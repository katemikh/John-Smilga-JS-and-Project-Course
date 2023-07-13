// getAttribute();
// setAttribute();

const first = document.querySelector(".first");
const idValue = first.getAttribute("id");
// console.log(idValue);

//#3
const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log(showLink);

//#4
const last = link.nextElementSibling;
last.setAttribute("class", "first");
last.textContent = "i also have a class of first";
console.log(last);

const links = document.querySelectorAll(".first");
console.log(links);


/*
const first = document.querySelector(".first");
//first step
first.getAttribute("class");
//second step 
const classValue = first.getAttribute("class"); 
console.log(classValue); 
or
const idValue = first.getAttribute("id");
console.log(idValue);

const links = document.querySelectorAll(".first");
console.log(links);

*/