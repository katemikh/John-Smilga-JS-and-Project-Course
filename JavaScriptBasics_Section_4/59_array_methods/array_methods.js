// Array Properties and Methods
let names = ["john", "bobo", "barry", "olga", "ben"];

//length
console.log(names.length);
console.log(names[4]); //get spesific neme 4
console.log(names[names.length - 1]);//LOOKING FOR LAST FRIEND NAME- ALWAYS RETURN THE LAST VALUE

// concat
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames);
// reverse
console.log(allNames.reverse()); //REVERSE THE ARRAY

//unshift
allNames.unshift("susy");// ADD TO THE BEGINNING OF THE ARRAY
allNames.unshift("anna");
console.log(allNames);

//shift // REMOVE THE FIRST ITEM FROM THE ARRAY
allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);
//push - REMOVING ITEAM FROM THE END OF THE ARRAY
allNames.push("susy");
console.log(allNames);
//pop - REMOVE ITEAM FROM THE END OF THE ARRAY
allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
console.log(allNames);
// splice - mutates original array //WE GRAB SPECIFIC ITEM FROM THE ARRAY
const specificNames = allNames.splice(0, 3); // method is looking for starting point, the index and that how many items i want to remove from the original array and place all here
console.log(specificNames);
console.log(allNames);
