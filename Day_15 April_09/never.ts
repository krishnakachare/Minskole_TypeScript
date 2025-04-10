// never --> empty value

function showError(): never {
  throw new Error("I am never...!!!");
}
showError();
