//getElementByID
var ans1 = "Yes i will";
document.getElementById("ban--h1").innerHTML = "I love Bangladesh";
document.getElementById("ban--h2").innerHTML = ans1;
var ban = function (){
    document.getElementById("ban--city").innerHTML="Dhaka, Syhlet, CTG, Khulna and others";
}
var historicalDate = function ()
{
    document.getElementById("historical--date").innerHTML="Those are the historical date";
}

//Queryselector
var myself = function ()
{
    document.querySelector("#mySelf").innerHTML = "I am a progammar too!"
}

var mySelf1 = function ()
{
    for (let i = 0; i <=7; i++) {
        document.querySelectorAll("#my--self--1 > p")[i].innerHTML = "I Want to become a good programmer";
    }   
}


