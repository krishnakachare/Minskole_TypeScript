// null
// js --> object, null
// null --> value

// console.log(typeof null); // object

// let a;
// console.log(a); // undefined
// // empty value --> undefined

let a = null;
console.log(a); // null
// empty value --> null

// == vs ===
// value check (==)
console.log(null == undefined); // true
// value+datatype check (===)
console.log(null === undefined); // false

// type --> null
// let p: null = true; //  error TS2322: Type 'true' is not assignable to type 'null'.
let q: null = null;
console.log(q); // null
