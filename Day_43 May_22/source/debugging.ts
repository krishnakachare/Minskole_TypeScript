/* 
# TS Code debugging:
    - console.log()
    - breakpoints: 
    1. debugger --> statement in js
    2. browser --> source tab
    3. VSC breakpoints
*/

/* 
tsconfig.ts

 "sourceMap": true 
*/

console.log("Code start");
let a = 12;
{
  a = "TS";
  let a = "JS";
}
console.log("Code End");
