//***ForEach//
//***ForEach//


//forEach is alternative of forloop
let a = ["hridoy", "Etu"]
a.forEach((x)=>{
    document.write(x + "<br/>")
});

//It should be arrow function



let numbers = [1, 2, 3, 4, 5];
numbers.forEach((a)=>
{
    document.write(a+ "<br/>")
})


//***Map//
//***Map//


let mapNumber = [2,4,5,6];
let newMapNumber = mapNumber.map((o)=>
{
    return o*o;
})
document.write(newMapNumber + "<br/>");
console.log(mapNumber);




//**Filter
//**Filter
let numberForFilter = [1,3, 5,6];
let filteredNumber = numberForFilter.filter((u)=>
{
    return u>3
})

document.write("<br/>"+filteredNumber)