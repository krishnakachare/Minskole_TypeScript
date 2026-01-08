// What is the interface: object, classes, function
// object: key, method
// what is method ?
// method == function
// object key contains a value as function
var obj = {
    keyOne: "TS",
    methodOne: function (para) {
        console.log(para);
    },
    //   methodOne: function () {
    //     console.log("I am method");
    //   },
};
obj.methodOne("I am method"); // I am method
