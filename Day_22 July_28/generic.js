"use strict";
/*
Generics: Can Annotate type dynamically

Generic for function, class, interface:

*/
/*
function funGen(para1: number, para2: string): void {
  console.log(para1, para2);
}

funGen(1, "Hi");
*/
// function funGen<p, q>(para1: p, para2: q): void {
//   console.log(para1, para2);
// }
// // funGen<number, string>(1, "Hi");
// funGen<string, string>("JS", "Hi");
// // Default generic:
// // type a = number
// function funGen<p = string, q = string>(para1: p, para2: q): void {
//   console.log(para1, para2);
// }
// funGen("JS", 10);
// // funGen<string, string>("JS", 10);
// // funGen<string, number>("JS", 10);
// extends/constraint generic:
let a = 10;
a = 100;
const aa = 10;
// type a = number
function funGen(para1, para2) {
    console.log(para1, para2);
}
// funGen("JS", 10); // Argument of type 'number' is not assignable to parameter of type 'string'
funGen("JS", "TS");
// funGen<string, number>("JS", 10); // Type 'number' does not satisfy the constraint 'string'
