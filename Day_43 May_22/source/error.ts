// Error: Try to read error properly and fix your code accordingly

// let a: string = 12;
// error TS2322: Type 'number' is not assignable to type 'string'.8

// Error handling:
try {
  // Always exectte first
  console.log("I am try block");
  object.a;
} catch (error) {
  // When getting errors in try
  console.log("I am error block");
  console.log("See Error MSG:" + error);
} finally {
  // Always execute
  console.log("I am finally block");
}
