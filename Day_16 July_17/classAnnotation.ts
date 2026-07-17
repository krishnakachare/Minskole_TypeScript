/* 
interface for the class:

blueprint, mold, structure 

Diff bt class & interface

*/

// class classOne {
//   keyOne = 10;
// }

// let obj = new classOne();
// console.log(obj.keyOne); // 10

// class classOne {
//   keyOne: number = 10;
//   methodOne(): void {
//     console.log("I am method");
//   };
// }
// let obj = new classOne();
// console.log(obj.keyOne); // 10

//=======================================

interface finterfaceClass {
  keyOne: number;
  methodOne(): void;
}

class classOne implements finterfaceClass {
  keyOne = 10;
  //   keyOne = "HI"; // " Type 'string' is not assignable to type 'number'."
  methodOne() {
    console.log("I am method");
  }
}
let obj = new classOne();
console.log(obj.keyOne); // 10
