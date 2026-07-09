/* 

Types Of functions:
1. function Declaration (Named function)
2. function Expression 
3. Arrow function

*/

// 1. function Declaration:
// function funOne(a, b) { //  a = 1, b = 2
//   console.log(a, b);
// }

// funOne(1, 2);

// Type annotation in function:
//  parameterName: typeName

// function funOne(a: number, b: number) {
//   //  a = 1, b = 2
//   console.log(a, b);
// }
// funOne(1, 2);
// funOne("Hi", 2); //  error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

// function retrun type annotation:
// let a = 5
// console.log(a)

// function funTwo(): number {
//   return 5;
// }
// // funTwo();
// console.log(funTwo()); // 5

// function funTwo(): number {
//   return "TS";
// }
// console.log(funTwo()); //- error TS2322: Type 'string' is not assignable to type 'number'.

///

function functionThree(a: number, b: number): number {
  return a + b;
}
functionThree(1, 2);
