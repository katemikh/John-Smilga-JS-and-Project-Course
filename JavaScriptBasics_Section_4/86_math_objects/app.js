// Math
// Standard built-in objects - always available

// const number = 4.56789; ---rounding the number
// const result = Math.floor(number);
// const result = Math.floor(8.9999); - in console will be 8 

// const number = 4.12222; 
// const result = Math.ceil(number);
// const result = Math.ceil(number); - in console will be 5

// const number = 89;
// const result = Math.sqrt(number); --- Square root - in console will be 9.43398....

// const result = Math.PI;  -- in console pie value is 3.1415...
// const result = Math.min(4, 5, 6, 7, 9); - return min number , will show in console 4
// const result = Math.max(4, 5, 6, 7, 9, 100, 200, 1000); - return max number , will show in console 1000

//const result = Math.random(); - in console will be 0.96158....it never going to be 1 but will be random number before 1 
//const result = Math.random() * 10 ;
//const result = Math.floor(Math.random() * 10); //- remove decimals and starts from 0



const result = Math.floor(Math.random() * 10 + 1); 
// or const result = Math.ceil(Math.random() * 10); 

console.log(result);
