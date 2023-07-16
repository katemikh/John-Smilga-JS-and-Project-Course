//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
    //console.log(e.currentTarget);
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });

/*

const questions = document.querySelectorAll(".question");

Выбор всех элементов с классом "question" и сохранение их в переменной questions. Это использует селекторы внутри элемента для поиска нужных элементов.
questions.forEach(function (question) { ... });

Перебор каждого элемента в массиве questions с помощью метода forEach. Каждый элемент называется question.
const btn = question.querySelector(".question-btn");

Поиск кнопки с классом "question-btn" внутри текущего элемента question и сохранение её в переменной btn. Это также использует селекторы внутри элемента.
btn.addEventListener("click", function () { ... });

Добавление слушателя события "click" к кнопке btn. Когда кнопка будет кликнута, будет выполнена функция внутри.
questions.forEach(function (item) { ... });

Внутри функции обработчика события "click" кнопки, проход по каждому элементу в массиве questions с помощью метода forEach. Каждый элемент называется item.
if (item !== question) { item.classList.remove("show-text"); }

Проверка, является ли текущий элемент item разным от текущего элемента question. Если это так, то удаляется класс "show-text" у элемента item.
question.classList.toggle("show-text");

Переключение класса "show-text" у текущего элемента question. Если класс уже присутствует, он будет удален, а если отсутствует, то будет добавлен.
*/