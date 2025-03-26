// 5. object
// let variableName : type

// let obj: object = 10; // error TS2322: Type 'number' is not assignable to type 'object'.

let obj: object = {
  aa: 10,
  bb: "String",
};
console.log(obj);

let objEmpty: object = {};
console.log(objEmpty); // {}

let obj2: {} = {};
// let obj2: {} = 10; // exception
console.log(obj2);

// can able to control inside the object properties
// let obj3: litral type
let obj3: {
  aa: number;
  bb: string;
} = {
  aa: 10,
  bb: "String",
};
console.log(obj3); // { aa: 10, bb: 'String' }

// let obj4: {
//   aa: number;
//   bb: string;
// } = {
//   aa: "JS", // - error TS2322: Type 'string' is not assignable to type 'number'.
//   bb: "String",
// };
// console.log(obj4);

// can control object length
// let obj5: {
//   aa: number;
//   bb: string;
// } = {
//   aa: 10,
// };
// console.log(obj5); // error TS2741: Property 'bb' is missing in type '{ aa: number; }' but required in type '{ aa: number; bb: string; }'.

let obj6: {
  aa: 10; // value restriction [Literal type]
  bb: "TS";
} = {
  aa: 10,
  bb: "TS",
};
console.log(obj6);
