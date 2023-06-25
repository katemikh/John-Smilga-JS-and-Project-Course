function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, cb) {
  const myName = "john";
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet("bobo", morning);
greet("peter", afternoon);

/*
#3
function morning() {
  console.log("Good morning Bob");
  return `Good morning Bob`;
}

function greet(name, cb) {
 
  const myName = "john";
  console.log(`$(name), my name is ${myName}`);
 cb()
}

greet("bobo, morning");
greet("petr, morning");

*/

/*
#2
function greet(name) {
  const myName = "john";
  console.log(`$(name), my name is ${myName}`);
}

greet("bobo");
greet("petr");

*/
/*
#1
function greetMorning(name) {
  const myName = "john";
  console.log(``Good morning $(name), my name is ${myName}`);
}

greetMorning("bobo");

*/

// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback Function - passed to a another function as an an argument and executed inside that function

// function greetMorning(name) {
//   const myName = 'john';
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = 'susan';
//   console.log(`Good afternoon ${name}, my name is ${myName}`);
// }
