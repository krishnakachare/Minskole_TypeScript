// 10. tuple
// let variableName : type[] ---> array
/*
object:
let variableName : { key1 : type,
                     key2 : type
                                }
*/
// let variableName : [type1, type2]
// let t: [number, string] = [10, "TS"];
// console.log(t); // [ 10, 'TS' ]
// let t: [number, string] = ["JS", "TS"];
// console.log(t); // error TS2322: Type 'string' is not assignable to type 'number'.
// let t: [number, string] = [10, "TS", true];
// console.log(t); // error TS2322: Type '[number, string, boolean]' is not assignable to type '[number, string]'.
// Source has 3 element(s) but target allows only 2.
// optional element (?)
// let t2: [boolean, string, number?] = [true, 10];
// console.log(t2); // [ true, 'TS', 2 ]
// let t3: [boolean, string | number, number?] = [true];
// console.log(t2); // [ true, 'TS' ]
// let t4: [boolean, (string | number)?, number?] = [true];
// console.log(t2); // [ true]
var ta = ["JS", 1];
console.table(ta);
console.log(ta.length);
// ta.push(true); //  error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
ta.push("TS");
console.table(ta);
console.log(ta.length);
