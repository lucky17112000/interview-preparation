//!SECTION1 higher order and callback function
// function higerOrder(fn: Function): Function {
//   return fn;
// }

// function hello() {
//   console.log("Hello world");
// }

// higerOrder(hello)();

//!SECTION2 What is Scope in javascript?

const name2: string = "ALamin"; //globally
function printName() {
  console.log(name2);
}
// printName();
// if (true) {
//   console.log(name2);
// }

//ANCHOR - local scope
function localScope() {
  const name2 = "Emon";
  console.log(name2);
}

localScope();

//ANCHOR - lblock scope
for (let i = 0; i < 5; ++i) {
  const name2 = "Emon";
  console.log(name2);
}
if (6 % 2 === 0) {
  const name2 = "Emon";
  console.log(name2);
}
