"use strict";
/* Factory decorator:
    - Can pass custom arguments
    - Can able to return function
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Defination of decorator:
function outerFun(para1) {
    return function innerFun(para2) {
        console.log("I AM Function");
        console.log(para1); // MyParameter
        console.log(para2);
        console.log(para2.name); // Class5
    };
}
// function calling --> functionName()
var Clss5 = /** @class */ (function () {
    function Clss5() {
        this.keyOne1 = "I Am Property";
    }
    Clss5.prototype.methodOne1 = function () {
        console.log("I Am method");
    };
    Clss5 = __decorate([
        outerFun("MyParameter")
    ], Clss5);
    return Clss5;
}());
