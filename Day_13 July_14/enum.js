"use strict";
/*
enum:
syntax:

enum enumVaribleName { constant1, constant2}

Type of enums:
1. number enum (Default)
2. string
3. Hetro (number, string)

*/
var enumOne;
(function (enumOne) {
    enumOne[enumOne["a"] = 0] = "a";
    enumOne[enumOne["b"] = 1] = "b";
    enumOne[enumOne["c"] = 2] = "c";
})(enumOne || (enumOne = {}));
console.log(enumOne.a); // 0
console.log(enumOne.b); // 1
console.log(enumOne.c); // 2
// eunm are constant
// enumOne.a = 100; // error TS2540: Cannot assign to 'a' because it is a read-only property.
// console.log(enumOne.a);
var enumNum;
(function (enumNum) {
    enumNum[enumNum["a"] = 100] = "a";
    enumNum[enumNum["b"] = 101] = "b";
    enumNum[enumNum["c"] = 102] = "c";
})(enumNum || (enumNum = {}));
console.log(enumNum.a); // 100
console.log(enumNum.b); // 101
console.log(enumNum.c); // 102
