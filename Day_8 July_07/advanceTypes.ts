/* 
# Other or Advanced types:

1. literal
2. union(|)
3. intersection(&)
4. type(custome/alise)
*/

// let n: string = "Hi";
// let n: string = "TypeScript";

/* 
string --> type --> allowing multiple values from the string datatype
*/

//# 1. Type literal --> specific value as type (only single value allowing)

let n: "TypeScript" = "TypeScript";
// n = "Hi"; //  error TS2322: Type '"Hi"' is not assignable to type '"TypeScript"'.
console.log(n);

let nn: 10 = 10;
