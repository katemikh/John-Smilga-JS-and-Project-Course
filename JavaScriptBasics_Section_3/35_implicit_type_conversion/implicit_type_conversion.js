// Implicit Type Conversion / when we supposed to pay attension for adding strings and numbers 

// const name = 'Kateryna';
// const lastName = 'Mikhailiuk';
// const fullName = name + ' ' + lastName; / string concatination
// console.log(fullName); - will be value of both of those strings

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result);

// const value = name - lastName;
// console.log(value); /NaN NOT A NUMBER
// -----------
// number3 = `10`;
// number4 = '23';
// const result2 = number3 - number4;
//console.log(result2); result in console -13 (its a number because is blue but its negatine -13)

// const result2 = number3 + number4;
// console.log(result2); will show 1023 because we are adding the string
//-------------

// let number3 = 10;
// let number4 = 23;
// // 100 lines
// number4 = '23'; EVEN IF 1 STRING AND 2ND IS NUMBER COULD BE AN ERROR AS IT SHOWS 1023
// const result2 = number3 + number4; STRING CONCATINATION
// console.log(result2);

const randomNumber = 13;
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("amount").value;
  value = parseInt(value); //IF WE UNCOMMON THIS CODE EVERYTHING WORK CORRECTLY
  console.log("Input Value Type");
  console.log(value);
  console.log("Sum of Two Values");
  console.log(randomNumber + value);
});
