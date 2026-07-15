/* 
enum: enumerated list (constant list)
syntax:
enum enumVaribleName { constant1, constant2}

Type of enums:
1. number enum (Default)
2. string
3. Heterogeneous enum (number, string)
*/

// 2. string enum
// enum enumNum {
//   p = "Hi",
//   q = "TS",
//   r = "JS",
// }
// console.log(enumNum.p); // Hi
// console.log(enumNum.q); // TS
// console.log(enumNum.r); // JS

// Heterogeneous enum (string + number):
enum enumNum {
  p = "Hi",
  q = 10,
  r = "JS",
}
console.log(enumNum.p); // Hi
console.log(enumNum.q); // 10
console.log(enumNum.r); // JS

// Diff bt const & enum ?

// const a = {
// }
