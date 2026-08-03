"use strict";
// 2. Property decorator
// Defination of decorator:
function funProperty(para1, para2) {
    console.log("I AM Function");
    console.log(para1);
    console.log(para1.name);
    console.log(para2);
}
var Clss51 = /** @class */ (function () {
    function Clss51() {
        // @funProperty
        this.keyOne1 = "I Am Property";
    }
    Clss51.prototype.methodOne1 = function () {
        console.log("I Am method");
    };
    return Clss51;
}());
