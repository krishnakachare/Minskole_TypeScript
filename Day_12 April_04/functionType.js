// Function
// let variableName : Type
var fun;
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
var fun2;
fun2 = function (p, q) {
    //    p + q; // error TS2355: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
    //   return "TS"; // error TS2322: Type 'string' is not assignable to type 'number'.
    return p + q;
};
console.log(fun2(20, 20)); // 40
// console.log(fun2(20, "Hi")); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(fun2(20, 20, 10)); // error TS2554: Expected 2 arguments, but got 3.
