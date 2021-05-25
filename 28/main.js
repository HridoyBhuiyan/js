var myArray = ["hridoy", "etu", "uday"];
myArray.unshift("noor Udding");
console.log (myArray);
myArray.splice(3, 0,"Fahmida", "Alamin");
console.log(myArray);
myArray.splice(4,2);
console.log(myArray);

let nextArray = ["Noor", "Hridoy", "Fahmida", "Etu"];
nextArray.sort();
nextArray.reverse();
console.log(nextArray);

let number = [4, 5, 10, 1, 9, 7, 8];
number.sort(
    function(a, b)
    {
        return a -b;
    }
)
console.log(number);
let newNumb = number.reverse();
console.log(newNumb);