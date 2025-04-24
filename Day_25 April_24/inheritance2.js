// super()
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
var check = /** @class */ (function () {
    function check(para) {
        this.name = para;
    }
    return check;
}());
var check2 = /** @class */ (function (_super) {
    __extends(check2, _super);
    function check2(para, para1) {
        var _this = _super.call(this, para) || this;
        _this.name1 = para1;
        return _this;
    }
    return check2;
}(check));
var k = new check2("RAM", "Sham");
console.log(k);
