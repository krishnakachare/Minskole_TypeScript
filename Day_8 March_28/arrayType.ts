// 9. array
// let variableName : type[]

// let arr: number[] = [10, "Hi", true];
// console.log(arr);
// TS2322: Type 'string' is not assignable to type 'number'.
//  TS2322: Type 'boolean' is not assignable to type 'number'.

let arr: number[] = [10, 20, 30];
console.log(arr); // [ 10, 20, 30 ]
// arr.push("Hi"); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

let strArr: string[] = ["Js", "TS"];
console.log(strArr);

let arrMix: any[] = [10, "Hi", true];
console.log(arrMix);

let arrMix2: (number | string | boolean)[] = [10, "Hi", true];
console.log(arrMix);