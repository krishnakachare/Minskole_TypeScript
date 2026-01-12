/*
enum:

syntax:

enum enumName { const1, const2, ...., constn}

variables holds const value
*/
var enumOne;
(function (enumOne) {
    enumOne[enumOne["a"] = 0] = "a";
    enumOne[enumOne["b"] = 1] = "b";
})(enumOne || (enumOne = {}));
console.log(enumOne); // { '0': 'a', '1': 'b', a: 0, b: 1 }
// objName.keyName
console.log(enumOne.a); // 0
