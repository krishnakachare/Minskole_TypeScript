/* Factory decorator:
    - Can pass custom arguments
    - Can able to return function 
*/

// Defination of decorator:
function outerFun(para1: string) {
  return function innerFun(para2: Function) {
    console.log("I AM Function");
    console.log(para1); // MyParameter
    console.log(para2);
    console.log(para2.name); // Class5
  };
}

// function calling --> functionName()
@outerFun("MyParameter")
class Clss5 {
  keyOne1: string = "I Am Property";
  methodOne1(): void {
    console.log("I Am method");
  }
}
