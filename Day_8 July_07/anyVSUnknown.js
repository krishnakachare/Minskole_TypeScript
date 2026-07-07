"use strict";
/*
any --> TS type
can hold any value
can use in script

No any restriction === Dynamically typed like JS
*/
let y = 10;
// y = "HI";
let x = 50;
console.log(x + y); // 60
/*
unknow ---> TS type
can hold any value


*/
// let yy: unknown = 10;
// let xx: number = 10;
// console.log(xx + yy);
/*
undefined

datatype : undefined
value: undefined
*/
let vv = null; // - error TS2322: Type 'null' is not assignable to type 'undefined'.
