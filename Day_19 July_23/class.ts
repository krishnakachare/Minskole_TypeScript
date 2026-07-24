class classThree {
  static key1: boolean = true;
  key2: string = "Hi TS";
  readonly key3: string = "I am key3";
}

console.log(classThree.key1); // true
classThree.key1 = false;
console.log(classThree.key1); //  can update static 

// let obj1 = new classThree();
// console.log(obj1.key2); // Hi TS
// obj1.key2 = "Hi JS";
// console.log(obj1.key2); // Hi JS

// console.log(obj1.key3);
// obj1.key3 = "Hi JS";
