function Person() {
    this.fName = "f Name";
    this.lname = "l Name";
}
Person.prototype.fullName = function () {
    return this.fName + ' ' + this.lname;
}
let p1 = new Person();

p1.__proto__.getFullName = function () {
    return this.fName + ' ' + this.lname;
}

let p2 = new Person();

function demoFn() {

}

var arr = [1, 2, 3];
var str = "deepak";
//Function me prototype
//getPrototype setPrototyp
