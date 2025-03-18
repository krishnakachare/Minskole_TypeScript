console.log("hi");

// function print(para) {
//     console.log(`Hi ${para}`);
// }
function print(para) {
    if (typeof (para) === "string") console.log(`Hi ${para}`);
}
// print("Ram"); // Hi Js
// print(50); // Hi 50

// function add(num1, num2) {
//     return (num1 + num2)
// };

function add(num1, num2) {
    if (typeof (num1) === "number" && typeof (num2) === "number") {
        return (num1 + num2);
    };
};
let ans = add("1", 2);
console.log(ans); // 12 // undefined