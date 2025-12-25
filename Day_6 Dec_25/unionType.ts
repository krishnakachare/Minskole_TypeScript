// Union Type
// can combine multiple data types using | .
// | pipe, or operator

// Syntax: let/var/const variableName: datatype1 | datatype2 = value;

// let p: number = 10;
// console.log(p); // 10
// p = "Hi"; // error TS2322: Type 'string' is not assignable to type 'number'.

let p: number | string = 10; // union type
console.log(p); // 10
p = "Hello";
console.log(p); // "Hello"
