const n = require("readline-sync");
var varx=n.question("enter a number")
var vary=n.question("enter a number")
if (varx%vary==0){
console.log("Divisible");
}
else{
console.log("Not divisible");
}