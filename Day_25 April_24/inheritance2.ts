// super()

class check {
  name: string;
  constructor(para: string) {
    this.name = para;
  }
}

class check2 extends check {
  name1: string;
  constructor(para: string, para1: string) {
    super(para);
    this.name1 = para1;
  }
}
let k = new check2("RAM", "Sham");
console.log(k);
