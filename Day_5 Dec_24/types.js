/*
# Types in TypeScript:
    1. Primitive(immutable): string, number, boolean, undefined, null, never, unknown, void
    2. Special datatype: any
    3. Non-Primitive(mutable, user defined): array, object, class, function, tuple, enum, interface
 */
// Type annotation
// Syntax: let/var/const variableName: datatype = value;
// string datatype
// let variable1: string = "Hi";
// console.log(variable1); // "Hi"
// String in js --> ' ', " ", ``
// variable1 = true; // error TS2322: Type 'boolean' is not assignable to type 'string'.
// number datatype:  whole, decimal, 0, -ve, +ve
// let variable2: number = 100;
// console.log(variable2); // 100
// variable2 = 12.34;
// console.log(variable2); // 12.34
// tsc filename.ts -w
// tsc filename.ts --watch
// variable2 = 0;
// console.log(variable2); // 0
// number datatype with type inferance:
// let variable3 = 40;
// console.log(variable3); // 456
// variable3 = "Hi"; //  error TS2322: Type 'string' is not assignable to type 'number'.
// console.log(variable3);
// boolean datatype
// let variable4: boolean = true;
// console.log(variable4); // true
// variable4 = false;
// console.log(variable4); // false
// any datatype
var variable5 = "Hello";
console.log(variable5); // "Hello"
variable5 = 123;
console.log(variable5); // 123
variable5 = true;
console.log(variable5); // true
// TS advantage: type restriction
// any type use 
