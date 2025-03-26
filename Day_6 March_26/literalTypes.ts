// let variableName : type
let num: number = 10;

let str: string = "TS";

let flag: boolean = true;

// let variableName : type
// type --> js datatypes
// type --> ! js datatypes ---> TS fetures (TS types)
// type --> values

// 3. Literal type : (type ---> value)
let a: number = 10;
a = 50;
// console.log(a); // can any number

let b: 10 = 10;
// let b: 10 = 50; // error TS2322: Type '50' is not assignable to type '10'.
console.log(b); // 10

let str2: "TS" = "TS";
console.log(str2);
