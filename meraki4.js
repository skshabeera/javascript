// var time = 9;
// if (time >= 5 && time <= 6) {
//  console.log("sleep well");
// }
// else if (time >= 6 && time <= 7) {
//  console.log("Morning Exercise");
// }
// else if(time > 7 && time < 8.30){
//  console.log("Break+Breakfast");
// }
// else if ( time > 8.30 && time < 12){
//  console.log("Study");
// }
let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter the second number\n'));
let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);