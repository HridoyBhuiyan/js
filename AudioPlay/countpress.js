var counter = 0;

     document.addEventListener("keypress", function(event)
    {
        counter++;
        var text = event.key;
        document.getElementById("my--para").innerHTML= "You have pressed" +text;
        //
        document.getElementById("my--key--counter").innerHTML = "You press" + counter + " times"
    })
    
    
    


