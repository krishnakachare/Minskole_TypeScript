// class human {
//   name: string;
//   constructor(para: string) {
//     this.name = para;
//   }
//   printName(): string {
//     return this.name;
//   }
// }

// let ram = new human("RAM");
// console.log(ram);
// console.log(ram.printName());

// interface for classes:
interface person {
  name: string;
  printName(): string;
}

// implements keyword implement interface on the class
class human implements person {
  name;
  constructor(para: string) {
    this.name = para;
  }
  printName() {
    return this.name;
  }
}
let ram = new human("RAM");
console.log(ram);
console.log(ram.printName());
