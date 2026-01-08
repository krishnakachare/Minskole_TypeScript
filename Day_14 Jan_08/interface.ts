// What is the interface: structure for object, classes, function

// object: key, method

// what is method ?
// method == function
// object key contains a value as function

interface interfaceOne {
  keyOne: string;
  // method
  methodOne(para: string): void;
}

let obj: interfaceOne = {
  keyOne: "TS",
  // method
  methodOne(para) {
    console.log(para);
  },
  //   methodOne: function (para) {
  //     console.log("I am method");
  //   },
};

obj.methodOne("I am method"); // I am method
