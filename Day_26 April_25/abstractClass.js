// class Abc {
//   namee: string = "TS";
// }
// let a = new Abc();
// console.log(a); // Abc { namee: 'TS' }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract Class:
var Abc = /** @class */ (function () {
    function Abc() {
        this.namee = "TS";
    }
    // Normal method
    Abc.prototype.printName2 = function () {
        console.log("Normal Method " + this.namee);
    };
    return Abc;
}());
// let a = new Abc(); //  error TS2511: Cannot create an instance of an abstract class.
// literal object type
// absract
// interface
// Inheritance
var Abc2 = /** @class */ (function (_super) {
    __extends(Abc2, _super);
    function Abc2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //error TS2515: Non-abstract class 'Abc2' does not implement inherited abstract member printName from class 'Abc'.
    Abc2.prototype.printName = function () {
        console.log(this.namee);
    };
    return Abc2;
}(Abc));
var a = new Abc2();
console.log(a); // Abc2 { namee: 'TS' }
a.printName(); // TS
a.printName2(); // Normal MethodTS
