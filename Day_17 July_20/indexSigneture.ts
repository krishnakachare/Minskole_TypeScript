/* 
Interface:

Indexing -> Key type annotation

Synatx:
interface interfaceName {
   keyName : typeName
}
*/

// let a = 10;

// let a: {
//   key: type;
// } = {
//   key: "value",
// };

// KeyName ?
// KeyType --> Known
// keyValue --> Known

// interface One1 {
//   // key: value;
//   [key: string]: string;
// }

// let obj1: One1 = {
//   key: "string",
//   key2: 10 //  error TS2322: Type 'number' is not assignable to type 'string'.
// };

// let arr = [1,2,3]
//            0 1 2 --> index/key

//=====================================

// interface One1 {
//   // key: value;
//   [key: string]: number | string;
// }

// let obj4: One1 = {
//   key: 100,
//   //
//   key2: "Hi",
// };

// indix: number --> Interface for the array

interface arrayType {
  [key: number]: string | number;
}
let arr2: arrayType = ["A", "B", 2];

// index signature/ index property: let you define the structure of an object that can have unknown property names but known types for the property values.
