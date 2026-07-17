"use strict";
/*
interface for the class:

blueprint, mold, structure

Diff bt class & interface

*/
class classOne {
    keyOne = 10;
    //   keyOne = "HI"; // " Type 'string' is not assignable to type 'number'."
    methodOne() {
        console.log("I am method");
    }
}
let obj = new classOne();
console.log(obj.keyOne); // 10
