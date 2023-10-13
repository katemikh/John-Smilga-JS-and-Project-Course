// call - runs instantly, arguments - list of items
// apply - runs instantly, arguments - array of items
// bind - assign, use later, arguments - list of items
const john = {
  name: 'john',
  age: 24,
};
const susan = {
  name: 'susan',
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
  );
}

// greet.apply(john, ["san diego", "us"]);
// greet.apply(susan, ["san diego", "us"]);
// greet.apply({ name: `petr`, age: 30 }, "san diego", "us");

// greet.call(john, "san diego", "us");
// greet.call(susan, "san diego", "us");
// greet.call({ name: `petr`, age: 30 }, "san diego", "us");

// assign, call it later
const susanGreat = greet.bind(susan, 'toronto', 'ca');
susanGreat();
