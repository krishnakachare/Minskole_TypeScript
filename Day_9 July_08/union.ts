/* 
union(|) ---> OR operator --> any one required true
*/

let t: number | string = 41;
t = "Hi";
console.log(t); // 41 // "Hi"

/* 
intersection(&) --> AND Operator --> Both side required true
*/

type typeOne = number;
type typeTwo = number;

let k: typeOne & typeTwo = 10;
