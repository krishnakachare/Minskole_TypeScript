// 1. Comman JS module system:
// npm i --save-dev @types/node
// tsconfig.json --> "types": ["node"],

let a = "I Am a variable, Going to export";

function funn() {
  console.log("I AM Funn");
}

let obj4 = {
  key2: 10,
};

interface interfaceExpo {
  key1: string;
}

// module.exports = a;
// module.exports = funn;
// module.exports = obj4;

// module.exports = [a, funn, obj4];
module.exports = { a, funn, obj4 };

// module.exports = interfaceExpo;

// File1 code:
// export code ---> JSON Object ---> transfer (scope: upto project) --> imported code
