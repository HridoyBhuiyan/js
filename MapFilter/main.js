//forEach is alternative of forloop
let a = ["hridoy", "Etu"]
a.forEach(testfun);

function testfun(x) //Callbackfunction should always normal
{
    document.write(x)
}


let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(a)
{
    document.write(a)
})