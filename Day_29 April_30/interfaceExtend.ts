// extend: inheritance
// interface extends --> interface inheritance

// Single level interface:
// interface Abc {
//     age: number
// }

// interface Abc2 {
//     name: string
// }

/* 
Assume:
interface interfaceName{   
    age: number
    name: string
}
*/

interface Abc {
  age: number;
}

interface Abc2 extends Abc {
  name: string;
}

/* 
interface Abc2{   
    age: number
    name: string
}
*/

let person: Abc2 = {
  name: "JS",
  age: 10,
};

console.log(person); // { name: 'JS', age: 10 }

// Multipal Inheritance:
interface A {
  a: string;
}

interface B {
  b: number;
}

// can extends multipal interface by comma seperated
interface C extends A, B {
  c: boolean;
}

let Q: C = {
  a: "TS",
  b: 12,
  c: true,
};
console.log(Q); // { a: 'TS', b: 12, c: true }

/* 
inheritance:
  single level inheritance
  Multilevel inheritance
  Multipal inheritance
*/
