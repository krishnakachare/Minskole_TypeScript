//Class: Template for object creation

// class className {
//     // Properties
//     // methods
// }

// class abc {
//   name = "TS";
// }
// // create instance:
// let a = new abc();
// console.log(a);

class abc2 {
  name: string = "TS";
  printName(): void {
    console.log(`My Name is ${this.name}`);
  }
}
// create instance from class:
let a2 = new abc2();
console.log(a2); // able to access class properties & methods
a2.printName();
