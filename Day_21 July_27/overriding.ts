/* 
2. Overriding= different class/object, Same method name, same method signature.

*/

class father {
  printName(): void {
    console.log("Father Name");
  }
}

let fatherObj = new father();
fatherObj.printName(); //  "Father Name"

class child extends father {
  printName(): void {
    console.log("Child Name");
  }
}

let childObj = new child();
childObj.printName(); //  "Child Name"
// different class/object, Same method name, same method signature.

/* 
page.locator("loctor", {}).click();
page.click();
*/
