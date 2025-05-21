var math;
(function (math) {
    function add(a, b) {
        console.log("I am Namespace");
        return a + b;
    }
    math.add = add;
})(math || (math = {}));
