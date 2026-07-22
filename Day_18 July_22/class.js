"use strict";
class classThree {
    static key1 = true;
    key2 = "Hi TS";
    key3 = "I am key";
}
console.log(classThree.key1); // true
let obj1 = new classThree();
console.log(obj1.key2); // Hi TS
obj1.key2 = "Hi JS";
console.log(obj1.key2); // Hi JS
console.log(obj1.key3);
