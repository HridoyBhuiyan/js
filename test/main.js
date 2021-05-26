var Student = function (name, age, roll)
{
    this.naam = name;
    this.boyosh = age;
    this.rul = roll;
    this.total = function ()
    {
        console.log(this.naam);
        console.log(this.boyosh);
        console.log(this.rul);
    }
}
var student1 = new Student("Hridoy", 32, 43);
student1.total();