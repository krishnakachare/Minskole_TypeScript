// Default parameter in function:

// let fun: (p: number, q: number) => number = function (a, b) {
//   return a + b;
// };

// let ans = fun(10, 10);
// // let ans = fun(10); //   An argument for 'q' was not provided.
// console.log(ans); // 20

// let fun = function (a: number, b: number) {
//   return a + b;
// };

// // let ans = fun(10, 10);
// let ans = fun(10); //   An argument for 'q' was not provided.
// console.log(ans); // 20

// Para default value:

let fun = function (a: number, b: number = 10) {
  return a + b;
};

// let ans = fun(10, 10);
let ans = fun(10);
console.log(ans); // 20
