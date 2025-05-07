// structural Typing/ Duck Typing:  Is a way of comparing types based on their actual structure (the shape of the data) rather than their declared names or where they were defined.
//  “If it walks like a duck and quacks like a duck, it's a duck.”

interface structure {
  name: string;
  age: number;
}

let obj3: structure = {
  name: "JS",
  age: 12,
};
