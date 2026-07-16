"use strict";
/*
Interface: Creating structure for the object (object, class, function)

Synatx:
interface interfaceName {
         keyName: typeName
}
*/
let obj3 = {
    fName: "TS",
};
let obj4 = {
    fName: "TS",
    methodOne: function () {
        return 2;
    },
};
console.log(obj4.fName); // "TS"
obj4.fName = "JS"; // Cannot assign to 'fName' because it is a read-only property.
console.log(obj4.fName); // "JS"
