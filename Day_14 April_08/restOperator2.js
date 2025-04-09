// function : rest operator
// function abc(para) {
//     console.log(para, typeof para);
// }
// abc(10);
// abc(10, "Hi");

// rest operator:
function abc(...para) {
    console.log(para, typeof para);
}
abc(10, "Hi", "JS", "TS"); // [ 10, 'Hi', 'JS', 'TS' ]  object


// let a = 10;
// let b = 10, "Hi", "JS", "TS"
//  b =[10,"Hi", "JS", "TS"]
