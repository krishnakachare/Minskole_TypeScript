// class abc2 {
//   name: string = "TS";
// }
// // create instance from class:
// let a2 = new abc2();
// console.log(a2);

// let a3 = new abc2();
// console.log(a3);

// let a4 = new abc2();
// console.log(a4);

// let a5 = new abc2();
// console.log(a5);

// let a6 = new abc2();
// console.log(a6);

// template static
// make template dynamic

// function print() {
//   console.log("TS");
// }

// print(); // "TS"
// print(); // "TS"
// print(); // "TS"
// print(); // "TS"

//
// function print(para) {
//   console.log(para);
// }

// print("TS"); // "TS"
// print("JS"); // "TS"
// print("HI"); // "TS"

// make template dynamic:

class abc {
  name: string;
  constructor(para1: string) {
    this.name = para1;
  }
}

let p = new abc("TS");
console.log(p);

let p2 = new abc("JS");
console.log(p2);

let p3 = new abc("HI");
console.log(p3);
