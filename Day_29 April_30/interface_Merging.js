/*
Interface Merging:
    Merging --> Combine
    If you declare multiple interfaces with the same name, TypeScript automatically merges them into a single interface.
*/
// Merging:
// interface A {
//   name: string;
//   age: number;
// }
var k = {
    name: "JS",
    age: 12,
};
console.log(k); // { name: 'JS', age: 12 }
