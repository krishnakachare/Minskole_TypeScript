// 9. array
// let variableName : type[]
// let arr: number[] = [10, "Hi", true];
// console.log(arr);
// TS2322: Type 'string' is not assignable to type 'number'.
//  TS2322: Type 'boolean' is not assignable to type 'number'.
var arr = [10, 20, 30];
console.log(arr); // [ 10, 20, 30 ]
// arr.push("Hi"); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
var strArr = ["Js", "TS"];
console.log(strArr);
var arrMix = [10, "Hi", true];
console.log(arrMix);
var arrMix2 = [10, "Hi", true];
console.log(arrMix);
