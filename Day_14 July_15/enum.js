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
// enum enumNum {
//   p = "Hi",
//   q = "TS",
//   r = "JS",
// }
// console.log(enumNum.p); // Hi
// console.log(enumNum.q); // TS
// console.log(enumNum.r); // JS
var enumNum;
(function (enumNum) {
    enumNum["p"] = "Hi";
    enumNum[enumNum["q"] = 10] = "q";
    enumNum["r"] = "JS";
})(enumNum || (enumNum = {}));
console.log(enumNum.p); // Hi
console.log(enumNum.q); // 10
console.log(enumNum.r); // JS
// const a = {
// }
// Diff bt const & enum
