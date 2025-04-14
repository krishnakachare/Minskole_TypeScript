/*
 function overriding:
different class, same method, different signature
*/
// function add(a: mixType, b: mixType): mixType {
//   return a + b; // error TS2365: Operator '+' cannot be applied to types 'mixType' and 'mixType'.
// }
// add(1, 1);
function add(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    if (typeof a === "string" && typeof b === "string")
        return "".concat(a, " ").concat(b);
}
// console.log(add(1, 1)); // 2
console.log(add("Hi", "TS")); // Hi TS
// same class, same method, different signature
