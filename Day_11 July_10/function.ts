/*
# Types Of functions:
  1. function Declaration (Named function)
  2. function Expression 
  3. Arrow function
*/

// 1. function Declaration (Named function)

/* 
Syntax:
function functionName(para1:type1, para2:type2, ...., paeaN:typeN): returnType{
   Function Defination
}
*/

// function functionThree(a: number, b: number): number {
//   return a + b;
// }
// functionThree(1, 2);

// 2. function Expression

// let a = 10;
// console.log(a); // 10

// let funOne = function (a: number, b: number): number {
//   return a + b;
// };

// let b = funOne(1, 2);
// console.log(b);

// console.log(funOne(1, 2)); // 3

// 3. Arrow function:

// let funOne = (a: number, b: number): number => {
//   return a + b;
// };

// console.log(funOne(1, 2)); // 3

// let variableName: TypeName = value

// let variableName/functionVariable: (a:number, b:number)=> retrunType

// let funOne: (a: number, b: number) => number = (a, b) => {
//   return a + b;
// };

// console.log(funOne(1, 2)); // 3

// Why TS ?
// Dynamic behaviour of JS:
function funOne(a, b) {
  return a + b;
}

// funOne(1, 2); // 3 // output is usable
funOne(1, "Hi"); // 1Hi  // Output is not usable

// Treat: Code executing without error and Not getting the desired output
// Above have JS behaviour but not a TS
