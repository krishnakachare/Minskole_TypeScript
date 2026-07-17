"use strict";
/*

interface --> structure for object --> object, class, function


function:

*/
let funOne = function (para1, para2) {
    return para1 + para2;
};
let funOne2 = function (para1, para2) {
    return para1 + para2;
};
funOne2(1, 2);
// funOne2(1, "Hi"); //  error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
