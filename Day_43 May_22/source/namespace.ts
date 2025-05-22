// namespace: logical Groupping of modules
// namespace namespaceName

export namespace math {
  export function add(a, b) {
    console.log("I am Namespace");
    return a + b;
  }
}

// Can access namespace within the same file
// console.log(math.add(1, 2)); // 3
