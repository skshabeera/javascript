let number=require("readline-sync");
var number1=number.questionInt("enter the number");
if (number1<1){
    console.log("need to fill water")
}

else if (number1>=1 && number1<=10){
    console.log("no need to fill water")
}
else{
    console.log("water is overflow")
}
