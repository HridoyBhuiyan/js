var loseNumber = 0;
var wonNumber = 0;
for (var i =0; i <5; i++) 
{
    var guessNumber = parseInt( prompt("give me the number"));
    var randomNumber = Math.random() * 5;
    var randomNumber = Math.round(randomNumber);
    if (guessNumber == randomNumber){
        console.log("You have won!")   
        wonNumber ++;
        console.log("total won " + wonNumber)    
    }
    else{
        console.log("you have lose");
        loseNumber ++;
        console.log("Total Lose "+ loseNumber);
    }
    
}


if (wonNumber>loseNumber) {
    document.write("you are the winner !");
}
else if(wonNumber==loseNumber)
{
    document.write("This game gonna draw");
}
else {
    document.write("you are a looser!");
}