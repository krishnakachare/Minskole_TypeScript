/* 
# OOPs: 

1. Class, Object
2. Inheritance
3. Polymorphism
3. Abstraction
4. Encapsulation

# Polymorphism : Many form of functions.

1. overloading.
2. overriding.

*/

// 1. Overloading: Same class/object, Same method name, different method signature (no of parameter, type of parameter)
class classMany {
  methodOne(para1: string, para2?: string): void;
  methodOne(para1: string, para2: number): void;
  methodOne(para1: number, para2: string): void;
  methodOne(para1: number, para2: number): void;
  methodOne(para1: any, para2: any): void {
    console.log(para1, para2);
  }
}

let objMany = new classMany();

objMany.methodOne("Hi", "JS");
objMany.methodOne("Hi");
objMany.methodOne("Hi", 10);
objMany.methodOne(10, "Hi");
objMany.methodOne(10, 10);
// objMany.methodOne(true, false);

/* 
 page.goto("url", {timeout:1000});
 page.locator("loctor", {}).click()
 page.click("locator", {})
*/
