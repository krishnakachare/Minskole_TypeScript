// index signature/ index property: let you define the structure of an object that can have unknown property names but known types for the property values.

// let aa = "TS";
// let a: string = "JS";

// interface Abc {
//   name: string;
//   age: number;
// }

// let obj: Abc = {
//   name: "TS",
//   age: 12,
// };
// console.log(obj);

// object key datatype ==> string

interface Abc {
  [name: string]: string;
  //   [name: boolean]: string;
  // An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.
}

// name => known
// key Types => string, number
/* 
- `string`: Allows string keys (and number keys since they are auto-converted to strings)
- `number`: Allows only number keys (commonly used in arrays or similar structures)
*/

let obj: Abc = {
  namee: "Hi",
  namee2: "TS",
  // age : 12 // Type 'number' is not assignable to type 'string'
};
console.log(obj);

// explicity property in index signature: All explicitly defined properties must match the type of the index signature
interface Abc2 {
  [name: string]: string | number;
  age: number;
}

let obj2: Abc2 = {
  namee: "Hi",
  namee2: "TS",
  age: 12,
};
console.log(obj2);

// Index signature for array:
interface arrType {
  [key: number]: number;
  length: number;
}

// array keys => index number
// let arr = {
//     length:12,
//     push(para:any){
//         //
//     }
// }

// let arr: arrType = [1, 2, 3, 4];
// console.log(arr);
