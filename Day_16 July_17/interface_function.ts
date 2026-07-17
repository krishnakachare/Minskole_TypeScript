/* 

interface --> structure for object --> object, class, function


function:

*/

// function funOne(para1: number, para2: number): number {
//   return para1 + para2;
// }
// funOne(1, 2);

// let funOne = function (para1: number, para2: number): number {
//   return para1 + para2;
// };

// let funOne: (para1: number, para2: number) => number = function (para1, para2) {
//   return para1 + para2;
// };

type functionType = (para1: number, para2: number) => number;

let funOne: functionType = function (para1, para2) {
  return para1 + para2;
};

/* 
Interface:
Syntax:

interface interfaceName {
       (para1: type1, para2: type2): returnType;
}

*/

interface functionType2 {
  (para1: number, para2: number): number;
}

let funOne2: functionType2 = function (para1, para2) {
  return para1 + para2;
};

funOne2(1, 2);
// funOne2(1, "Hi"); //  error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
