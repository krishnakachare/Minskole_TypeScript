"use strict";
// class in js ?
// interface in ts ?
// can implements multipal interface with the comma
class classOne {
    constructor(para1, para2) {
        this.namee = para1;
        this.age = para2;
    }
    printMethod() {
        console.log(this.namee);
    }
}
let obj = new classOne("TS", 10);
console.log(obj);
obj.printMethod();
/*
classOne { namee: 'TS', age: 10 }
TS
*/
