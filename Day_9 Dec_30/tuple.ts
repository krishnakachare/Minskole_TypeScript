let arr: number[] = [1, 2];
//                   0  1
console.log(arr);

// position
// length restrict

// tuple
// syntax:  let/const/var tupleName:[type1, type2, ..., typen] = [vlaue1, value2, ..., valuen]

// let tupleOne:[number, string] = [1, "ts"];
// let tupleOne:[number, string] = [1, 2]; // Type 'number' is not assignable to type 'string'

// let tupleOne:[number, string] = [1, "ts", true]; // Type '[number, string, boolean]' is not assignable to type '[number, string]'.

// Exception: push(), pop()
let tupleOne: [number, string] = [1, "ts"];
console.log(tupleOne.length); // 2
console.table(tupleOne);
// push()
// tupleOne.push(true); // TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
tupleOne.push("js");
console.table(tupleOne);
console.log(tupleOne.length); // 3

// pop()
