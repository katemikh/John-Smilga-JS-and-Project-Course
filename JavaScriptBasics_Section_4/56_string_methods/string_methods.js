// String properties and methods
// wrapper String Object, don't memorize methods
let text = " Kateryna Mikhailiuk";
let result = text.length;
console.log(result);

console.log(text.length); //count length of string "Kateryna Mikhailiuk incl spaces"
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0)); //shows specific letter in the string depends on what we want to show up
console.log(text.charAt(text.length - 1)); //get the end letter of the string
console.log(text.indexOf("e")); // gets the character with specific index/in this example letter //js is case censative so it has to be lowwer or upper case
console.log(text);
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith("Kateryna"));
console.log(text.includes("eter"));
console.log(text.slice(0, 2)); //(starts and ends )//gets spesific parts of the string
console.log(text.slice(-3));

/*
const person = {
name: 'Kateryna', // property
greeting() {      //its a function
// method
console.log("Hey, I'm Peter");
},
};

console.log(person);

console.log(person.name);
person.greeting();
*/