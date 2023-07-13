/* 
The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.

window.addEventListener('load', function () {
  // your code goes here
});

*/

window.addEventListener("load", function () {
  console.log("I will run second");
  const img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
});

window.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded I will run first");

  const img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
});


//-------
/*

/*
Событие load срабатывает, когда вся страница загружена, включая все зависимые ресурсы, такие как таблицы стилей и изображения. Это в отличие от события DOMContentLoaded, которое срабатывает сразу после загрузки и анализа DOM-дерева страницы, без ожидания загрузки ресурсов.

window.addEventListener('load', function () {
// ваш код здесь
});

*/
/*
window.addEventListener("load", function () {
console.log("I will run second");
const img = document.querySelector("img");
console.log(img);
console.log(img.width);
});
// Здесь добавляется обработчик события load, который срабатывает после полной загрузки страницы и всех ее зависимых ресурсов. Внутри обработчика выводятся в консоль сообщение "I will run second", затем находится элемент img на странице с помощью метода querySelector и выводятся его значения в консоль, включая ширину (width).

window.addEventListener("DOMContentLoaded", function () {
console.log("DOMContentLoaded I will run first");

const img = document.querySelector("img");
console.log(img);
console.log(img.width);
});
// Здесь добавляется обработчик события DOMContentLoaded, который срабатывает сразу после загрузки и анализа DOM-дерева страницы, без ожидания загрузки всех ресурсов. Внутри обработчика выводится в консоль сообщение "DOMContentLoaded I will run first", затем находится элемент img на странице с помощью метода querySelector и выводятся его значения в консоль, включая ширину (width).
*/
