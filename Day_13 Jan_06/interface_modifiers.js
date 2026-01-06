// optional properties (?): Property implementation is optional
// let obj: interfaceOne = {
//   keyOne: 10,
// };
var obj = {
    keyOne: 10,
    keyTwo: true,
};
console.log(obj); // { keyOne: 10 }
console.log(obj.keyTwo); // true
console.log(obj.keyOne); // 10
// obj.keyOne = 100; // error TS2540: Cannot assign to 'keyOne' because it is a read-only property.
// console.log(obj.keyOne); // 100
