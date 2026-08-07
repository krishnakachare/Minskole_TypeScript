"use strict";
/*
namespace used for the grouping the logical modules

namespace syntax:
namespace namespaceName {
}

compare:
class ClassOne1 {
}
*/
var namespaceOne1;
(function (namespaceOne1) {
    function funOne1() {
        console.log("I AM FunOne1");
    }
    namespaceOne1.funOne1 = funOne1;
})(namespaceOne1 || (namespaceOne1 = {}));
// Can able to access within class
namespaceOne1.funOne1(); // I AM FunOne1
