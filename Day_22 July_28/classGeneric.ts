// interface classInterFace {
//   a: number;
//   methodOne(): void;
// }

// // class classs implements classInterFace {
// class classs {
//   a: number = 10;
//   methodOne(): void {
//     console.log("I am method One");
//   }
// }

// Generics with class:

// interface classInterFace<type1, type2> {
//   a: type1;
//   methodOne(): type2;
// }

// class classs implements classInterFace<number, void> {
//   a;
//   constructor(para: any) {
//     this.a = para;
//   }
//   methodOne() {
//     console.log("I am method One");
//   }
// }

class classs<type1> {
  a: type1;
  constructor(para: type1) {
    this.a = para;
  }
  methodOne(): void {
    console.log("I am method One");
  }
}

let objj = new classs<number>(10);
