var ele = document.createElement("h1"); //creating the element
var text = document.createTextNode("Hello Everyone"); //creating the text that passed to the element
ele.appendChild(text); //add the text with the element
ele.setAttribute("class", "hridoy"); //this works to creating and adding attribute
document.getElementById('mydiv').appendChild(ele) //finally appending the child
