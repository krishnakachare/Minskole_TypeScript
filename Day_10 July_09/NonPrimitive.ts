/* 
Non-Primitive/mutable Types: 

1. object type:
let variableName: typeName = value
*/

// Type alise/custome
// 1.
type objType = { fName: string; lName: string; address: string; MobNo: number };

let obj: objType = {
  fName: "typeScript",
  lName: "ABC",
  address: "XYZ",
  MobNo: 12345,
};
console.log(obj);

// 2.
type typeOne = { fName: string; lName: string; address: string };
type typeTwo = { MobNo: number };

let obj2: typeOne & typeTwo = {
  fName: "typeScript",
  lName: "ABC",
  address: "XYZ",
  MobNo: 12345,
};
console.log(obj2);
