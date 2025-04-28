// get
// set

class Abc {
  private sName: string;
  constructor(para: string) {
    this.sName = para;
  }

  get getName() {
    return "Retriving: " + this.sName;
  }
}

let a = new Abc("JS");
console.log(a); // Abc { sName: 'JS' }
// console.log(a.sName); //  error TS2341: Property 'sName' is private and only accessible within class 'Abc'.
// console.log(a.getName()); // Retriving: JS
console.log(a.getName); // Retriving: JS
