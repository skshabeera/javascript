let num=require("readline-sync");
var selection = ['rock', 'paper', 'scissors'];
var randms=selection[Math.floor(Math.random() * selection.length)];
console.log(randms)
var playername=num.question("enter your name");
// console.log(" hi "  +  playername);
// console.log("enter your chioce rock, paper, scissor");
var playerMove=num.question("you want to move  now");
if (playerMove==randms){
   console.log("match draw"); 
}
else if(playerMove=="rock" && randms=="paper"){
    console.log(" computer win");
}
else if (playerMove=="rock"&& randms=="scissors"){
    console.log(playername+"win");
}
else if (playerMove=="paper" && randms=="scissors"){
    console.log("computer win the match");
}
else if (playerMove=="paper" &&  randms=="rock"){
    console.log(playername+" win the match");
}
else if (playerMove=="scissors" && randms=="paper"){
    console.log(playername+"win the match");
}
else if (playerMove=="scissors"&& randms=="rock"){
    console.log(" computer win the match");
}



