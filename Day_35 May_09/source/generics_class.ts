// 1. type annotation for class:
class human {
  name: string;
  constructor(para: string) {
    this.name = para;
  }
  printName(): string {
    return this.name;
  }
}

// 2. interface with class:
interface Abcc {
  name: string;
  printName(): string;
}

class human2 implements Abcc {
  name;
  constructor(para) {
    this.name = para;
  }
  printName() {
    return this.name;
  }
}

// Generics with the class:
