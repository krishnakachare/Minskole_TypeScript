/*
# Types in TypeScript:
    1. Primitive(immutable): string, number, boolean, undefined, null, never, unknown, void
    2. Special datatype: any, union(|)
    3. Non-Primitive(mutable, user defined): array, object, class, function, tuple, enum, interface
*/

// undefined datatype: can hold only one value which is undefined
// value: undefined
// datatype: undefined

// console.log(typeof undefined); // "undefined"

// let variable6: undefined = undefined;
// console.log(variable6);
// // variable6 = 10; //  error TS2322: Type '10' is not assignable to type 'undefined'.
// console.log(variable6);

// null datatype: can hold only one value which is null
// value: null
// datatype: object

let variable7: null = null;
console.log(variable7); // null

// variable7 = "Hi"; //  error TS2322: Type 'string' is not assignable to type 'null'.
