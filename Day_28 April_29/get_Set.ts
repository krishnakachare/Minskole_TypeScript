// get --> getter methods --> Acessor
// set --> setter method --> mutator

class Abc {
  private sName: string;
  // Can define private properties in javascript
  // _sName: string;
  // #sName: string;
  constructor(para: string) {
    this.sName = para;
  }

  get getName() {
    return "Retriving: " + this.sName;
  }

  // Bcoz of setter method have single point of control on the propert updation
  set updateName(para: string) {
    this.sName = para;
  }
}

let a = new Abc("JS");
console.log(a); // Abc { sName: 'JS' }
// console.log(a.sName); //  error TS2341: Property 'sName' is private and only accessible within class 'Abc'.
// console.log(a.getName()); // Retriving: JS

// getter method use: can acess the property
console.log(a.getName); // Retriving: JS

// setter method use: can update the property
a.updateName = "TS"; // Mutation

console.log(a.getName); // Retriving: TS
