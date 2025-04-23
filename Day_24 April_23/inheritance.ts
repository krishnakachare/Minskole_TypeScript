/* 
class inheritance: extends, super()

GrandFather
  |
Father
  |
Son
*/

// Everything is object

// let str = "string" //
// let str = String ("string")

// let obj = {
// }

// let arr = [1, 2, 4]; // array ---> object
// Array.isArray()

// let arr = {
//     push(){
//     }
// }
// arr.push()

// arr.push(5)

// Object.keys()

/* 
Object
|
Array
|
litral type (array literal)
*/

class GrandFather {
  gFName: string;
  gFLastName: string;
  constructor(para1: string, para2: string) {
    this.gFName = para1;
    this.gFLastName = para2;
  }
  printFullName(): void {
    console.log(this.gFName + " " + this.gFLastName);
  }
}

let grandFather = new GrandFather("RAM", "KK");
console.log(grandFather); // GrandFather { gFName: 'RAM', gFLastName: 'KK' }
grandFather.printFullName(); // RAM KK

class Father extends GrandFather {
  fName: string;
  //   fLastName: string;
  constructor(para1: string, para2: string) {
    this.fName = para1;
    // this.fLastName = para2;
  }
  printFullName(): void {
    console.log(this.fName + " " + this.fLastName);
  }
}

let father = new Father("sham", "KK");
console.log(father); // Father { fName: 'sham', fLastName: 'KK' }
father.printFullName(); // sham KK
