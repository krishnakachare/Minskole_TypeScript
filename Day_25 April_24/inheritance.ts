/* 
class inheritance: extends, super()

GrandFather
  |
Father
  |
Son
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
  constructor(para1: string, para2: string, para3: string) {
    super(para1, para2);
    this.fName = para3;
    // this.fLastName = para2;
  }
  printFullName(): void {
    console.log(this.fName + " " + this.gFLastName);
  }
}

let father = new Father("RAM", "KK", "Sham");
console.log(father); // Father { gFName: 'RAM', gFLastName: 'KK', fName: 'Sham' }
father.printFullName(); // sham KK
