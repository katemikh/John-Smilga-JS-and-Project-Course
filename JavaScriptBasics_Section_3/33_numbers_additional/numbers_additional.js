// Numbers
// +=, -=, /=, *=, ++ , --, %
// Modulus (%) operator returns the remainder after integer division

let number = 40;
number += 5;
number += 5;
number += 5;
number += 5;
number += 5;
number -= 5;
number++;
number--;
number--;

const slices = 10;
const children = 4;
//const amount = 10/3;
//console.log(amount); = 3.3333
const amount = slices % children; //we are looking for the remaindor 1 (comes from 3*3=9 => 1 remainder)

const random = 4 + 6 + 10 * 10;
const random2 = (4 + 6 + 10) * 10;
console.log(random);
console.log(random2);

console.log(amount);
