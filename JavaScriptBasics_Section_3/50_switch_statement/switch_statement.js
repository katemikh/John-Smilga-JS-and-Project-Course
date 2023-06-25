// Switch
// dice values : 1 - 6

const dice = 3;

switch (dice) {
  case 1:
    console.log("you got one");
    break;
  case 2:
    console.log("you got two");
    break;
  case 3:
    console.log("you got three");
    break;
  default:
    console.log("you did not roll the dice");
}

// #2 - else if
// if (dice === 1) {
//   console.log('you got one');
// } else if (dice === 2) {
//   console.log('you got two');
// } else {
//   console.log('you did not roll the dice');
// }

// #1 - all if
// if (dice === 1) {
//   console.log('you got one');
// }
// if (dice === 2) {
//   console.log('you got two');
// }
// if (dice < 1 || dice > 6) {
//   console.log('you did not roll the dice');
// }

/*
#2 - else if 
const dice = 1;

if (dice === 1) {
console.log('you got one');
}
else if (dice === 2) {
console.log('you got two');
}

else (dice < 1 || dice > 6) {
console.log('you did not roll the dice');
}
*/




/*
#1 - all if 
const dice = 1;

if (dice === 1) {
console.log('you got one');
}
 if (dice === 2) {
console.log('you got two');
}

if (dice < 1 || dice > 6) {
console.log('you did not roll the dice');
}
*/