// staic properties & metods
// readOnly properties
// Access modifies: Class -->
// Public
// Private
// Protected
// 1. public:
// class Abc {
//   public namee: string = "TS";
//   getName() {
//     return this.namee;
//   }
// }
// let a = new Abc();
// console.log(a); // Abc { namee: 'TS' }
// console.log(a.getName()); // TS
// // private:
// class Abc {
//   private namee: string = "TS";
//   getName() {
//     return this.namee;
//   }
// }
// let a = new Abc();
// // console.log(a.namee); // error TS2341: Property 'namee' is private and only accessible within class 'Abc'.
// console.log(a.getName()); // TS
// protected:
var Abc = /** @class */ (function () {
    function Abc() {
        this.namee = "TS";
    }
    Abc.prototype.getName = function () {
        return this.namee;
    };
    return Abc;
}());
var a = new Abc();
// console.log(a.namee); // error TS2445: Property 'namee' is protected and only accessible within class 'Abc' and its subclasses.
console.log(a.getName()); // TS
