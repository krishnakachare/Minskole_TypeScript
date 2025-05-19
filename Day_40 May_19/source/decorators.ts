// Decorators:

// Decorators dells with the classes
// Decorators is a special function which can modify :
// class, property, methods, arug,
// At time of define

// tsconfig.json --> enable -->
//  "experimentalDecorators": true

// Types of Decorators:
//   1 Class
//   2 Property
//   3 Method
//   4 Accessor
//   5 Parameter

// 5. Parameter decorator:
function parametersDecorator(para1: any, para2: string, para3: number) {
  /* 
para1 => {}
para2 => MethodName
para3 => index
*/
  console.log(para1); // {}
  console.log(para2); // getName
  console.log(para3); // 1
}

class Abc5 {
  name: string;
  constructor(para: string) {
    this.name = para;
  }
  getName(para: string, @parametersDecorator para2) {
    return para + this.name;
  }
}
