// 7. unknown : In TypeScript, the unknown type can hold a value that is NOT KNOWN upfront but requires type checking.

// let a: unknown = 100;
// console.log(a);

// Diff bt any & unknown:
// 1.---------------
// let a: unknown;
// let b: number = 5;
// a = "Hi";
// let add = a + b; //  TS2365: Operator '+' cannot be applied to types 'unknown' and 'number'.
// console.log(add);

// 2.----------------------
// let x: unknown = "JS";
// let y: string = "JS";
// console.log(x === y); // true

let p: any = 10;
p = "any";
let q: number = p;
console.log(q); // "any"

let P: unknown = 10;
P = "any";
// P = 100;
let Q: number = P;
console.log(Q); //  error TS2322: Type 'unknown' is not assignable to type 'number'.
