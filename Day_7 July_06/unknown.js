"use strict";
/*
Premitive type from TS : unknown
*/
// Addition operation (+)
// LHS + RHS --> answer
//  5 + 5 --> 10
// "Hi" + 5 --> Hi5
let s = 5;
let p = 10;
// console.log(s + p); //  error TS18046: 's' is of type 'unknown'.
// console.log(typeof s); // number
// Type checking or type guard:
// if (typeof s === "number") console.log(s + p); // 15
// Type assertion or Type Conversion:
/*
variableName as DatatypeName
<DatatypeName>variableName
*/
// let c = <number>s;
let c = s;
console.log(c + p);
