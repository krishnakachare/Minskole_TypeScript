/* 
  Type Aliases| Custome Type =>
  type variableName = type
*/
// 1. Type alise for values:
let a: number = 10;
type ali = number;
let aa: ali = 10;
console.log(aa);

// 2. Type Alise for object literal :
// old way:
// let obj: {
//   name: string;
//   age: number;
// } = {
//   name: "JS",
//   age: 10,
// };
// console.log(obj);

// Type Alise:
type objType = {
  name: string;
  age: number;
};

let obj: objType = {
  name: "TS",
  age: 20,
};
console.log(obj);

/* 
3. Union Type:
   OR (|)
*/

// let arr: (string | number | boolean)[] = [10, "TS", true];
type abc = string | number | boolean;

let arr: abc[] = [10, "TS", true];
console.log(arr); // [ 10, 'TS', true ]

/* 
4. Intersection type alise :
   LHS & RHS
*/

// let obj1: {
//   key1: string;
//   key2: number;
// } = {
//     key1 : "TS",
//     key2 : 100
// }
// let obj2: {
//   key3: 3;
//   key4: 4;
// } = {
//     key3 : 3,
//     key4 : 4
// }

type obj1 = {
  key1: string;
  key2: number;
};

type obj2 = {
  key3: 3;
  key4: 4;
};

// can combine the types
let objj: obj1 & obj2;
objj = {
  key1: "JS",
  key2: 100,
  key3: 3,
  key4: 4,
};
console.log(objj);
