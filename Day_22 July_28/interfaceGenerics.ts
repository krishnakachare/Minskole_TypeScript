// interface interfaceGen {
//   key1: boolean;
//   key2: string;
// }

// let objjj: interfaceGen = {
//   key1: true,
//   key2: "Hi",
// };


// Generics with interface:

interface interfaceGen<type1, type2> {
  key1: type1;
  key2: type2;
}

// let objjj: interfaceGen<boolean, string> = {
//   key1: true,
//   key2: "Hi",
// };

let objjj: interfaceGen<boolean, number> = {
  key1: true,
//   key2: "Hi", // Type 'string' is not assignable to type 'number'
};
