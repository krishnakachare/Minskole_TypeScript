// Decorators:

// Decorators dells with the classes
// Decorators is a special function which can modify :
// class, property, methods, arug,
// At time of define

// tsconfig.json --> enable -->
//  "experimentalDecorators": true

// class Abc {
//   name: string;
//   constructor(para: string) {
//     this.name = para;
//   }
//   printName() {
//     return this.name;
//   }
// }

// let obj = new Abc("TS");
// console.log(obj)

// Types:
// 1. Class Decorator

// function classDecorator(para: Function) {
//   // para => constructor
//   console.log(para); // [class Abc]
//   console.log(para.name); // Abc
// }

// @classDecorator
// class Abc {
//   name: string;
//   constructor(para: string) {
//     this.name = para;
//   }
//   printName() {
//     return this.name;
//   }
// }

// 2. Property Decorator:

// function propertyDecorator(para1: any, para2: String) {
//   // para => target object
//   // para2 => keyName
//   console.log(para1); // {}
//   console.log(para2); // name
// }

// class Abc2 {
//   @propertyDecorator
//   name: string;
//   constructor(para: string) {
//     this.name = para;
//   }
//   printName() {
//     return this.name;
//   }
// }

// 3. Method Decorator:
// function methodDecorator(para1: any, para2: String, para3:PropertyDescriptor) {
//   // para => target object
//   // para2 => keyName(MethodName)
//   // para3 => descriptor
//   console.log(para1); // {}
//   console.log(para2); // printName
//   console.log(para3);
//   //   {
//   //   value: [Function: printName],
//   //   writable: true,
//   //   enumerable: false,
//   //   configurable: true
//   // }
//   console.log(para3.value); // [Function: printName]
// }

// class Abc3 {
//   name: string;
//   constructor(para: string) {
//     this.name = para;
//   }
//   @methodDecorator
//   printName() {
//     return this.name;
//   }
// }

// 4. Acessor Decorator:
function acessorDecorator(
  para1: any,
  para2: String,
  para3: PropertyDescriptor
) {
  // para => target object
  // para2 => keyName(MethodName)
  // para3 => descriptor
  console.log(para1); // {}
  console.log(para2); // getPIN
  console.log(para3);
  //   {
  //   get: [Function: get getPIN],
  //   set: undefined,
  //   enumerable: false,
  //   configurable: true
  // }
  console.log(para3.get); // [Function: get getPIN]
}

class Abc4 {
  private _a = 123;
  name: string;
  constructor(para: string) {
    this.name = para;
  }

  @acessorDecorator
  get getPIN() {
    return this._a;
  }
}

// 5. parameter decorator:
