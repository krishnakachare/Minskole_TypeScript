class classThree2 {
  readonly key1: boolean = true;
  public key2: string = "Hi TS";
  private key3: string = "I am key3";
  protected key4: string = "I am protected";
}

// public, private, protected
// public --> Default access representing
// private --> private only accessible within class

let obj12 = new classThree2();
// console.log(obj12.key3); // Property 'key3' is private and only accessible within class 'classThree2'
// Protected
// console.log(obj12.key4); // Property 'key4' is protected and only accessible within class 'classThree2' and its subclasses

class classThree3 extends classThree2 {
  //   a = this.key3; // Property 'key3' is private and only accessible within class 'classThree2'.
  b = this.key2;
  c = this.key4;
}

// protected: Can acess within class & subclass

/* 
static
readonly
public
private
protected
*/
