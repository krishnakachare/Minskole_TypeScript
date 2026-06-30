/* 
1. Type Inferance
2. Type Annotation:
   Syntax:  let variableName: type = value

# List of types:  type <=> JS datatype + TS types

 # JS datatype:
 1. Prmitive: String, Number, Boolean, Null, Undefined
 2. Non-Premitive: Object, Array, Function

 TS types:
 1. Prmitive : unknown, never, void
 2. Special type: any
 3. Non-Premitive: tuple, enum, interface
 4. Other/advance types: type(custome/alise), Union(|), intersection(&), literal

*/

/* 
Undefined: 
value: Undefined --> single value
datatype: Undefined

  let variableName: typeName = value
*/

let m: undefined = undefined;
// m = true //  error TS2322: Type 'true' is not assignable to type 'undefined'.
// console.log(m);

/* 
.ts Code ---> Compilation ---> .js code ---> Run(output)
                  |
                  |
                 Error

Compilation => tsc fileName.ts ---> fileName.js ---> node fileName.js
*/

/* 
unknown = Not a known
*/

let p: unknown = 10;
p = 100;
console.log(p);

/* 
UI --> User input text box
 "Hi string input"
 100
 true
 {}

*/
