/*
Interface Merging:
    Merging --> Combine
    If you declare multiple interfaces with the same name, TypeScript automatically merges them into a single interface.
*/

interface A {
  name: string;
}

interface A {
  age: number;
}

// interface A {
//   name: string;
//   age: number;
// }

let kk: A = {
  name: "TS",
  age: 14,
};
console.log(kk); // { name: 'TS', age: 14 }

// same proprty:
interface B1 {
  name: string;
}

interface B1 {
  name: string;
}

// interface B1 {
//   name: string;
//   name: string;
// }

let kk2: B1 = {
  name: "JS",
};
console.log(kk2); // { name: 'JS' }

let p: string;
// p:number // cant update : Bcoz TS is a statically typed lang

// let a: string = "Hi";
//     a: number = 10;

// let obj = {
//   a: 10,
// };

// let arr = [1,2,3]
