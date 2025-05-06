// function as type:
// type fun = (para1: number, para2: number) => number;

// let add: fun = function (a, b) {
//   return a + b;
// };
// add (1, 2)
// add (1, "Hi")

// interface for function:
interface fun {
  (para1: number, para2: number): number;
}

let add: fun = function (a, b) {
  return a + b;
};
// add(1, 2);
// add(1, "Hi");