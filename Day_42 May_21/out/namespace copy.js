var math;
(function (math) {
    function add(a, b) {
        return a + b;
    }
    math.add = add;
})(math || (math = {}));
console.log(math.add(1, 2));
