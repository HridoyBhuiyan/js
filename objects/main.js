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