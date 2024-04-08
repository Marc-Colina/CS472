"use strict";

// 1. Implement code for the following JavaScript functions, and be sure to use "use strict";
// a) Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates
// and returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3])
// should be computed as 1^2 + 2^2 +3^2 = 14. Note: Write your Javascript code without using Imperative
// programming. i.e. Do NOT use any explicit looping construct; instead use functional programming
// style/approach.
const computeSumOfSquares = function (numbers) {
  const reducedValue = numbers.reduce(
    (sumAccumulator, current) =>
      (sumAccumulator = sumAccumulator + current * current),
    0
  );

  return reducedValue;
};

console.log(
  "Sum of squares with input: [1,2,3]: " + computeSumOfSquares([1, 2, 3])
);

// 1.
// b) Write a function named, printOddNumbersOnly, that takes as input, an array of numbers and it finds and
// prints only the numbers which are odd.
function printOddNumbersOnly(numbers) {
  return numbers.filter((number) => number % 2 === 1);
}

console.log(
  "Printing the odd numbers from input: [1,2,3,4,5,6,7,8,9]: " +
    printOddNumbersOnly([1, 2, 3, 4, 5, 6, 7, 8, 9])
);

// 1.
// c) Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and
// b, and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length,
// beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1),
// prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0,
// b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13,
// 21, 34", as output).
function printFibo(n = 1, a = 0, b = 1, fiboSequence = "") {
  let nextNumInFibo = a;
  if (n <= 0) return fiboSequence;
  fiboSequence += nextNumInFibo + " ";
  nextNumInFibo = a + b;

  return printFibo(--n, b, nextNumInFibo, fiboSequence);
}
console.log("Fibonacci numbers:" + printFibo(10, 0, 1));

// 2. Destructuring assignment:
// We have an object:
let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;
// alert(name);
// alert(age);
// alert(isAdmin);

// 3.Write the following JavaScript functions:
let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3257,
  },
];

// addBook, which will take title, author, and libraryID as inputs. It will create a new book object and add it to the
// library. addBook should return the newly created book.
function addBook(title, author, libraryID) {
  let newBook = { title, author, libraryID };
  libraryBooks.push(newBook);
  return newBook;
}

console.log(
  "Newly Added Book:" +
    JSON.stringify(addBook("Atomic Habits", "Adam Grant", "4567"), null, 2)
);

console.log(
  "Library books after addBook() method : " +
    JSON.stringify(libraryBooks, null, 2)
);

// getTitles, which will return all the book titles in libraryBooks in an alphabetically ordered array.
const getTitles = () => {
  console.log(libraryBooks.map((book) => book.title));
  return libraryBooks.map((book) => book.title).sort();
};

console.log("Book titles arranged alphabetically: " + getTitles());

// findBooks, which will take the keyword of title as input. It will find books which contain the given keyword in
// the title and return books alphabetically ordered by the author.
const findBooks = function (keyword) {
  return libraryBooks
    .filter((book) => book.title.includes(keyword))
    .sort((book1, book2) => book1.author.localeCompare(book2.author));
};
console.log(
  "Books with the keyword 'The' sorted by author : " +
    JSON.stringify(findBooks("The"))
);
