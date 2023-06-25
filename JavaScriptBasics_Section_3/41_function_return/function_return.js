// Arrays, Functions and Objects
// return
// default undefined, shortcuts, ignores after
// 1 inch 2.54cm
//-----------------

/* 

#0
function calculate(value) {
  console.log(`The value in cm is : `+ (value * 2.54 + ` cm`) );
}

const width = 0;
const height = 0;

const dimensions = [width, height];
console.log(dimensions);
*/
/*
#1
const wallHeight = 80;

function calculate(value) {
  console.log(`The value in cm is : `+ (value * 2.54 + ` cm`) );
}

const width = calculate(100);
const height = calculate (wallHeight);

const dimensions = [width, height];
console.log(dimensions);

All functions bt default 
are going to return undefined


*/

// How we can set us the return?!
/*
#2
const wallHeight = 80;

function calculate(value) {
//const newValue = value * 2.54;

//return newValue;
return value * 2.54;
}


const width = calculate(100);
const height = calculate (wallHeight);
const dimensions = [width, height];
console.log(dimensions);
*/


//console.log(`The value in cm is : `+(value * 2.54 + ` cm`) );
//instead above return(newValue);console.log(`The value in cm is : `+(value * 2.54 + ` cm`) );
//instead above return(newValue);







//-----------------
const wallHeight = 80;

function calculate(value) {
  // const newValue = value * 2.54;
  return value * 2.54;
    console.log("hello");
    console.log("hello");
    console.log("hello");
}

calculate(200);
const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
