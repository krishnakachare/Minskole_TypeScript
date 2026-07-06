/* 
Premitive type from TS : unknown
*/

// Addition operation (+)
// LHS + RHS --> answer
//  5 + 5 --> 10

// "Hi" + 5 --> Hi5

let s: unknown = 5;
let p: number = 10;

// console.log(s + p); //  error TS18046: 's' is of type 'unknown'.

// console.log(typeof s); // number

// Type checking or type guard:
// if (typeof s === "number") console.log(s + p); // 15
