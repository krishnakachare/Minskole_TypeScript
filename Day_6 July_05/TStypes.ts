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
never: empty value
*/

// let q: never;
// console.log(q); // error TS2322: Type '"Hi"' is not assignable to type 'never'.

// let p: never

/* 
void : empty datatype
*/

// let z: void
let z1: void = undefined;
let z2: void = null;
console.log(z2); //  Type 'null' is not assignable to type 'void'.
