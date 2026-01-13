// class in js ?
// interface in ts ?

/* 
# Way of class annotation in ts:
    literal
    type
    interface
*/

// 1. literal:

// class classOne {
//   namee: string;
//   age: number;
//   constructor(para1: string, para2: number) {
//     this.namee = para1;
//     this.age = para2;
//   }
//   printMethod(): void {
//     console.log(this.namee);
//   }
// }

// let obj = new classOne("TS", 10);

// console.log(obj);
// obj.printMethod();

// // 2. Type alise/custom type

// type classType = {
//   namee: string;
//   age: number;
//   printMethod(): void;
// };

// class classOne implements classType {
//   namee;
//   age;
//   constructor(para1, para2) {
//     this.namee = para1;
//     this.age = para2;
//   }
//   printMethod() {
//     console.log(this.namee);
//   }
// }

// let obj = new classOne("TS", 10);

// console.log(obj);
// obj.printMethod();

// /*
// classOne { namee: 'TS', age: 10 }
// TS
// */

// 3. Interface for class:

// Type alise/custom type
interface classInterface {
  namee: string;
  age: number;
  printMethod(): void;
}

interface interface2 {}
// can implements multipal interface with the comma

class classOne implements classInterface, interface2 {
  namee;
  age;
  constructor(para1, para2) {
    this.namee = para1;
    this.age = para2;
  }
  printMethod() {
    console.log(this.namee);
  }
}

let obj = new classOne("TS", 10);

console.log(obj);
obj.printMethod();

/* 
classOne { namee: 'TS', age: 10 }
TS
*/
