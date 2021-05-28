for (var i = 0; i <3; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function()
{
    var text = this.innerHTML;
    console.log(text);
    playAnimation(text)
    audioPlay(text);
});
}




var audioPlay = function (text)
{
    switch (text) 
    {
        case "A":
            var audio = new Audio("/Audios/A for Apple.mp3");
            audio.play();
            break
// The use of B is mentioned.  I didnt made any object, rather use the class directly.
        case "B":
            new Audio("/Audios/B for Ball.mp3").play()
    }
//This is also possible to using by conditional logic
        if (text=="C") 
        {
            var audio = new Audio ("/Audios/C For Cat.mp3")
            audio.play();
        } 
};




var playAnimation = function(text)
{
    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("anim");
    setTimeout(function(){
        selectedButton.classList.remove("anim");
    }, 1500)
}