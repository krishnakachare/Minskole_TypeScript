// para ? : type
// let fun = function (a: number, b: number, c: number) {
//   //   return a + b + c;
//   return a + b;
// };
// // console.log(fun(1, 1, 1)); // 3
// console.log(fun(1, 1)); //  An argument for 'c' was not provided.
// let fun = function (a: number, b: number, c?: number) {
//   //   return a + b + c;
//   return a + b;
// };
// console.log(fun(1, 1, 1)); // 2
// // console.log(fun(1, 1)); //  2
var fun = function (a, b, c) {
    if (c == undefined) {
        return a + b;
    }
    else {
        return a + b + c;
    }
};
console.log(fun(1, 1, 1)); // 3
// console.log(fun(1, 1)); //  2
