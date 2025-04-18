// static property/methods: class level properties/methods can able to invoke

// class xyz {
//   name: string = "JS";
// }
// console.log(xyz.name); // error TS2339: Property 'name' does not exist on type 'typeof xyz'.
// let obj = new xyz();
// console.log(obj.name); // JS

class abc {
  static namee: string = "TS";
  static printName(): void {
    console.log(`My Name is ${this.namee}`);
  }
}
console.log((abc.namee = "KK")); // "TS"
console.log(abc.namee); // KK
abc.printName(); // My Name is TS
