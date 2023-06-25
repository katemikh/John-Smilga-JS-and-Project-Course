// Truthy and Falsy
// "",'',``,0 ,-0 ,NaN ,false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

const text = "";

if (text) {
  console.log("hey the value Truthy");
} else {
  console.log("hey the value Falsy"); /* !!!*/
}

/*
#3

const bool1 = true;
const bool2 = 2 > 1;

const text = "petr";

if (text) {
  console.log("hey the value Truthy"); !!!!
} else {
  console.log("hey the value Falsy");
}

*/

/*
#2

const bool1 = true;
const bool2 = 2 > 1;

 if (bool1) {
   console.log(`Hey it works!`);
 }
 if (bool2) {
   console.log(`Hey it also works!`);
 }
*/

/*
#1

const bool1 = true;
const bool2 = 2 > 1;

 if (true) {
   console.log(`Hey it works!`);
 }
 if (2>1) {
   console.log(`Hey it also works!`);
 }
 */