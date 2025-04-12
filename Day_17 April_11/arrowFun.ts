// Arrow Function in Typescript:

// let fun = () => {
//   console.log("I am arrow");
// };
// fun(); // I am arrow

// let fun = (para1: string) => {
//   console.log(`I am ${para1} arrow`);
// };
// fun("TS"); // I am TS arrow

let fun = (para1: string): string => {
  console.log(`I am ${para1} arrow`);
  return para1;
};
let r = fun("TS"); // I am TS arrow
console.log(r);

// let fun2 = (para1: string) => para1;
// console.log(fun2("Arrow"));

let fun2 = (para1: string): string => para1;
console.log(fun2("Arrow"));
