// Hackerrank Algorithms
'use strict';

// Plus Minus
// the first element is the length of the array
// let array = [ 6, -4, 3, -9, 0, 4, 1 ];
// let secondArr = [ 8, 1, 2, 3, -1, -2, -3, 0, 0 ];

const plusMinus = (arr) => {
	// shift the first element for the length value
	let len = arr.shift();
	// vars to hold values of pos, neg, zero
	let pos = 0,
		neg = 0,
		zero = 0;

	// loop over each element and see if pos, neg, zero
	arr.forEach((num) => {
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

// plusMinus(array);
// plusMinus(secondArr);

// Mini-Max Sum
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.Then print the respective minimum and maximum values as a single line of two space - separated long integers.

// let array = [ 3, 4, 5, 1, 2 ];

const miniMaxSum = (arr) => {
	// Make sure the array is sorted
	const sortedArr = arr.sort();
	// grab the lowest 4 items
	let lowestArr = sortedArr.slice(0, 4);
	// grab the highest 4 items
	let lowItem = arr.length - 4;
	let highItem = arr.length;
	let highestArr = sortedArr.slice(lowItem, highItem);

	// Loop over arrays and add the numbers
	let lowest = lowestArr.reduce((acc, num) => acc + num);
	let highest = highestArr.reduce((acc, num) => acc + num);
	console.log(lowest, highest);
};

// miniMaxSum(array);
