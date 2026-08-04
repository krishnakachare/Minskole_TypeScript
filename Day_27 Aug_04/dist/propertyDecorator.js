"use strict";
// 2. Property decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Defination of decorator:
function funProperty(para1, para2) {
    console.log("I AM Function");
    console.log(para1);
    console.log(para2); // keyOne1
}
var Clss51 = /** @class */ (function () {
    function Clss51() {
        this.keyOne1 = "I Am Property";
    }
    Clss51.prototype.methodOne1 = function () {
        console.log("I Am method");
    };
    __decorate([
        funProperty
    ], Clss51.prototype, "keyOne1", void 0);
    return Clss51;
}());
