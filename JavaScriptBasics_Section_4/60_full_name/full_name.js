// Arrays and for loop

const names = ["anna", "susy", "bob"];
const lastName = "shakeandbake";
let newArray = [];

//for loop
for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  //newArray.push(names[i]);
  //#1
  //newArray.push(`${names[i]} ${lastName}`);
 //#2
  const fullName = `${names[i]} ${lastName}`;
  newArray.push(fullName);
}

console.log(names);
console.log(newArray);
