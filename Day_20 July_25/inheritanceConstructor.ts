// single Inheritance with constructor: Type annotation with interface
interface interClass1 {
  a: string;
}

interface interClass2 {
  b: number;
}

class class1 implements interClass1 {
  a;
  constructor(para1: string) {
    this.a = para1;
  }
}

class class2 extends class1 implements interClass2 {
  b;
  constructor(para1: string, para2: number) {
    super(para1);
    this.b = para2;
  }
}

let obj2 = new class2("Hi", 10);
console.log(obj2.a); // "Hi"
