// Docoratores Factores:

function factory(para: string) {
  return function pqr(con: Function) {
    console.log(para); // FactoryFun
    console.log(con); // [class Abc]
  };
}

@factory("FactoryFun")
class Abc {
  name: string;
}
