// class Abc {
//   namee: string = "TS";
// }
// let a = new Abc();
// console.log(a); // Abc { namee: 'TS' }

// Abstract Class:
abstract class Abc {
  namee: string = "TS";
  // Normal method
  printName2() {
    console.log("Normal Method " + this.namee);
  }
  // abstract method
  abstract printName(): void;
}
// let a = new Abc(); //  error TS2511: Cannot create an instance of an abstract class.
// literal object type
// absract
// interface

// Inheritance
class Abc2 extends Abc {
  //error TS2515: Non-abstract class 'Abc2' does not implement inherited abstract member printName from class 'Abc'.
  printName() {
    console.log(this.namee);
  }
}

let a = new Abc2();
console.log(a); // Abc2 { namee: 'TS' }
a.printName(); // TS
a.printName2(); // Normal MethodTS
