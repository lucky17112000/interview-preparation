//!SECTION1 higher order and callback function
// function higerOrder(fn: Function): Function {
//   return fn;
// }

// function hello() {
//   console.log("Hello world");
// }

// higerOrder(hello)();

//!SECTION2 What is Scope in javascript?

// const name2: string = "ALamin"; //globally
// function printName() {
//   console.log(name2);
// }
// printName();
// if (true) {
//   console.log(name2);
// }

//ANCHOR - local scope
// function localScope() {
//   const name2 = "Emon";
//   console.log(name2);
// }

// localScope();

//ANCHOR - lblock scope
// for (let i = 0; i < 5; ++i) {
//   const name2 = "Emon";
//   console.log(name2);
// }
// if (6 % 2 === 0) {
//   const name2 = "Emon";
//   console.log(name2);
// }

//!SECTION4 call , apply and bind
//this keyword:thisnkeyword helps us to use any function reuse in diffrent context
//role1:implicit binding
//role2:explicit binding
//role3:new binding
//role4:window binding

//!SECTION implicit binding
// const sakib = {
//   name: "Sakib Al Hasan",
//   age: 36,
//   printName: function () {
//     console.log(this.name);
//   },
// };

// sakib.printName();

//!SECTION explicit binding
const printName = function (v1, v2, v3) {
  console.log(this.name);
};

const tamim = {
  name: "Tamim Iqbal",
  age: 37,
};

// printName.call(tamim);

const v1 = "Bangladesh";
const v2 = "India";
const v3 = "Pakistan";
const v = [v1, v2, v3];
// printName.apply(tamim, v);
const newFunc = printName.bind(tamim);
newFunc(v1, v2, v3);

const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];
const unique = [...new Set(numbers)];
console.log(unique);

interface User {
  name: string;
  age: number;
  email: string;
}
function greetUser(user: User) {
  console.log(
    `Hello, ${user.name}! Your email is ${user.email} and you are ${user.age} years old.`,
  );
}
greetUser({ name: "Alice", age: 30, email: "hello@gmail.com" });

const myType = "strong" as string;
console.log("tehal");

class Person {
  private _name!: string;
  private _age!: number;
  set name(value: string) {
    this._name = value;
  }
  set age(value: number) {
    this._age = value;
  }
  get name(): string {
    return this._name;
  }
  get age(): number {
    return this._age;
  }
}

const Person1 = new Person();
Person1.name = "Alamin";
Person1.age = 25;
console.log(Person1.name);
console.log(Person1.age);
