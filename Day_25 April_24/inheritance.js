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
    function Father(para1, para2, para3) {
        var _this = _super.call(this, para1, para2) || this;
        _this.fName = para3;
        return _this;
        // this.fLastName = para2;
    }
    Father.prototype.printFullName = function () {
        console.log(this.fName + " " + this.gFLastName);
    };
    return Father;
}(GrandFather));
var father = new Father("RAM", "KK", "Sham");
console.log(father); // Father { gFName: 'RAM', gFLastName: 'KK', fName: 'Sham' }
father.printFullName(); // sham KK
