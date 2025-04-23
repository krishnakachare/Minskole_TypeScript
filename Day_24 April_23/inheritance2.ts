// extend
// class Abc {
//   name: string = "KK";
// }
// let a = new Abc();
// console.log(a.name); // "KK"

// class Abc2 extends Abc {
//   // empty
// }
// let a2 = new Abc2();
// console.log(a2.name); // "KK"

// super()

class check {
  name: string;
  constructor(para: string) {
    this.name = para;
  }
}

class check2 extends check {
  name: string;
  constructor(para: string) {
    this.name = para;
  }
}
