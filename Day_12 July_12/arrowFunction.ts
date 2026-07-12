// let funOne1 = function (para1: number, para2: number): number {
//   return para1 + para2;
// };
// funOne1(1, 2); // 3

// void: nothing return

// let m: void;
// // let m: void = "Hi"; // error TS2322: Type 'string' is not assignable to type 'void'.
// console.log(m);

// let funOne1 = function (para1: number, para2: number): void {
//   //   return para1 + para2;
//   //   return 2; // Type 'number' is not assignable to type 'void'
// };
// // funOne1(1, 2); // 3
// console.log(funOne1(1, 2)); // undefined

// Arrow function:
// let funOne1 = (para1: number, para2: number): number => {
//   return para1 + para2;
// };
// funOne1(1, 2); // 3

// let functionName = (para1:type1, ...)=>returnType{}

// let variableName: typeName = value
// let functionName: (para1:number, para2:number)=>number = function defination/Value

let funOne1: (para1: number, para2: number) => number = (para1, para2) => {
  return para1 + para2;
};
// funOne1(1, 2); // 3
// funOne1(1, "Hi"); // 3 //  error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.



//
let funOne2: () => string = () => "Hi TS";
console.log(funOne2()); // Hi TS
