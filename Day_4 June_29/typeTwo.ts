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

 Diff bt type & datatype ?
*/

//  1. Prmitive: String, Number, Boolean, Null, Undefined
// 2. Type Annotation:
//  let variableName: type = value

// Number
let a: number = 20;
a = 0;
a = -2;
a = 0.3;
/* 
value: 20
datatype: number
*/

// a = "TS"; //  - error TS2322: Type 'string' is not assignable to type 'number'.
console.log(a);

//  let variableName: typeName = value
//  type ---> small case

// String:
// type ==> string

let str: string = "I am String";
str = "String";
str = `String 2`;
// str = true; //  error TS2322: Type 'boolean' is not assignable to type 'string'.
console.log(str);

// boolean : true, false
let flag: boolean = false;
console.log(flag); // false

// Null :
/* 
value: null
datatype: Object
*/

let check: null = null;
console.log(check); // null
