// readonly Property:
var k = {
    name: "JS",
    age: 10,
};
console.log(k); // { name: 'JS', age: 10 }
// before the readonly declaration
// k.name = "TS";
// console.log(k); // { name: 'TS', age: 10 }
// After the readonly declaration
k.name = "TS";
// error TS2540: Cannot assign to 'name' because it is a read-only property.
