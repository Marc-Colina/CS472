"use strict";

//1. Define a function max() that takes two numbers as arguments and returns the largest of them.
//Use the if-then else construct available in Javascript.
let max = (num1, num2) => {
  if (num1 > num2) return num1;
  else return num2;
};
console.log("Larger number between 5 and 7 is : " + max(7, 5));

// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1, num2, num3) {
  let largest = num1;
  if (num2 > num1 && num2 > num3) largest = num2;
  else if (num3 > num1) largest = num3;
  return largest;
  // or an alternate and easier way would be to do Math.max. Please uncommment other code as needed.
  //   return Math.max(num1, num2, num3);
}
console.log("The largest number is: " + maxOfThree(4, 5, 5));

// 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
// otherwise.
let isVowel = function (character) {
  const vowels = "aeiouAEIOU";
  return vowels.indexOf(character) !== -1;
};
console.log("A is a vowel : " + isVowel("A"));

// 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in the
// given array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

function multiply(nums) {
  let product = 1;
  for (let num of nums) {
    product *= num;
  }
  return product;
}

console.log("Sum of [1,2,3,4] is : " + sum([1, 2, 3, 4]));
console.log("Product of [1,2,3,4] is : " + multiply([1, 2, 3, 4]));

//5. Define a function reverse(str) that computes the reversal of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".
let reverse = function (stringToBeReversed) {
  let reversedString = "";
  if (typeof stringToBeReversed === "string") {
    for (let index = stringToBeReversed.length - 1; index >= 0; index--) {
      reversedString += stringToBeReversed.charAt(index);
    }
  }
  return reversedString;
};

console.log("Reverse of 'jag testar' is: " + reverse("jag testar"));

// 6. Write a function findLongestWordLength() that takes an array of words and returns the length of the longest
// one
function findLongestWordLength(words) {
  let longestWordLength = 0;
  for (let word of words) {
    if (word.length > longestWordLength) longestWordLength = word.length;
  }
  return longestWordLength;
}
console.log(
  'Length of longest word in array["I", "Love", "WAP", "Very", "Interesting"] is : ' +
    findLongestWordLength(["I", "Love", "WAP", "Very", "Interesting"])
);

//7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
//containing only those words that were longer than i characters
let filterLongWords = (words, i) => {
  let filteredArrayOfWords = [];
  for (let word of words) {
    if (word.length > i) filteredArrayOfWords.push(word);
  }
  return filteredArrayOfWords;
};
console.log(
  'Array of words with length greater than 4 given : ["WAP", "is", "very", "interesting", "I", "love", "programming"] are: ' +
    filterLongWords(
      ["WAP", "is", "very", "interesting", "I", "love", "programming"],
      4
    )
);
