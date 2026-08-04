// 2. Method decorator

// Defination of decorator:
function funMethod(para1: Object, para2: string, para3: PropertyDescriptor) {
  console.log("I AM Function");
  console.log(para1);
  console.log(para2); // methodOne1
  console.log(para3);
  /* 
  {
  value: [Function (anonymous)],
  writable: true,
  enumerable: true,
  configurable: true
  }
  */
}

class Clss52 {
  keyOne1: string = "I Am Property";
  @funMethod
  methodOne1(): void {
    console.log("I Am method");
  }
}
