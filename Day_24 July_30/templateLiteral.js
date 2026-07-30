"use strict";
/*
Template Literal / string interpolation: `${}`

String:
' '
" "
` `
*/
let str = "Hi";
let str2 = "Hi";
let str3 = `Hi`;
let str4 = "JS";
let newStr = str3 + str4;
console.log(newStr); // "HiJS"
newStr = "Hi str4";
console.log(newStr); // "Hi str4"
// Template Literal / string interpolation: `${}`
newStr = `Hi ${str4}`;
console.log(newStr); // "Hi JS"
let strr = "Hi" + str4;
/*
\
\
:
\
\
*/
