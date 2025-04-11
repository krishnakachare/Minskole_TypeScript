// 1. intersection: &

// 2. type assertion :

// let a : number = 10; // type annotation
// Inferance:
// Guess ---> infert
// let a = 10;

// 1. Infert
// 2. annotate

// let b = "Hi";
// let b: number = "Hi"; //  error TS2322: Type 'string' is not assignable to type 'number'.
// let bb: number = 10;

// Type Assertion:  Type conversion

/* 
variableName as type
<type> variableName
*/

// let p: number = 10;

// p as number;
// p as string; // error TS2352: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

// every type --> not convert

// Where we can use it ?

// unknown :

let z: unknown = 10;
// 1. infert => 10
// 2. annotate => unknown

// console.log(z + 2); // error TS2365: Operator '+' cannot be applied to types 'unknown' and '2'.

let y = z as number;
console.log(y + 2); // 12

// Not much use
// let x = <number>z;
// console.log(x + 2); // 12
