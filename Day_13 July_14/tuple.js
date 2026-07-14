"use strict";
// Array syntax:
// let arrayName: (typeName1 | typeName2)[] = []
// Tuple syntax:
// let arrayName: [type1, type2, ..., typeN] = [value1, value2, ..., valueN]
let arr3 = [10, true, "Hi"];
// let arr4: [number, boolean, string] = [10, true, "Hi", 10];
// Type '[number, true, string, number]' is not assignable to type '[number, boolean, string]'. Source has 4 element(s) but target allows only 3.
// let arr4: [number, boolean, string] = [10, true, 10]; // error TS2322: Type 'number' is not assignable to type 'string'.
// push() :
// let arr5: [number, boolean, string] = [10, true, "Hi"];
// console.table(arr5); // [10, true, "Hi"];
// arr5.push(100);
// console.table(arr5); // [10, true, "Hi", 100];
// readonly
let arr6 = [10, true, "Hi"];
console.table(arr6); // [10, true, "Hi"];
// CURD
arr6.push(100); // error TS2339: Property 'push' does not exist on type 'readonly [number, boolean, string]'.
