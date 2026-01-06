/* 
interface merging: 

If interface declared with same names then at time of implementation need to follow both or same declared interface structures

- its behaves like a intersection(&) type
*/

interface interfaceTwo {
  keyOne: string;
}

interface interfaceTwo {
  keyTwo: boolean;
}

let objTwo: interfaceTwo = {
  keyOne: "TS",
  keyTwo: true,
};

console.log(objTwo); // { keyOne: 'TS', keyTwo: true }
