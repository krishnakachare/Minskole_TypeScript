/* enum :
enum listName {val1, val2,...}
*/
var list;
(function (list) {
    list[list["a"] = 0] = "a";
    list[list["b"] = 1] = "b";
    list[list["c"] = 2] = "c";
})(list || (list = {}));
// console.log(list); // { '0': 'a', '1': 'b', '2': 'c', a: 0, b: 1, c: 2 }
// console.log(list.a); // 0
var list2;
(function (list2) {
    list2[list2["a"] = 50] = "a";
    list2[list2["b"] = 51] = "b";
    list2[list2["c"] = 52] = "c";
})(list2 || (list2 = {}));
console.log(list2); // { '50': 'a', '51': 'b', '52': 'c', a: 50, b: 51, c: 52 }
console.log(list2.a); // 50
