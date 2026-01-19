/* 
Utility Types: `Required`
All properties/structure are mandatory
*/

interface interfaceOne {
  key1: number;
  key2: string;
}

let obj: Required<interfaceOne> = {
  key1: 10,
  //   key2: "TS",
};

console.log(obj);

// Think ?
// Default
