// constraints:

// function:
function add<T>(para1: T, para2: T): T {
  return (para1 as any) + (para2 as any);
}
console.log(add<number>(1, 1));
