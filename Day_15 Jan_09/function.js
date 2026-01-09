/*
function:
Type of function: 3

How we can annotate ?
Annotate with interface ?

1. function Delaration:

literal
function functionName(para1:type, para2:type, ..., paran:typen): returnType{}

2. function expression:

literal type
let funName = function(para1:type, para2:type, ..., paran:typen):returnType{}
*/
var funOne = function (para) {
    console.log("I am funOne");
    return para;
};
console.log(funOne(4));
/*
I am funOne
4
*/
