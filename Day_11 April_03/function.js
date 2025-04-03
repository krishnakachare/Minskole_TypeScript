/*
let variableName : type

function funName(para1: type1, para2: type2):returnType{
     // steps
}
funName(arg1, arg2);
*/
// function add(a, b) {
//   console.log(a + b);
// }
// // add(1, 1); // 2
// // add(1, "JS"); // "1JS" --> Can avoid this with TS
// In function can able to restrict the parameters types & function return type
function add(a, b) {
    //   console.log(a + b);
    return a + b;
}
// add(1, 1); // 2
// add(1, "JS"); // TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(add(1, 1));
// 13. void : not return anything
// Its controlling the script next operations
function add2(a, b) {
    //   console.log(a + b);
    return a + b;
}
// add2(10, 10); // 20
console.log(add(11, 11)); // 22
var q = add(11, 11);
console.log(q + 2); // TS2322: Type 'number' is not assignable to type 'void'.
