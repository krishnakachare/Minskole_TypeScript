// 1. comman JS module:
// module.export
// require("path")

// install:
// npm i --save-dev @types/node

let a: number = 10;

interface abc {
  name: string;
  age: number;
}
let obj: abc = {
  name: "JS",
  age: 12,
};

function fun() {}
class abc2 {}

module.exports = { a, obj, fun, abc2 };
