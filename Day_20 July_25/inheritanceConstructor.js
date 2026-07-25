"use strict";
class class1 {
    a;
    constructor(para1) {
        this.a = para1;
    }
}
class class2 extends class1 {
    b;
    constructor(para1, para2) {
        super(para1);
        this.b = para2;
    }
}
let obj2 = new class2("Hi", 10);
console.log(obj2.a); // "Hi"
