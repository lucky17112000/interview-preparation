#### 1. What is the Higher Order function & callback function in JavaScript?

- there are several types of function available in typescript/javascript. higer order function one of them and higer order function is special type of function that can receive as parameter another function and also able to return another function as well.

```
function higerOrder(fn: Function): Function {
  return fn;
}

function hello() {
  console.log("Hello world");
}

higerOrder(hello)();
more example:map, filter , forEach

```

- Callback function is a function which is passed as an argument to another function
- Higer order function receives a function that is called callback function and it can be call inside the body of higer order function.

```
function higerOrder(fn: Function): Function {
  return fn;
}

function hello() {
  console.log("Hello world");
}

higerOrder(hello)(); hello is a callback function

```

#### 2.What is Scope in javascript?

- Scope is Boundary of variable it's permission that a variable wjere we can access and where we cannot access.
- In Javascript/Typescript there are three types of scope available. global scope, local scope and block scope.
- global scope: variable that decleared outside of the local scope and block sope and we can access this variable from any where in the program.

```
const name2: string = "ALamin"; //globally
function printName() {
  console.log(name2);
}
printName();
if (true) {
  console.log(name2);
}
```

- local scope: variable that decleared inside the function we are able to access this variable only inside this function. this variable is called local variable and this scope is called local scope.

```
function localScope() {
  const name2 = "Emon";
  console.log(name2);
}

localScope();
```

- block scope: variable that decleared inside the block we are able to access this variable only inside this block. this variable is called block variable and this scope is called block scope.
- example of block scope:if statement, for loop, while loop etc.

```
for (let i = 0; i < 5; ++i) {
  const name2 = "Emon";
  console.log(name2);
}
if (6 % 2 === 0) {
  const name2 = "Emon";
  console.log(name2);
}
```

#### What is the difference between Call, Apply, and Bind?

- when we need explicit binding, we can use call , apply , and binding method. these three method are used to set the value of this keyword inside a function.
- call method: call method is used to call a function with a given this value and arguments provided individually.
- apply method: apply method is used to call a function with a given this value and arguments provided as an array.
- bind method: it as like call method but it dosenot called the function immidiatly instead it return a new function with the this value and arguments provided.

```
//role2:explicit binding




//!SECTION explicit binding
const printName = function (v1, v2, v3) {
  console.log(this.name);
};

const tamim = {
  name: "Tamim Iqbal",
  age: 37,
};

 printName.call(tamim);

const v1 = "Bangladesh";
const v2 = "India";
const v3 = "Pakistan";
const v = [v1, v2, v3];
 printName.apply(tamim, v);
const newFunc = printName.bind(tamim);
newFunc(v1, v2, v3);
```
