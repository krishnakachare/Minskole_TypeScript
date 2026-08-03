// 2. Property decorator

// Defination of decorator:
function funProperty(para1: Function, para2: string) {
  console.log("I AM Function");
  console.log(para1);
  console.log(para1.name);
  console.log(para2);
}

class Clss51 {
  // @funProperty
  keyOne1: string = "I Am Property";
  methodOne1(): void {
    console.log("I Am method");
  }
}
