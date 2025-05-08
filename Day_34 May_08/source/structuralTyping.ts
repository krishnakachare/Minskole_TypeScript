// structural Typing/ Duck Typing:
// Is a way of comparing types based on their actual structure (the shape of the data) rather than their declared names or where they were defined.
//  “If it walks like a duck and quacks like a duck, it's a duck.”

interface structure {
  name: string;
  age: number;
}

// Direct checking the value
let obj3: structure = {
  name: "JS",
  age: 12,
};
// ======================================

let obj4 = {
  name: "JS",
  age: 12,
  mob: 123456,
};

let obj5 = {
  name: "JS",
};

// Dynamically checking the value/para: checking only mini requirement
function getValue(para: structure) {
  return para;
}
console.log(getValue(obj3)); // { name: 'JS', age: 12 }
console.log(getValue(obj4)); // { name: 'JS', age: 12, mob: 123456 }
// No Error: Bcoz TS allow structural/Duck typing
// Checking only minimum requirement
console.log(getValue(obj5)); // Minimum requirement not fulfill
/* 
 error TS2345: Argument of type '{ name: string; }' is not assignable to parameter of type 'structure'.
  Property 'age' is missing in type '{ name: string; }' but required in type 'structure'.
*/
