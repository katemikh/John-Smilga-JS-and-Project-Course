// Arrays, Functions and Objects
// Objects - key/value pairs  methods
// dot notation

//щиоусеы шт оы шы сщддусешщт ща зкщзукешуы
const person = {
  name: "Kateryna",
  lastName: "Mikhailiuk",
  age: 41,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  //greeting: function () { its a method
// console.log(`hello my name is Kateryna  );
  //}
  greeting() {
    console.log("Hello my name is JOHN");
  },
};

const age = person.age;
console.log(age);
person.name = "bob";
console.log(person.name);
console.log(person.siblings[2]);
person.greeting();
