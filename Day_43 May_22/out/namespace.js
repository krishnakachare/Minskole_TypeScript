"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.math = void 0;
var math;
(function (math) {
    function add(a, b) {
        console.log("I am Namespace");
        return a + b;
    }
    math.add = add;
})(math || (exports.math = math = {}));
//# sourceMappingURL=namespace.js.map