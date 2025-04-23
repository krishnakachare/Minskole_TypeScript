// extend
// class Abc {
//   name: string = "KK";
// }
// let a = new Abc();
// console.log(a.name); // "KK"
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
// class Abc2 extends Abc {
//   // empty
// }
// let a2 = new Abc2();
// console.log(a2.name); // "KK"
// super()
var check = /** @class */ (function () {
    function check(para) {
        this.name = para;
    }
    return check;
}());
var check2 = /** @class */ (function (_super) {
    __extends(check2, _super);
    function check2(para) {
        var _this = this;
        _this.name = para;
        return _this;
    }
    return check2;
}(check));
