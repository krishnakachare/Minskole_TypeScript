// Arrow Function in Typescript:
// let fun = () => {
//   console.log("I am arrow");
// };
// fun(); // I am arrow
// let fun = (para1: string) => {
//   console.log(`I am ${para1} arrow`);
// };
// fun("TS"); // I am TS arrow
var fun = function (para1) {
    console.log("I am ".concat(para1, " arrow"));
    return para1;
};
var r = fun("TS"); // I am TS arrow
console.log(r);
// let fun2 = (para1: string) => para1;
// console.log(fun2("Arrow"));
var fun2 = function (para1) { return para1; };
console.log(fun2("Arrow"));
