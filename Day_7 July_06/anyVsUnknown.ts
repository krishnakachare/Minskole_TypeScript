// any --> Allowing any value from any datatype

let k: any = 10;
k = "Hi";

// unknown --> Allowing any value from any datatype
let kk: unknown = "Hi";
kk = 10;
// But at time of use he holding atleast one type which on is the 'unknown'
console.log(kk + 10); //  error TS18046: 'kk' is of type 'unknown'.
