//!SECTION1 higher order and callback function
// function higerOrder(fn: Function): Function {
//   return fn;
// }
// function hello() {
//   console.log("Hello world");
// }
// higerOrder(hello)();
//!SECTION2 What is Scope in javascript?
var name2 = "ALamin"; //globally
function printName() {
    console.log(name2);
}
// printName();
// if (true) {
//   console.log(name2);
// }
//ANCHOR - local scope
function localScope() {
    var name2 = "Emon";
}
localScope();
