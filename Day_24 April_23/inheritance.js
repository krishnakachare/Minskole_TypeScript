/*
class inheritance: extends, super()

GrandFather
  |
Father
  |
Son
*/
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
// Everything is object
// let str = "string" //
// let str = String ("string")
// let obj = {
// }
// let arr = [1, 2, 4]; // array ---> object
// Array.isArray()
// let arr = {
//     push(){
//     }
// }
// arr.push()
// arr.push(5)
// Object.keys()
/*
Object
|
Array
|
litral type (array literal)
*/
var GrandFather = /** @class */ (function () {
    function GrandFather(para1, para2) {
        this.gFName = para1;
        this.gFLastName = para2;
    }
    GrandFather.prototype.printFullName = function () {
        console.log(this.gFName + " " + this.gFLastName);
    };
    return GrandFather;
}());
var grandFather = new GrandFather("RAM", "KK");
console.log(grandFather); // GrandFather { gFName: 'RAM', gFLastName: 'KK' }
grandFather.printFullName(); // RAM KK
var Father = /** @class */ (function (_super) {
    __extends(Father, _super);
    //   fLastName: string;
    function Father(para1, para2) {
        var _this = this;
        _this.fName = para1;
        return _this;
        // this.fLastName = para2;
    }
    Father.prototype.printFullName = function () {
        console.log(this.fName + " " + this.fLastName);
    };
    return Father;
}(GrandFather));
var father = new Father("sham", "KK");
console.log(father); // Father { fName: 'sham', fLastName: 'KK' }
father.printFullName(); // sham KK
