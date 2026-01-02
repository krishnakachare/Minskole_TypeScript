// object literal type:

// let obj: { keyName: boolean } = {
//   keyName: true,
// };
// console.log(obj);

// type alias or custome type

/* 
 type typeName = type
*/

type objType = { keyName: boolean };

let obj: objType = {
  keyName: true,
};
console.log(obj);

type arrType = string | number;

// let a: arrType = 10;
// let a: arrType = true; // error TS2322: Type 'boolean' is not assignable to type 'arrType'.
