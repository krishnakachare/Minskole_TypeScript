// Code importing:

// import { print } from "../../z/code2";

// path aliase:
// npm install tsconfig-paths

/* 
tsconfig.json

   "baseUrl": "./Day_42 May_21/source" 
    "paths": {
      "@z/*": ["z/*"]
    }
*/

// Using path aliase for importing
import { print } from "@z/code2";
// ../../z => @z
// Aliase => @z
console.log(print()); // I am nested code
