// constraints: Able to fix/assign specific type to the generics variable(T)

// function:
function add<T>(para1: T, para2: T): T {
  return (para1 as any) + (para2 as any);
}
// console.log(add<number>(1, 1));

// para1:number

function add2<T extends number>(para1: T, para2: T): T {
  return (para1 as any) + (para2 as any);
}
console.log(add2(1, 1));
// console.log(add2("Hi", "JS")); //  error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

function check<T extends { length: number }>(para: T): T {
  return para;
}
console.log(check([1, 2]));
console.log(check("Hi"));
// console.log(check(10)); // Argument of type 'number' is not assignable to parameter of type '{ length: number; }'
// length --> number
