// Ex:1 Write a function to check whether the `input` is a string or not.
// &quot;My random string&quot; -&gt; true
// 12 -&gt; false

const checkString = function (s) {
  if (typeof s === "string") {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

checkString(2323);
checkString("Hello");

// Ex:2 Write a function to check whether a string is blank or not.

const checkBlank = function (s) {
  if (s === "" || typeof s != "string") {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
};

checkBlank("");
checkBlank(5);
checkBlank("5");

// Ex:3 Write a function that concatenates a given string n times (default is 1).

const concatString = function (s, n = 1) {
  let newString = "";
  if (n === 1) {
    return s;
  }

  for (let i = 0; i < n; i++) {
    newString += s;
  }

  return newString;
};

console.log(concatString("Ha"));
console.log(concatString("Ha", 3));
console.log(concatString("Ha", 5));

// EX 4:Write a function to count the number of letter occurrences in a string.
// &quot;My random string&quot;, &quot;n&quot; -&gt; 2

const countLetters = function (s, letter) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === letter) {
      count = count + 1;
    }
  }

  return count;
};

console.log(countLetters("My random string", "n"));
console.log(countLetters("Pavle", "p"));

// let string = "My random string";
// console.log(string[0].toLowerCase());

// EX:5 Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

const findPosition = function (string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return i;
    }
  }
  return -1;
};

console.log(findPosition("pavlep", "l"));

// EX:6 Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

const findPosition2 = function (string, char) {
  let indexArray = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      indexArray.push(i);
    }
  }
  if (indexArray.length > 0) {
    return indexArray[indexArray.length - 1];
  }
  return -1;
};

console.log(findPosition2("pavlep", "p"));
console.log(findPosition2("recognizer", "r"));

// EX:7 Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.

const convertString = function (string) {
  let stringToArr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      stringToArr.push(null);
    } else {
      stringToArr.push(string[i]);
    }
  }
  return stringToArr;
};

console.log(convertString("My random string"));

//EX:8 Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

const checkPrime = function (number) {
  if (number === 2) {
    return "Prime";
  }
  if (number > 1 && number % 2 !== 0) {
    return "Prime";
  }
  return "Not Prime";
};

console.log(checkPrime(2));
console.log(checkPrime(28));

// EX:9 Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.

const joinString = function (string, separator = "-") {
  return string.split(" ").join(separator);
};
console.log(joinString("My random string"));
console.log(joinString("My random string", "+"));

// EX:10 Write a function to get the first n characters and add “...” at the end of newly created string.

// EX:11 Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.

const convertToArray = function (arr) {
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined && arr[i] !== NaN && arr[i] !== null) {
      sortedArr.push(+arr[i]);
    }
  }
  return sortedArr;
};
console.log(convertToArray(["1", "21", undefined, "42", "1e+3", Infinity]));

// EX:12 Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

const calcRetirement = function (year) {
  let currentYear = 2023;
  if (currentYear - year > 60) {
    return "She has already retired";
  } else if (currentYear - year > 65) {
    return "He has already retired";
  }

  return currentYear - year;
};

console.log(calcRetirement(1995));
console.log(calcRetirement(1960));

// EX:13 Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -&gt; 1st
// 11 -&gt; 11th

const humanizeNumber = function (number) {
  let stringNumber = number + "";
  if (
    stringNumber[stringNumber.length - 1] === "1" &&
    stringNumber[stringNumber.length - 2] !== "1"
  ) {
    return stringNumber + "st";
  }
  if (
    stringNumber[stringNumber.length - 1] === "2" &&
    stringNumber[stringNumber.length - 2] !== "1"
  ) {
    return stringNumber + "nd";
  }
  if (
    stringNumber[stringNumber.length - 1] === "3" &&
    stringNumber[stringNumber.length - 2] !== "1"
  ) {
    return stringNumber + "rd";
  }

  return stringNumber + "th";
};

console.log(humanizeNumber(1));
console.log(humanizeNumber(5));
console.log(humanizeNumber(52));
console.log(humanizeNumber(76));
console.log(humanizeNumber(11));
console.log(humanizeNumber(111));
console.log(humanizeNumber(121));
console.log(humanizeNumber(211));
console.log(humanizeNumber(53));
console.log(humanizeNumber(13));
console.log(humanizeNumber(12));
