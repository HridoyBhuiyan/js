//setting up alert
var date = new Date();
var timeNow = function ()
{
    var time = alert(date);
    document.querySelector("#time--now").innerHTML = time;
}
//setting up text to differnt paragraph
var myAdvice = "Time and Tide wait for none ";
var anAdvice = function ()
{
    document.getElementById("an--advice").innerHTML = myAdvice;
}

var clockImage = function ()
{
    document.getElementById("my--img").src = "image/clock.jpg"
}
const adviceImage = function ()
{
    document.getElementById("my--img").src = "image/advice.png"
}