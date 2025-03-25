/*  Syntax:
        variableName : type 
Type inference : TS infert type from the assinged value & its automatically assign to variable
*/
let a = 10;
console.log(a);
// Type annotation : user enforcing the type for holding value inside the variable
let b: number = 10;
console.log(b);

/* 
For .ts can compile automatically:
    tsc fileName.ts --watch
    tsc fileName.ts -w
*/
