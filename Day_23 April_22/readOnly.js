// class Abc {
//   name: string = "RAM";
// }
// let a = new Abc();
// console.log(a);
// Can able to update properties of a
//  let a = { name: 'RAM' }
//  a.name // 'RAM'
//  a.name = "TS"
//  console.log(a) // { name: 'TS' }
// console.log(a.name); // RAM
// a.name = "TS";
// console.log(a.name); // TS
// console.log(a); // Abc { name: 'TS' }
//
var Abc = /** @class */ (function () {
    function Abc() {
        this.name = "RAM";
        //   readonly print(): void {
        //     console.log(`Print method: ${this.name}`);
        //   }
    }
    return Abc;
}());
var obj = new Abc();
console.log(obj); // Abc { name: 'RAM' }
obj.name = "TS"; // error TS2540: Cannot assign to 'name' because it is a read-only property.
console.log(obj);
