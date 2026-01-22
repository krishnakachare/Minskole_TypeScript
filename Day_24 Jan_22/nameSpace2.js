"use strict";
// /// <reference path="./NameSpace1.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(group.flag); // true
//  tsc .\nameSpace2.ts --outFile nameSpace2.js
var NameSpace1_1 = require("./NameSpace1");
console.log(NameSpace1_1.groupExported.flag); // I am exported
