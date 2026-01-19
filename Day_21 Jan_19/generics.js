/*
Utility Types: `Partial`, `Required`, `Readonly`
*/
var obj = {
    key1: 10,
    key2: "TS",
};
console.log(obj);
// obj.key1 = 100; //  TS2540: Cannot assign to 'key1' because it is a read-only property.
console.log(obj);
