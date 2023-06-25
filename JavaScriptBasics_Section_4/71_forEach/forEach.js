// forEach
// does not return new array

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}

// people.forEach(showPerson);

//we do not invoke this function!! we just have 2 options how we can pass in the callback function
people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});

/*
const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
];

function showPerson(person) {
  console.log(person);
  
  //console.log(item.position.toUpperCase());
}


//people.forEach
//people.forEach(showPerson);
*/