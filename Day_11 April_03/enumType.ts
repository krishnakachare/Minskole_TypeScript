/* 12. enum :
enum listName {val1, val2,...}
*/
enum list {
  a,
  b,
  c,
}
// console.log(list); // { '0': 'a', '1': 'b', '2': 'c', a: 0, b: 1, c: 2 }
// console.log(list.a); // 0

enum list2 {
  a = 50,
  b,
  c,
}
console.log(list2); // { '50': 'a', '51': 'b', '52': 'c', a: 50, b: 51, c: 52 }
console.log(list2.a); // 50
