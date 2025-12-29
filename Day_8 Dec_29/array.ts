// array type:
let b = 10;

// let a = [10, 20, 30, 40];
//        0  1   2   3

// Syntax for array type annotate:
// let/var/const variableName: type[] = [values];

let a: number[] = [10, 20, 30, 40];

// let aa: string[] = [10, 20, 30, 40]; // Type 'number' is not assignable to type 'string'.
// let aa: string[] = ["10", "20", "30", "40"];

// Array annotation:
let aa: Array<string> = ["10", "20", "30", "40"];

// can add multiple types in array:
let aaa: (string | number)[] = ["10", "20", 30, 40];
