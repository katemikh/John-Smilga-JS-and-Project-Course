// JSON.stringify(), JSON.parse
/*
const friends = ["john", "peter", "bob"];
localStorage.setItem("friends", JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[2]);

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}
console.log(fruits);
// fruits.push('apple');
fruits.push("orange");
localStorage.setItem("fruits", JSON.stringify(fruits));
*/

// JSON.stringify(), JSON.parse
// Функции JSON.stringify() и JSON.parse

const friends = ["john", "peter", "bob"];
localStorage.setItem("friends", JSON.stringify(friends));
// Создание массива "friends" с элементами "john", "peter", "bob" и сохранение его в локальном хранилище после преобразования в строку JSON.

const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[2]);
// Получение значения из локального хранилища по ключу "friends" и преобразование его из строки JSON обратно в массив. Вывод третьего элемента массива в консоль.

let fruits;

if (localStorage.getItem("fruits")) {
fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
fruits = [];
}
console.log(fruits);
// Проверка, есть ли значение в локальном хранилище по ключу "fruits". Если значение существует, оно преобразуется из строки JSON в массив. Если значение не существует, создается пустой массив. Вывод массива в консоль.

fruits.push("orange");
localStorage.setItem("fruits", JSON.stringify(fruits));
// Добавление элемента "orange" в массив "fruits" и сохранение обновленного массива в локальном хранилище после преобразования в строку JSON.