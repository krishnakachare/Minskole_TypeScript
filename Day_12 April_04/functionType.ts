// Function

// let variableName : Type

let fun: Function;

// fun = 10; //  error TS2322: Type 'number' is not assignable to type 'Function'.

fun = function (a, b) {
  a + b;
};

// let obj: object = {}
// // object litral
// let arr : number[] = []
// // tuple

// function litral

// let fun : (para1:type1, para2:type2) => functionReturnType
let fun2: (a: number, b: number) => number;

fun2 = function (p: number, q: number): number {
  //    p + q; // error TS2355: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
//   return "TS"; // error TS2322: Type 'string' is not assignable to type 'number'.
  return p + q;
};

console.log(fun2(20, 20)); // 40
// console.log(fun2(20, "Hi")); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(fun2(20, 20, 10)); // error TS2554: Expected 2 arguments, but got 3.
