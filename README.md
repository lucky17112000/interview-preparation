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

#### 3 What is the difference between Call, Apply, and Bind?

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

#### 4.What is the difference between undefined and null ?

- undefined: undefined is a primitive value that is automatically assinged to variable when it is decleraed but not intialized. it is also represent absence of value. this type is undefined.
- null: null also a primitive value that represent absence value but intensionally developer assign null in any variable.

```
let a = undefined;
let b = null;

console.log(a == b);   // true
console.log(a === b);  // false

console.log(typeof a); // "undefined"
console.log(typeof b); // "object"  this is a js bug

// Math এ ব্যবহার
console.log(a + 1); // NaN
console.log(b + 1); // 1 ⚠️ (null = 0 হিসেবে কাজ করে)

```

#### 5.What is Cookie?

- cookie is a small piece of data that is stored on the browser by web server.it is use to store user information and prefecrnces.it helps us to communicate between client and server.every time we are required to send cookie to the server when we want to send request to the srver.
- how to work cookie:
  - website login
  - server craft cookie and send to the browser
  - borwser store this cookie
  - after thet when we send request to the server then browser send this cookie to the server
  - server recognize me by this cookie and send response to the browser
- cookies properties:
  - expires: how long the cookie will be stored in the browser
  - path: the path of the cookie
  - secure: only https
  - httpOnly: javaScript cannot access this cookie
  - sameSite: only send cookie to the same site
- there are three types of cookie: session cookie, persistent cookie and third party cookie.
- drawback of cookie:
  - size is too small (4KB)
  - XSS attack
  - privacy issue

  ```
  create cookie
  document.cookie = "username=ALamin; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
  read cookie
  console.log(document.cookie);
  delete cookie
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

  ```

#### 6.what is promise in javascript?

- A Promise is like a guarantee that something will happen in the future — either success or failure.
- promise is an object that handle javascript asynchronouse operation
- it has 3 state: pending , fullfilled and rejected
- when the operation is success then resolve is called and .then() handle the result
- when the operation is filed then reject iscalled and .catch() handle the error
- promise was introduce for resolve the callback hell porblem and make asynchronous code clean and more readable.

```
// Same job — different style

//
function getUser() {
    fetch("api/user")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

//  Async/Await way
async function getUser() {
    try {
        const res = await fetch("api/user");
        const data = await res.json();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}
```

#### 7.What is an event loop? How does javaScript handle asynchronous tasks?

- event loop is a mecahanism that handle asynchronous task in javascript. we know javasript is a single thread programming language, it means javascript can execute one task at a time. but in rea;l world application we need to handle multiple task at at time.
- so how to chandle multiple task at a time..?
- in v8 engine have a call stack. it is able to hanlde synchronous task one by one. when call stack get any asynchronopus task then it send this to web api then handle it web api. after that it send callback function to this call abck queue.now event loop craft a bridge between call stack and call back queue.event loop cheak call stack is empty or not if it is empty then it send this callback function to call stack and execute this synchronously.this is how javascript handle asynchronous task.
  ![alt text](https___dev-to-uploads.s3.amazonaws.com_uploads_articles_lqhhnr6n1w1l13g75ki0-1.webp)

#### 8.How can you eliminate duplicate values from a JavaScript array?

- there are several ways to elimante duplicate values from a JavaScript array. some of them are:
- filter + indexOf - this method is used to filter the array and return only unique values.
- for loop + indexOf - this method is used to loop through the array and return only unique values.
- filter + findIndex - this method is used to filter the array and return only unique values.

##### all complexity O(n^2) which is not good for large array

- best approch by SET - its complexity is O(n) and it is very easy to implement.

```
const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];
const unique = [...new Set(numbers)];
console.log(unique);
```

## Typescript

#### 1.What is an Interface in typescript?

- interface is a bluprint or contarct of an object
- it help us to define the structure of an object.it is also used to define the type of function and class
- interface is a compile time feature and it is not exist in runtime

```
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
```

#### 2.What is the difference between Type and Interface in typescript?

- type and interface are both used to define the structure of an object but there are some difference between them.
- intreface not supoport primitive type but type support primitive type
- interface not support union type but type support union type
- interface not support tuple type but type support tuple type
- in intrface we can extends by extends keyword but in type we can extends by intersection.
- in interface we cam merge two interface but in type we cannot merge two type.
- we can implemant class by both intreface and type.
  | Feature | Interface | Type |
  |---|---|---|
  | Primitive Type | ❌ Not Supported | ✅ Supported |
  | Union Type | ❌ Not Supported | ✅ Supported |
  | Tuple Type | ❌ Not Supported | ✅ Supported |
  | Extend | ✅ `extends` keyword | ✅ `&` Intersection |
  | Declaration Merging | ✅ Can merge two Interfaces | ❌ Cannot merge two Types |
  | Class Implementation | ✅ Supported | ✅ Supported |

#### 3. What is a type assertion in typescript?

- type assertion is a way to tell the compiler about the type of variable.it is also called type casting.
- type assertion is used when user sure about the type of variable but compiler is not sure about it.

```
const myType =  "strong" as string;
```

#### 4.How many access modifiers are there in typeScript?

- access modifiers are used to control the access of class mambers. there are three access modifiers in typescript: public, private and protected.

#### 5.What is the difference between public, private, and protected access modifiers?

- public : public access modifier is used to make the class mamber accesible from anywhere. by default all class members are public.
- private: when we use private modifier into any class member then it only accessible for this class and it is not accessible for any other class.
- protected: when we use protected modifier into any class member it can be accesible for its own class and which class is extende or inherit this class but it is not accessible for any other class.

#### 6.What are the three main primitive data types in TypeScript?

- primitive data type is most basic data type in typescipt. it only one value at a time and it is immutable.
- there are three main primitive data type in typescript: string, number and boolean. also null and undefined primitive data type
- string : string is sequmce of characters and it is used to reresend of text.
- number : number is used to represent of numeric value and it can be integer or floating point number.
- boolean : boolean is used to represent of logical value and it can be true or false.

#### 7.What are getters/setters?

- getters and setters are used to access and modify the private members of a class.getter is used to get the value of private memeber and setter is used to set the value of private memeber.

```
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

```

#### 8.Describe the difference between any and unknown types in Typescript. When would you use each?

- any and unknown both are used for when we are not sure aboout the type of variable.but there are some diffrent between them.
- any; when we use asy type for any variable then typescript allow us to assing any type of value to this variable but it ois not safe because it can lead to runtime error.
- unknown: when we use unknown type for any variable then typescript allow us to assing any type of value to this variable but it is safe because it does not allow us to access any property or method of this variable without type assertion.

```
let a: any = 10;
a = "hello";
a = true; // no error
let b: unknown = 10;
b = "hello";
b = true; // no error
console.log(a.length); // no error but it will be undefined
console.log(b.length); // error because we cannot access any property or method of unknown type without
```

## Node js

#### 1.What is the difference between blocking I/O and Non-blocking I/O? and why is it significant?

- blocking I/O means programme wait for executaion for current task after complete this task then execution next task.but non blocking I/O is able to execute all task immediately without waiting for any task to cpmplete and retrun result via callback or promise.
- we know that node js is single threded. node js have to handle multiple task at a time . if node js use blocking I/O then it will very slow in production. but node js magically use non blocking I/O. as a result noode js is very fast and efficiently handle multiple task by one thread.

#### 2. 3.4.What is the Event loop in Node.js and what are its key features/How Node.js handles multiple tasks even after being single-threaded??

- event loop is a mechanism that handle asynchronous task in node js. we know node js is a single thread programming language, it means node js can execute one task at a time. but in real world application we need to handle multiple task at at time.
- event loop key features:
  - it is a infinite loop that continously cheak the call stack and call back queue.
  - it is non blocking and it is able handle multiple task at a time.
  - it handle asynchonous task efficintly by using callback and promise.
  - it is a part of v8 engine and it is implemented in c++.

#### 5.What is the difference between npm and yarn? where and when they should be used?

- npm(node package manager) and yarn(yet another resource negotiator) both are package manager for node js.they are used for managing dependecies and package in node js project.
- npm is the default package manager for node js and it is come with node js installation.
- yarn is an alternative package manager for node js and it is developed by facebook.
- npm use:
- for small project
- simple workflow
- industry standard flow
- yarn use:
  - for large project
  - complex workflow
  - better performance

#### 6.What are node.js streams? How does it work?

- usually for big data we use sream because it divide data chunk by chunk and process this data chunk by chunk. as a result it is very fast and efficient for handling big data. after process one chunk of data then process next chunk of data. it is also used for handling real time data and it is also used for handling file system.
- there are four types of stream in node js: readable stream, writable stream, duplex stream and transform stream.

#### 7. What is middleware in node.js?

- middlware is a function it work as a bridge between request and response.it is use handle request and response in node js application , it is also used for handling authentication, authorization, logging, error handling and many more. it can block request and modify request and response .
- there are two types of middleware in node js: application level middleware and router level middleware.
- application level middleware is used to handle request and response for all routes and router level middleware is used to handle request and response for specific route.

#### 8.What is Node.js EventEmitter?

- even emitter ia core module of node js and it is used handle event in node js application.
- it work like-> emit the event that means send the signal and event listen that means wait and react.
- important method of event emitter:
- on: it is used for listen the event
- emit: it is trigger the event
- once: it is execute for one time and then it will be remove from event listener

## Express js

#### 1.How to do Cross-Origin Resource Sharing in express.js?

- cross origin resource sharing is a machanism that allow us to access resource from diffrent origin. by default web browser not allow to acess resource from diffrent origin but we can use cors midlawre to acess resource from diffrent origin.

```
app.use(
  cors({
    origin: "http://localhost:3000",
  })
)
```
