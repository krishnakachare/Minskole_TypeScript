// Can able to assigne default type to the generics variable(T)

function add3<T = string>(para: T = "" as T) {
  console.log(typeof para);
}
add3(10); // number
add3(); // string
