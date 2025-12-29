// any type: any type (all types)
// unknown: Not known
// any vs unknown
var varOne = 10;
var varNum = 20;
console.log(varOne + varNum); // No error
var varTwo = 50; //  Operator '+' cannot be applied to types 'number' and 'unknown'.
// console.log(varNum + varTwo); // Error: Object is of type 'unknown'.// Error: Object is of type 'unknown'.
if (typeof varTwo === "number") {
    console.log(varNum + varTwo); // 70
}
