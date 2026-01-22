// /// <reference path="./NameSpace1.ts" />

// console.log(group.flag); // true

//  tsc .\nameSpace2.ts --outFile nameSpace2.js

import { groupExported } from "./NameSpace1";

console.log(groupExported.flag); // I am exported
