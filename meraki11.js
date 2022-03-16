let num=require("readline-sync");
var number1=num.questionInt("enter the number");
var number2=num.questionInt("enter the number")
if (number1>number2){
    console.log("numbere1 is greater than number2");
}
else{
    console.log("number2 is greater than number1");
}