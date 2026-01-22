// let a: number = 10;

/*
# Type Assertion:  Type conversion

    variableName as type
    <type> variableName

*/

// // a as string
// <string> a

let a: unknown = 10;
// console.log(a + 20);

/* 
 variableName as type
 <type> variableName
*/

// a as string
// <number> a
console.log(<number>a + 20);
console.log((a as number) + 20);
