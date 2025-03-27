// 6. any
// let variableName : type
// type ---> any

// any can hold any datatype
let a: any = 10;
a = "Hi";
a = true;
// a = {};
console.log(a);

/* 
with any TS is like JS --> Dynamically typed
As per the TS best practises, avoid use of any
*/
