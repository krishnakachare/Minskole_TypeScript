// 1. class without constructor:
// class class01 {
//   a: string = "Hi"; // fix value
// }

// let obj01 = new class01();
// console.log(obj01.a); // "Hi"

// let obj02 = new class01();
// console.log(obj02.a); // "Hi"

// 2. class with constructor:
class class01 {
  a: string; // dynamic value
  constructor(para1: string) {
    this.a = para1;
  }
}

let obj01 = new class01("Hi"); // class01 constructor calling
console.log(obj01.a); // "Hi"

let obj02 = new class01("JS");
console.log(obj02.a); // "JS"
