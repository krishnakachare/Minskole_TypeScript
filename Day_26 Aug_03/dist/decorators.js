"use strict";
/*
Decorators:

Decorators dells with the classes
Decorators is a special function which can modify : class, property, methods, arug
At time of define

tsconfig.json --> enable for use the decorator -->
                  "experimentalDecorators": true
                  "target": "es5",
                  "ignoreDeprecations": "6.0",

Decorators ---> spectial type of function dell with the class

# Types of decorators:
1. Class
2. Property
3. Method
4. parameter decorator
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. Class decorator/function:
// Defination of decorator:
function fun(para1) {
    console.log("I AM Function");
    console.log(para1);
    console.log(para1.name);
}
// Use of decorator === calling the decorator/function -->  @functionName
var Clss5 = /** @class */ (function () {
    function Clss5() {
        this.keyOne1 = "I Am Property";
    }
    Clss5.prototype.methodOne1 = function () {
        console.log("I Am method");
    };
    Clss5 = __decorate([
        fun
    ], Clss5);
    return Clss5;
}());
// When can use the class ?
// With instance
var objOne1 = new Clss5();
// Object ---> retrive --> update
