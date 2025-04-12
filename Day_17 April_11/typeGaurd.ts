// Type Gaurd:

// custome type:
// type variableName = type

// type a = 10
// // type literal
// let z : a = 10
type p = string | number;

// function add(a: p, b: p): p {
//   return a + b;  // error TS2365: Operator '+' cannot be applied to types 'p' and 'p'.
// }
// console.log(add(1, 1));

function add(a: p, b: p): p {
  if (typeof a === "number" && typeof b == "number") {
    // type gaurd
    return a + b;
  }
}
console.log(add(1, 1));

// instanceof()
