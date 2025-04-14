/* 
 function overriding:
different class, same method, different signature
*/

/* 
function overloading: 
same class, same method, different signature
*/

// console.log("Hi");
// console.log(10);
// console.log(true);

// // console ---> class/object
// // log() --> method
// // arug --> change

// // Assume:
// let console = {
//   log(para) {
//     // steps
//   },
// };

type mixType = string | number;
// function add(a: mixType, b: mixType): mixType {
//   return a + b; // error TS2365: Operator '+' cannot be applied to types 'mixType' and 'mixType'.
// }
// add(1, 1);

function add(a: mixType, b: mixType): mixType {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return `${a} ${b}`;
}
// console.log(add(1, 1)); // 2
console.log(add("Hi", "TS")); // Hi TS
// same class, same method, different signature