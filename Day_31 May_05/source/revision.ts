// Interface:
// object: object, class, function

// custome types

// type typeName = typeStructure
type obj = {
  name: string;
  age: number;
};

// interface interfaceName { typeStructure }
// interface vs type

interface obj2 {
  readonly name: string;
  age?: number;
}

let k: obj2 = {
  name: "JS",
  age: 10,
};

// optional proerties: (?)
let k2: obj2 = {
  name: "JS",
};

// readonly proerties:
let k3: obj2 = {
  name: "JS",
  age: 10,
};

console.log(k3.name); // "JS"
// k3.name = "TS"; // error TS2540: Cannot assign to 'name' because it is a read-only property.
// console.log(k3.name);

// Extending interface:

// extends --> inheritance
// interface inheritance

interface A {
  name: string;
}

interface C {
  lName: string;
}

interface B extends A, C {
  age: number;
}

// intersection (&&), union (|) ---> Type alise
// No works with interface
// let human: A && B = {
//   name: "JS",
//   age: 10,
// };

let human: B = {
  name: "JS",
  lName: "TS",
  age: 10,
};

console.log(human); // { name: 'JS', lName: 'TS', age: 10 }

// extends --> works with only interface, Not with type alise
