// 2. ES6 Module:
// export: 1. named export, 2. default export
// import => alise

// 1. named export: can use multipal exports

export let z: number = 12;

export function XYZ() {}

export interface abc {
  name: string;
  age: number;
}

// 2. export default: can use once in file

// export default  function add(a:number, b:number): number{
//     return a+b
// }

// OR

function add(a: number, b: number): number {
  return a + b;
}
export default add;
