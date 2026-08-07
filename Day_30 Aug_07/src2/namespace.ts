/* 
namespace used for the grouping the logical modules

namespace syntax:
namespace namespaceName {
}

compare:
class ClassOne1 {
}
*/

namespace namespaceOne1 {
  export function funOne1() {
    console.log("I AM FunOne1");
  }
}

// Can able to access within class

namespaceOne1.funOne1(); // I AM FunOne1
