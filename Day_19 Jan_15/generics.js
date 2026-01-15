"use strict";
function fun1(para1, para2) {
    if (typeof para1 == "number" && typeof para2 == "number") {
        console.log("I am number");
    }
    if (typeof para1 == "string" && typeof para2 == "string") {
        console.log("I am string");
    }
}
fun1(10, 2);
fun1("Hi", "TS");
let obj = {
    key1: "TS",
    key2: 12,
};
let obj2 = {
    key1: true,
    key2: {},
};
