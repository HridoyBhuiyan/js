//way 1
var myVar = document.querySelector("p");
myVar.addEventListener("mouseover",function()
{
    myVar.className = ("text--style");
}
)

myVar.addEventListener("mouseout", function()
{
    myVar.className = (" ");
})

//way 2

var myGreen = document.querySelector("div");

myGreen.addEventListener("mouseover", function()
{
    myGreen.classList.add("div--style");
})

myGreen.addEventListener("mouseout", function()
{
    myGreen.classList.remove("div--style");
})

// multiple element  (does not understand the loop formula)

for (var i = 0; i <= 2; i++) {
            document.querySelectorAll(".btn")[i].addEventListener("click", function()
        {
            var btnText = this.innerHTML;
            document.getElementById("myP").innerHTML= btnText + " changed"
        })  
}