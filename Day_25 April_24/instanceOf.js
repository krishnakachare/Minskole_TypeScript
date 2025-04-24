// class --. Abc
// object --> a is a instance of class Abc
var Abc = /** @class */ (function () {
    function Abc() {
        this.name = "JS";
    }
    return Abc;
}());
var Abc2 = /** @class */ (function () {
    function Abc2() {
        this.namee = "JS";
    }
    return Abc2;
}());
var a = new Abc();
console.log(a instanceof Abc); // true
console.log(a instanceof Abc2); // false
