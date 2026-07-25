// single Inheritance without constructor:

class class001 {
  a: string = "Hi";
}

// let obj01 = new class001();
// console.log(obj01.a); // "Hi"

class class002 extends class001 {
  b: number = 10;
}

let obj002 = new class002();
console.log(obj002.a); // "Hi"
