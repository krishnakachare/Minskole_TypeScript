// Type Modifiers: `Partial`: All pro optional
// `Required`, `Readonly`

interface Abc {
  name: string;
  age: number;
}

// let obj: Abc = {
//   name: "Js",
//   age: 12,
// };

// Modifiers <varible>
// variable --> type hold

// 1. `Partial`: All pro optional
type abc = Partial<Abc>;
let obj: abc = {};

//2. `Required`: All pro Mandatory (Default)
type abc2 = Required<Abc>;
let obj2: abc2 = {
  name: "Js",
  age: 12,
};

//3. `Readonly`: only invoke
type abc3 = Readonly<Abc>;
let obj3: abc3 = {
  name: "Js",
  age: 12,
};

console.log(obj3.name);
// console.log((obj3.name = "TS")); //  error TS2540: Cannot assign to 'name' because it is a read-only property.
