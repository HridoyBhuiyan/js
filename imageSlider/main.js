var photos = ["/images/firstSetup.jpg", "/images/secondSetup.jpg","/images/thirdSetup.jpg"];
var count = 0;
var selectImg = document.getElementById("img--id");

var next = function ()
{
    count++;
    if(count>=photos.length)   
    {
        count = 0;      
        selectImg.src= photos[count];  
    }
    else{
        selectImg.src= photos[count];  
    }    
}

var prev = function()
{
    count--;
    if (count<0) {
        count = photos.length - 1;
        selectImg.src= photos[count];  
    } else {
        selectImg.src= photos[count];  
    }
    
}