let b = 10;
/* 
value= 10
datatype= number
*/
console.log(b); // 10

// Updation
b = 5;
/* 
value= 5
datatype= number
*/
console.log(b); // 5

// Strongly typed

b = "Hi TS"; // firstOne.ts:15:1 - error TS2322: Type 'string' is not assignable to type 'number'.
/* 
value=  "Hi TS"
datatype= String
*/
console.log(b);

/* 
.ts Code ---> Compilation ---> .js code ---> Run(output)
                  |
                  |
                 Error

*/
