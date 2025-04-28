// get
// set
var Abc = /** @class */ (function () {
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
    return Abc;
}());
var a = new Abc("JS");
console.log(a); // Abc { sName: 'JS' }
// console.log(a.sName); //  error TS2341: Property 'sName' is private and only accessible within class 'Abc'.
// console.log(a.getName()); // Retriving: JS
console.log(a.getName); // Retriving: JS
