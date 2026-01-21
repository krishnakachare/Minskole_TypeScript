"use strict";
// importing exported code from Modules1.ts
Object.defineProperty(exports, "__esModule", { value: true });
// export:   import {  } from "path";
// import { a } from "./Modules1";
// console.log(a); // 10
// importing default exported code from Modules1.ts
// export default:   import  from "path";
// import a from "./Modules1";
// console.log(a); // 10
// importing multiple exported code from Modules1.ts
// export:   import {  } from "path";
// import { aa, b, c } from "./Modules1";
// console.log(aa); // 10
// console.log(b); // true
// console.log(c); // Hello
var obj = require("./Modules1");
console.log(obj.aa); // 10
console.log(obj.b); // true
console.log(obj.c); // Hello
