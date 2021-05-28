//object
var subject = {
    name : "CSE 101",
    topicNumber : 20,
    topics : ["fundamental", "advance", "medium"],
    announc : function ()
    {
        console.log("hello, you are here to learning the CSE 101")
    }
}

console.log(subject.name);
//constructor

var Subject = function (subName, subTopicNumber, subTopics, subAnnounce)
{
    this.subName=subName;
    this.subTopicNumber = subTopicNumber;
    this.subTopics = subTopics;
    this.subAnnounce = subAnnounce;

    this.display = function ()
    {
        console.log(this.subName);
        console.log(this.subTopicNumber);
        console.log(this.subTopics);
        console.log(this.subAnnounce);
    }
}

var subject1 = new Subject ("cse 102", 19, ["fundamental", "coding", "mathmatical"],"Be attentive with your lesson");
var subject2 = new Subject ("cse 302", 18, ["basic", "graph", "analysis"],"This is the way of CSE 302");
var subject3 = new Subject ("cse 105", 21, ["root", "program making", "mathmatical"],"Are you ready for next?");

subject1.display();

//constructor second example

var People = function(name, age, weight){
    this.naam = name;
    this.boyosh = age ; 
    this.ozon = weight;
    this.display = function()
    {
        console.log(this.naam);
        console.log(this.boyosh);
        console.log(this.ozon);
    }
}

let people1 = new People("Hridoy", 27, 70);
let people2 = new People("Mesbah", 26, 60);
people1.display();
people2.display();


// adding method in objects out of objects

var test = {
    subject: "bangla",
    testAnnoucment : function()
    {
        console.log("be attentive on exam");
    }
}

test.testAnnoucment();

test.nextAnnouncment = function()
{
    console.log("Failed people will not allowed");
}

test.nextAnnouncment()