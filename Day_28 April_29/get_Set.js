// get --> getter methods --> Acessor
// set --> setter method --> mutator
var Abc = /** @class */ (function () {
    // _sName: string;
    // #sName: string;
    function Abc(para) {
        this.sName = para;
    }
    Object.defineProperty(Abc.prototype, "getName", {
        get: function () {
            return "Retriving: " + this.sName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Abc.prototype, "updateName", {
        set: function (para) {
            this.sName = para;
        },
        enumerable: false,
        configurable: true
    });
    return Abc;
}());
var a = new Abc("JS");
console.log(a); // Abc { sName: 'JS' }
// console.log(a.sName); //  error TS2341: Property 'sName' is private and only accessible within class 'Abc'.
// console.log(a.getName()); // Retriving: JS
console.log(a.getName); // Retriving: JS
// set method use:
a.updateName = "TS"; // updation
console.log(a.getName); // Retriving: TS
