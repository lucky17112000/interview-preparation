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
