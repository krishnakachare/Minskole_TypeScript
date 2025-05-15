var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function acessorDecorator(para1, para2, para3) {
    console.log(para1);
    console.log(para2);
    console.log(para3);
    console.log(para3.get);
}
class Abc4 {
    constructor(para) {
        this._a = 123;
        this.name = para;
    }
    get getPIN() {
        return this._a;
    }
}
__decorate([
    acessorDecorator
], Abc4.prototype, "getPIN", null);
