/* 
class:


new className();


*/

// interface interfaceOne {
//     key1: number
// }

// class classOne {
//   key1 = 10;
// }

// // console.log(classOne.key1);
// let objj = new classOne();
// console.log(objj.key1);

// class acting as a type in ts
// abstract class defining the structure
abstract class classOne {
  key1 = 10;
  abstract methodOne(): void;
}

// let objj = new classOne(); // Cannot create an instance of an abstract class.
// console.log(objj.key1);

class classTwo extends classOne {
  methodOne() {
    console.log("I am abstract method");
  }
}

let objj = new classTwo();
console.log(objj.key1);
