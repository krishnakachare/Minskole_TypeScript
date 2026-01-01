// readonly
// let a: readonly [string, boolean] = ["TS", true];
// // push()
// // pop()
// console.log(a, a.length);
// // a.push("TS"); // error TS2339: Property 'push' does not exist on type 'readonly [string, boolean]'.
// a.pop(); // error TS2339: Property 'pop' does not exist on type 'readonly [string, boolean]'.
//------------------------------------------
// optional ?
// let b:[string, boolean] = ["TS"];
// error TS2322: Type '[string]' is not assignable to type '[string, boolean]'.
//   Source has 1 element(s) but target requires 2.
var b = ["TS"];
console.log(b, b.length); // [ 'TS' ] 1
