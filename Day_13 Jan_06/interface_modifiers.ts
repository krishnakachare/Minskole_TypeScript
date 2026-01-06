// optional properties (?): Property implementation is optional

// modifiers: readonly
// can only retrive that property

interface interfaceOne {
  readonly keyOne: number;
  keyTwo?: boolean;
}

// let obj: interfaceOne = {
//   keyOne: 10,
// };

let obj: interfaceOne = {
  keyOne: 10,
  keyTwo: true,
};

console.log(obj); // { keyOne: 10 }
console.log(obj.keyTwo); // true
console.log(obj.keyOne); // 10
// obj.keyOne = 100; // error TS2540: Cannot assign to 'keyOne' because it is a read-only property.
// console.log(obj.keyOne); // 100
