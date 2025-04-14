var a = 10;
console.log(a); // 10
// 1. variable declaration with var, why ?
// why TS ?
// Type restrict
// Capture compile error --> .ts --> error code ---> compile error --> no execution
// let b: number = 20;
// console.log("b:", b); // b: 20
var b = 20;
b = "Hi TS"; // error TS2322: Type 'string' is not assignable to type 'number'.
console.log("b:", b); // b: Hi TS
// Compile error code able to execute, Why?  Its violation of TypeScript
