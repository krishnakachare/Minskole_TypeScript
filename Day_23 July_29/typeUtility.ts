/* 
-Utility Types or Type modifiers: 
`Partial`, 
`Required`, 
`Readonly`
*/

// // Access modifiers: readonly, ?
// interface interface12 {
//   key1?: number;
// }

/* 
Type annotation syntax: let variableName: typeName = value
 
        type a = string

typeName: string, number, a, interfaceName
*/

//  Type modifiers:
interface interface12 {
  key1: number;
}

// let obj12: interface12 = {
//   key1: 10,
// };

// Type modifiers:
// 1. `Partial` ---> All properties are optional

let obj12: Partial<interface12> = {};

// 2. `Required` ---> Default ---> All properties are mandatory
let obj13: Required<interface12> = {
  key1: 10,
};

// 2. `Readonly` ---> Default ---> All properties are mandatory
let obj14: Readonly<interface12> = {
  key1: 10,
};

console.log(obj14.key1);
// obj14.key1 = 100; // Cannot assign to 'key1' because it is a read-only property.
