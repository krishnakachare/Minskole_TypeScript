/* 
We were used:
1. abstract classes
2. Custome type: object literal type

for annotate type or defining the structure of value

What is an Interface ? 
    An interface is a TypeScript structure used to define the shape of an object.
    object means --> object, class, function
*/

// Custome type: Object literal type
// type objType = {
//   key1: string;
//   key2: number;
// };
// let obj2: objType = { key1: "TS", key2: 10 };

// How can define interface ?
/* 
syntax of interface:
    interface interfaceName {

    }
*/

interface objType {
  key1: string;
  key2: number;
}
// How can implement/use interface ?
let obj2: objType = { key1: "TS", key2: 10 };
