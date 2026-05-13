//!SECTION1 higher order and callback function
function higerOrder(fn: Function): Function {
  return fn;
}

function hello() {
  console.log("Hello world");
}

higerOrder(hello)();

//!SECTION2 What is Scope in javascript?
