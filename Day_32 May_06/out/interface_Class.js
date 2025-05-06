class human {
    constructor(para) {
        this.name = para;
    }
    printName() {
        return this.name;
    }
}
let ram = new human("RAM");
console.log(ram);
console.log(ram.printName());
