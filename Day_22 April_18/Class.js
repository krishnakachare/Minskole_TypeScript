//Class:
// class className {
//     // Properties
//     // methods
// }
// class abc {
//   name = "TS";
// }
// // create instance:
// let a = new abc();
// console.log(a);
var abc2 = /** @class */ (function () {
    function abc2() {
        this.name = "TS";
    }
    abc2.prototype.printName = function () {
        console.log("My Name is ".concat(this.name));
    };
    return abc2;
}());
// create instance:
var a2 = new abc2();
console.log(a2);
a2.printName();
