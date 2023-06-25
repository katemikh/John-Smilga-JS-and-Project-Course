// Arrays, Functions and Objects
// params - when declare/define
// placeholders, local vars
// arguments - when invoke/call/run
// use vars/values, multiple params, undefined

//--------
//function hello() {
  //logic
  //console.log("Hello There Bob");
  //console.log("Hello There Anna");
  //console.log("Hello There Susy");
}
//greet bob
//hello();
//greet ana
//hello();
//greet susy
//hello();
//-----------

const bob = "Bob";
const susy = "Susy";
const anna = "Anna";

//we are passing parametrs name and second to console message 
function greet(name, second) {
  console.log(second);

  console.log("Hello there " + name);
}

// greet bob
//greet(`Bob`);
greet(4);
// greet anna
greet(anna, "Bob"); // showing in the console 2 parametrs
// greet susy
greet("Susy");
