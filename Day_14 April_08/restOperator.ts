// function : rest operator

// function abc(para) {
//   console.log(para, typeof para);
// }
// // abc(10);
// abc(10, "Hi"); // error TS2554: Expected 1 arguments, but got 2.

// function abc(...para) {
//   console.log(para, typeof para);
// }
// abc(10, "Hi"); // [ 10, 'Hi' ] object

// let variableName : type
// let variableName : type[]

// function abc(...para: number[]) {
//   console.log(para, typeof para);
// }

// // abc(10, "Hi"); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// abc(10, 20); // [ 10, 20 ] object

function abc(...para: (number | string)[]) {
  console.log(para, typeof para);
}

abc(10, "Hi"); // [ 10, 'Hi' ] object
