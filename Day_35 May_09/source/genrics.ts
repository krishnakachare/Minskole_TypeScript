// Advance Types in TS:
// Generic --> Is way of type annotation
// can type annotation --> mutipal places
// moto : flexible, reusable

// 1. Generics with the function:
// old way:
function get(para: number): number {
  return para;
}
console.log(get(5));

function get2(para: string): string {
  return para;
}
console.log(get2("JS"));

// diff function defination ? --> Same function defination but different type annotation

function get3(para: string | number): string | number {
  return para;
}
console.log(get2("JS"));
// console.log(get2(boolean));

// Use of generics: Can pass dynamic type
// 1. Generics with function:
function get4<type>(para: type): type {
  return para;
}
console.log(get4(true));
// let a = 10

// T => type (variable)
function get5<T>(para: T): T {
  return para;
}
console.log(get5(true));

// Able to restric type by placeholder
// let a: number = 10;
function get6<T>(para: T): T {
  return para;
}
console.log(get6<boolean>(true));
// console.log(get6<boolean>("Hi"));
