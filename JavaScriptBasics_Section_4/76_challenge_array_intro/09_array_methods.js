/*
## Array Methods #9

Multiple Videos

#77. Set Up data.js file

#### Create Students Array

1. setup students array with 5 students
  {
  id: 1,
  name: 'peter',
  score: 80,
  favoriteSubject: 'math',
  },

  #78. Array Challenge - Multiple Files

#### Use Multiple Files

- easer to manage code base (file, project)
- order matters
- other ways to achieve the same result (ES6 modules, fetch DB )
- not limited to just static data

#79. Array Challenge - Map

#### updatedStudents

1. add role:'student' property to each object
   using MAP method
2. assign to 'updatedStudents' variable and log

#80. Array Challemge - Filter - get back array
#### highScores

1. filter array and return only scores >= 80
2. assign to 'highScores' variable and log

#82. Array Challege - Find - get back object
difference between filter and find ---get back the object/get back array 
#### specificId

1. find specific id in array
2. assign to 'specificId' variable and log

83. Array Challenge - Reduce#1
#### averageScore

1. sum up all student.score values with reduce
2. divide by the length of the students array
3. assign to 'averageScore' and log

84. Square Bracket Notation 
#### survey

1. list favorite subjects with reduce
   {
   english: 1
   history: 1
   math: 3
   }
2. assign to survey and log
*/


// have access to students from data.js
//#79. Array Challenge - Map
const updatedStudents = students.map(function (student) {
  // console.log(student);
  student.role = "student";
  return student;
});

// console.log(updatedStudents);

//#80. Array Challemge - Filter

const highScores = students.filter(function (student) {
  // if (student.score >= 80) {
  //   return student; //  a value that coerces to true
  // }
  
//function returns undefined by default!!!!

  //81. Array Challenge - Filter Alternative Syntax

  // if (student.score >= 80) return student;
  return student.score >= 80;
});

// console.log(highScores);

//#82. Array Challege - Find - get back object

const specificId = students.find(function (banana) {
  return banana.id === 6;
});

const fruits = ["banana", "orange"];

const random = fruits.find(function (fruit) {
  return fruit === "orange";
});

// console.log(random);
// console.log(specificId);

//83. Array Challenge - Reduce#1

const averageScore =
  students.reduce(function (scoresTotal, student) {
    // console.log(student);
    // console.log(scoresTotal);
    return scoresTotal + student.score;
  }, 0) / students.length;

// console.log(averageScore);

//84. Square Bracket Notation 
const subject = "art";

const total = {};
total[subject] = "some value";
// console.log(total);


//№85. Array Challenege  - Reduce #2

const survey = students.reduce(function (survey, student) {
  // console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

console.log(survey);
