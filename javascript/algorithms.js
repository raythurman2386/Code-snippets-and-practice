// Adds a ts checker to you app
//@ts-check

// Hackerrank Algorithms
"use strict";

let total = 0;

// for (let i = 1; i < 100; i << 1) {
//   console.log(i);
//   total += i;
// }

console.log(total);

// Plus Minus
const plusMinus = arr => {
  // shift the first element for the length value
  let len = arr.shift();
  // vars to hold values of pos, neg, zero
  let pos = 0,
    neg = 0,
    zero = 0;

  // loop over each element and see if pos, neg, zero
  arr.forEach(num => {
    if (num > 0) {
      pos++;
    } else if (num < 0) {
      neg++;
    } else {
      zero++;
    }
  });
  // divide each var by length of array
  // needs to scale to 6 decimal places
  console.log((pos / len).toFixed(6));
  console.log((neg / len).toFixed(6));
  console.log((zero / len).toFixed(6));
};

plusMinus([6, -4, 3, -9, 0, 4, 1]);

// Mini-Max Sum
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.Then print the respective minimum and maximum values as a single line of two space - separated long integers.

const miniMaxSum = arr => {
  // Make sure the array is sorted
  const sortedArr = arr.sort();
  // grab the lowest 4 items
  let lowestArr = sortedArr.slice(0, 4);
  // grab the highest 4 items
  let highestArr = sortedArr.slice(arr.length - 4, arr.length);
  // Loop over arrays and add the numbers
  let lowest = lowestArr.reduce((acc, num) => acc + num);
  let highest = highestArr.reduce((acc, num) => acc + num);
  console.log(lowest, highest);
};

miniMaxSum([3, 4, 5, 1, 2]);

// Birthday Cake Candles
// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// For example, if your niece is turning
// years old, and the cake will have candles of height, , , , she will be able to blow out candles successfully, since the tallest candles are of height and there are such candles.

// first item is the number of candles
const birthdayCakeCandles = ar => {
  let max = Math.max(...ar);
  const filteredArray = ar.filter(item => item === max);
  return filteredArray.length;
};

// console.log(birthdayCakeCandles([ 3, 2, 1, 3 ]), 'bday cake');

// regex match beginning vowel to end vowel
function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  const re = /^([aeiou]).*\1$/;

  return re;
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
}

// TIME CONVERSION
// Given a time in
// 	12-hour AM / PM format, convert it to military(24 - hour) time.
// 		Note: Midnight is 12: 00: 00AM on a 12 - hour clock, and 00: 00: 00 on a 24 - hour clock.Noon is 12: 00: 00PM on a 12 - hour clock, and 12: 00: 00 on a 24 - hour clock.

// Complete the timeConversion function in the editor below.It should return a new string representing the input time in 24 hour format.
const timeConversion = s => {
  console.log(s.split(":"));
};

timeConversion("07:05:45PM");

// Sieve of Eratosthenes
// Prime numbers in a range
const primeList = (start, end) => {
  // Make a list of the numbers from start to end
  // First number in the list is start

  // Input: an integer n > 1.
  // Let A be an array of Boolean values, indexed by integers 2 to n, initially all set to true.

  // for i = 2, 3, 4, ..., not exceeding √n:
  // 	if A[i] is true:
  // 		for j = i2, i2 + i, i2 + 2i, i2 + 3i, ..., not exceeding n:
  // 			A[j] := false.

  // 	Output: all i such that A[i] is true.
  let numArr = [];

  for (let i = start; i <= end; i++) {
    numArr.push(i);
  }

  numArr.forEach((num, i) => {
    let index = 0;
    if (num % numArr[index] === 0 && num !== numArr[index]) {
      numArr.splice(i, 1);
    }
    index += 1;
  });

  console.log(numArr, "Prime List");
};

primeList(2, 30);
