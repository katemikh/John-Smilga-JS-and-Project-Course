/* 
setTimeout - runs function once after specific time

- pass function reference 
- duration in ms (1000 ms = 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearTimeout to cancel
*/

function sayHello() {
  console.log("hello john");
}

// setTimeout(sayHello, 1000);

// will not work
// setTimeout(sayHello(), 3000);

// alternative approach, especially with ES6 arrow functions
// setTimeout(function () {
//   console.log(`hello john`);
// }, 3000);

// pass arguments

function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

// setTimeout(showScore, 3000, 'john', 34);

const firstID = setTimeout(showScore, 3000, "john", 34);
const secondID = setTimeout(showScore, 3000, "peter", 88);
console.log(firstID);
console.log(secondID);

clearTimeout(firstID);

/*!!!!!!!!!!!


function sayHello() {
console.log("hello john");
}
// Объявление функции sayHello, которая выводит в консоль сообщение "hello john".

// setTimeout(sayHello, 1000);
// Запуск функции sayHello через 1 секунду с помощью setTimeout.

// Не будет работать
// setTimeout(sayHello(), 3000);
// Неверный синтаксис. Функция sayHello вызывается сразу, а не через 3 секунды.

// Альтернативный подход, особенно с использованием стрелочных функций ES6
// setTimeout(function () {
// console.log(hello john);
// }, 3000);
// Использование анонимной функции внутри setTimeout для вывода сообщения "hello john" через 3 секунды.

// Передача аргументов

function showScore(name, score) {
console.log(hello ${name}, your score is ${score});
}
// Объявление функции showScore, которая выводит в консоль сообщение с именем и результатом.

// setTimeout(showScore, 3000, 'john', 34);
// Запуск функции showScore через 3 секунды, передавая аргументы 'john' и 34.

const firstID = setTimeout(showScore, 3000, "john", 34);
const secondID = setTimeout(showScore, 3000, "peter", 88);
console.log(firstID);
console.log(secondID);
// Присвоение идентификаторов первому и второму setTimeout для возможности их отмены с помощью clearTimeout.
// Вывод идентификаторов в консоль.

clearTimeout(firstID);
// Отмена выполнения setTimeout с идентификатором firstID с помощью clearTimeout.

*/