// union (|) --> OR type

// intersection (&): combine types

type objOne = { keyOne: string };

// let obj: objOne = {
//   keyOne: "TS",
// };

// console.log(obj); // { keyOne: 'TS' }

type objTwo = { keyTwo: number };

let obj: objOne & objTwo = {
  keyOne: "TS",
  keyTwo: 10,
};

console.log(obj); // { keyOne: 'TS', keyTwo: 10 }

// any, |, &, type
