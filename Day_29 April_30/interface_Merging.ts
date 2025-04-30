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

// Merging:
// interface A {
//   name: string;
//   age: number;
// }

let k: A = {
  name: "JS",
  age: 12,
};
console.log(k); // { name: 'JS', age: 12 }
