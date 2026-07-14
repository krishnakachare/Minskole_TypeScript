/* 
enum:
syntax:

enum enumVaribleName { constant1, constant2}

Type of enums:
1. number enum (Default)
2. string
3. Hetro (number, string)

*/

enum enumOne {
  a,
  b,
  c,
}

console.log(enumOne.a); // 0
console.log(enumOne.b); // 1
console.log(enumOne.c); // 2

// eunm are constant
// enumOne.a = 100; // error TS2540: Cannot assign to 'a' because it is a read-only property.
// console.log(enumOne.a);

enum enumNum {
  a = 100,
  b,
  c,
}
console.log(enumNum.a); // 100
console.log(enumNum.b); // 101
console.log(enumNum.c); // 102
