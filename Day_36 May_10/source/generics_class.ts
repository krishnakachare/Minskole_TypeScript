// 1. type annotation for class:
class human {
  name: string;
  constructor(para: string) {
    this.name = para;
  }
  printName(): string {
    return this.name;
  }
}

// 2. interface with class:
interface Abcc {
  name: string;
  printName(): string;
}

class human2 implements Abcc {
  name: string;
  constructor(para: string) {
    this.name = para;
  }
  printName(): string {
    return this.name;
  }
}

// let instance = new human2(12); // Argument of type 'number' is not assignable to parameter of type 'string'.
// console.log(instance);
// console.log(instance.printName());

// Generics with the class:
class human3<T> {
  name: T;
  constructor(para: T) {
    this.name = para;
  }
  printName(): T {
    return this.name;
  }
}

// let aa = new human3("Hi"); // human3 { name: 'Hi' }  //  Hi string
// let aa = new human3(12); // human3 { name: 12 } //  12 number
let aa = new human3<boolean>(true); // human3 { name: true } // true boolean
// let aa = new human3<boolean>({}); // error TS2345: Argument of type '{}' is not assignable to parameter of type 'boolean'.
console.log(aa);
console.log(aa.printName(), typeof aa.printName());
