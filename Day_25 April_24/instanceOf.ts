// class --. Abc
// object --> a is a instance of class Abc

class Abc {
  name: string = "JS";
}

class Abc2 {
  namee: string = "JS";
}

let a = new Abc();

console.log(a instanceof Abc); // true
console.log(a instanceof Abc2); // false
