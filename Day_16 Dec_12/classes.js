// class in js ?
// can implements multipal interface with the comma
var classOne = /** @class */ (function () {
    function classOne(para1, para2) {
        this.namee = para1;
        this.age = para2;
    }
    classOne.prototype.printMethod = function () {
        console.log(this.namee);
    };
    return classOne;
}());
var obj = new classOne("TS", 10);
console.log(obj);
obj.printMethod();
/*
classOne { namee: 'TS', age: 10 }
TS
*/
