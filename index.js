function higherOrder(fn) {
    fn(); // অন্য function কে call করছে
}
function sayHello() {
    console.log("Hello!");
}
higherOrder(sayHello); // Output: Hello!
