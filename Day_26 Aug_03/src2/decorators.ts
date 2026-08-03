/* 
Decorators:

Decorators dells with the classes
Decorators is a special function which can modify : class, property, methods, arug
At time of define

tsconfig.json --> enable for use the decorator -->
                  "experimentalDecorators": true
                  "target": "es5",
                  "ignoreDeprecations": "6.0",

Decorators ---> spectial type of function dell with the class

# Types of decorators:
1. Class 
2. Property
3. Method
4. parameter decorator
*/

// 1. Class decorator/function:

// Defination of decorator:
function fun(para1: Function) {
  console.log("I AM Function");
  console.log(para1);
  console.log(para1.name);
}

// Use of decorator === calling the decorator/function -->  @functionName
@fun
class Clss5 {
  keyOne1: string = "I Am Property";
  methodOne1(): void {
    console.log("I Am method");
  }
}

// When can use the class ?
// With instance
let objOne1 = new Clss5();

// Object ---> retrive --> update
