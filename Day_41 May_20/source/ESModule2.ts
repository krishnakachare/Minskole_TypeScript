// import { z, XYZ, abc } from "./ESModule1";

// console.log(z); // 12
// console.log(XYZ); // [Function: XYZ]

// let obj: abc = {
//   name: "JS",
//   age: 12,
// };
// console.log(obj);

//=======================================
import * as data from "./ESModule1";
console.log(data.z); // 12
console.log(data.XYZ); // [Function: XYZ]

let obj: data.abc = {
  name: "JS",
  age: 12,
};
console.log(obj);
