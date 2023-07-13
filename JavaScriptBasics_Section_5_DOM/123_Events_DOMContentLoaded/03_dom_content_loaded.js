/* 
The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

window.addEventListener('DOMContentLoaded', function () {
  // your code goes here
});

document.addEventListener....

*/
/* case when it make difference when we put stript tag under title
 const heading = document.querySelector("h1");
 console.log(heading);
 heading.style.color = "red";
*/
//correct
window.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector("h1");
  console.log(heading);
  heading.style.color = "red";
});

/*
/*
Событие DOMContentLoaded срабатывает, когда исходный HTML-документ полностью загружен и проанализирован, без ожидания загрузки таблиц стилей, изображений и вложенных фреймов.

window.addEventListener('DOMContentLoaded', function () {
// ваш код здесь
});

document.addEventListener....

*/
// В данном комментарии объясняется, что событие DOMContentLoaded происходит после полной загрузки и анализа HTML-документа, без ожидания загрузки таблиц стилей, изображений и вложенных фреймов.

/* Случай, когда размещение тега script под заголовком имеет значение
const heading = document.querySelector("h1");
console.log(heading);
heading.style.color = "red";
*/
// В этом случае, код создает переменную heading, которая ссылается на первый найденный элемент h1 на странице. Затем выводится значение этой переменной в консоль. После этого, цвет текста заголовка устанавливается на красный.

// Правильно
//window.addEventListener("DOMContentLoaded", function () {
//const heading = document.querySelector("h1");
//console.log(heading);
//heading.style.color = "red";
//});
//В этом коде добавляется обработчик события DOMContentLoaded, который срабатывает после полной загрузки и анализа HTML-документа. Внутри обработчика определена переменная heading, которая ссылается на первый найденный элемент h1 на странице. Затем значение этой переменной выводится в консоль. После этого, цвет текста заголовка устанавливается на красный.
