// Template literal (string interpolation)

// string: '', "", ``
// Dead/static
// `` --> Dynamic entity
// `${variableName}`

let str = "Hi";
let str2 = "JS";

// let a = "str";
let fullStr = `${str} ${str2}`;
console.log(fullStr);
console.log(typeof fullStr);
