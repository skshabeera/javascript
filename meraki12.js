let number=require("readline-sync");
var number2=number.questionInt("enter the number");
if (number2%5==0 && number2%15==0){
    console.log("the number is divisible by both");
}
else{
    console.log("not divisible")
}