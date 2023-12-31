// Variable Lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
  // const globalNumber = 20;
  const result = num1 + num2 + globalNumber;
  function multiply() {
    // const globalNumber = 100;
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  console.log(multiplyResult);

  multiply();
  return result;
}

console.log(add(3, 4));

/*
#3
js starts with local scope and then to global scope!!!

const globalNumber = 5;

function add(num1, num2) {
  const globalNumber = 20;
  const result = num1 + num2 + globalNumberOne; - we get error/ because you dont have this reference in local or global scope
return result
}

console.log(add(3, 4));

*/
/*
#2

const globalNumber = 5;

function add(num1, num2) {
  const result = num1 + num2 + globalNumberOne; - we get error/ because you dont have this reference in local or global scope
return result
}

console.log(add(3, 4));

*/

/*
#1
const globalNumber = 5;

function add(num1, num2) {
  const result = num1 + num2 + globalNumber;
return result
}

console.log(add(3, 4));
*/