// let arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(arrayOfNums);
// let spliced = arrayOfNums.splice(4, 0);
// console.log(spliced);
// console.log(arrayOfNums);

// let sliced = arrayOfNums.slice(1, 5);
// console.log(sliced);

// let arrayToConcat = ["a", "b", "c"];

// let concatenated = arrayToConcat.concat("d");
// console.log(arrayToConcat);
// console.log(concatenated);
// console.log(arrayOfNums);

// let arrayofLetters = ["a", "b", "c"];
// console.log(arrayofLetters.includes("d"));
// let arr = [
//   { name: "Marc", age: 25 },
//   { name: "Marcs", age: 30 },
//   { name: "Marc", age: 30 },
// ];

// let arrayOfWords = ["apple", "wood"];

// let objectParam = { name: "Marc", age: 32 };

// let result = arr.every((obj) => obj.name === objectParam.name);
// console.log(result);

// let result2 = arrayOfWords.findIndex((word) => word === "apple");
// console.log(result2);

// let str = "hello world";
// let words = str.split(" "); // Split the string into words using a space as the separator.
// console.log(words); // Output: ['hello', 'world']

// let chars = str.split(""); // Split the string into individual characters.
// console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// let limitedWords = str.split("-", 2); // Limit the number of results.
// console.log(limitedWords); // Output: ['hello']

// let words = ["hello", "world"];
// let greeting = words.join("+"); // Join the array elements into a string with a space separator.
// console.log(greeting); // Output: 'hello world'

// let numbers = [1, 2, 3];
// let numberString = numbers.join(); // By default, the separator is a comma.
// console.log(numberString); // Output: '1,2,3'

// let hyphenated = numbers.join("-"); // Using a hyphen as the separator.
// console.log(hyphenated); // Output: '1-2-3'

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((acc, currentValue) => {
//   acc = acc + currentValue;
//   return acc;
// }, 0);
// console.log(sum); // Output: 10

// let arr = ["I", "study", "JavaScript"];
// // from index 2
// // delete 0
// // then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");
// console.log(arr); // "I", "study", "complex", "language", "JavaScript"

// let pt1 = {
//   x: 5,
//   y: 4,
// };

// let pt2 = {
//   x: 5,
//   y: 4,
// };

// console.log(pt1 == pt2);
// console.log(pt1 === pt2);

// console.log("5" == 5);

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum());

// function log() {
//   console.log("No Arguments");
// }
// function log(x) {
//   console.log("1 Argument: " + x);
// }
// function log(x, y) {
//   console.log("2 Arguments: " + x + ", " + y);
// }
// log();
// log(5);
// log(6, 7);

// function sum(x, y, ...more) {
//   //"more" is array of all extra passed params
//   let total = x + y;
//   console.log(arguments);
//   if (more.length > 0) {
//     for (let i = 0; i < more.length; i++) {
//       total += more[i];
//     }
//     console.log(total);
//     return total;
//   }
// }
// sum(5, 5, 5);
// sum(7, 7, 7, 7, 7);
// let timerId = setTimeout(() => alert("never happens"), 1000);
// alert(timerId); // timer identifier
// //clearTimeout(timerId);
// alert(timerId); // same identifier (doesn't become null after canceling)

// // repeat with the interval of 2 seconds
// let timerId = setInterval(() => alert("tick"), 2000);

// // after 5 seconds stop
// setTimeout(() => {
//   clearInterval(timerId);
//   alert("stop");
// }, 5000);

// setTimeout(() => alert("Hello"), 0);
// alert("World");

// const me = {
//   first: "John",
//   last: "Smith",
//   getFullName: function () {
//     return this.first + " " + this.last;
//   },
// };
// const log = function (height, weight) {
//   // ‘this’ refers to the invoker
//   console.log(this.getFullName() + height + " " + weight);
// };

// const logMe = log.bind(me, "10cm", "90kg");
// logMe("180cm", "70kg"); // John Smith 180cm 70kg
// // log.call(me, "180cm", "70kg"); // John Smith 180cm 70kg
// // log.apply(me, ["180cm", "70kg"]); // John Smith 180cm 70kg
// // log.bind(me, "180cm", "70kg")(); // John Smith 180cm 70kg

// const user = {
//   salute: "",
//   greet: function () {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench = function (newSalute) {
//       //innerfunction
//       this.salute = newSalute;
//     };
//     //setFrench.bind(this, "Bonjour")();
//     //setFrench.call(this, "Bonjour");
//     //setFrench.apply(this, ["Bonjour"]);
//     //setFrench("Bonjour");
//     console.log(this.salute); //Bonjour??
//   },
// };
// user.greet(); //HelloHello??

// const user = {
//   salute: "",
//   greet: function () {
//     const self = this;
//     self.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench = function (newSalute) {
//       //innerfunction
//       self.salute = newSalute;
//     };
//     //setFrench.bind(this, "Bonjour")();
//     //setFrench.call(this, "Bonjour");
//     //setFrench.apply(this, ["Bonjour"]);
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour??
//   },
// };
// user.greet(); //HelloHello??

// "use strict";
// const x = {
//   a: 1,
//   b: 2,
//   add() {
//     return this.a + this.b;
//   },
// };
// console.log(x.add());
// const y = {
//   a: 1,
//   b: 2,
//   add: () => {
//     return this.a + this.b;
//   },
// };
// console.log(y.add());

// class User {
//   constructor(name = "Anonymous") {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }

// function User(name = "Anonymous") {
//   this.name = name;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hello, ${this.name}!`);
// };

// fred = new User();
// console.log(fred); //User actual object
// console.log(fred.__proto__); //User.prototype
// console.log(User.prototype); //see sayHi method within
// fred.sayHi();
// bob = new User("Bob");
// console.log(bob);
// bob.sayHi();
// 14;

// const numbers = [1, 5, 18, 2, 77, 108];
// // numbers.forEach((number) => {
// //   if (number % 2 != 0) console.log(number);
// // });

// numbers
//   .filter((number) => number % 2 == 1)
//   .forEach((number) => console.log(number));

// function sum(numbers = []) {
//   let sumOfNumbers = 0;
//   numbers.forEach((number) => {
//     if (number > 20) sumOfNumbers += number;
//   });
//   return sumOfNumbers;
// }

// console.log(sum([10, 20, 50, 30, 8]));

// function sum(numbers = []) {
//   return numbers
//     .filter((number) => number > 20)
//     .reduce((acc, curr) => acc + curr, 0);
// }

// const getNewArray = function (strings) {
//   return strings
//     .filter((string) => string.length >= 5)
//     .filter((string) => string.includes("a"));
// };

// console.log(
//   getNewArray(["Hello", "Wonderful", "Happy", "People", "Have a great day"])
// );

//using bind
// let groupBind = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach(
//       function (student) {
//         console.log(this.title + ": " + student);
//       }.bind(this)
//     );
//   },
// };
// groupBind.showList();

//using call
// let groupBind = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach((student) =>
//       function (student) {
//         console.log(this.title + ": " + student);
//       }.call(this, student)
//     );
//   },
// };
// groupBind.showList();

//using apply
// let groupBind = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach((student) =>
//       function (student) {
//         console.log(this.title + ": " + student);
//       }.apply(this, [student])
//     );
//   },
// };
// groupBind.showList();

//Arrow Function
// let groupBind = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach((student) =>
//       console.log(this.title + ": " + student)
//     );
//   },
// };
// groupBind.showList();

//won't work
// let groupBind = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach(
//       function (student) {
//         console.log(this.title + ": " + student);
//       }.apply(this, [student])
//     );
//   },
// };
// groupBind.showList();

//won't work
// let groupApply = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach(
//       function (student) {
//         console.log(this.title + ": " + student);
//       }.apply(this, [student])
//     ); // Here we use apply directly on the function expression
//   },
// };

// groupApply.showList();

//Self pattern
// let groupBind = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     const self = this;
//     this.students.forEach(function (student) {
//       console.log(self.title + ": " + student);
//     });
//   },
// };
// groupBind.showList();
