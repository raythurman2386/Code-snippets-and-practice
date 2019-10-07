// Hackerrank Algorithms
'use strict';

// Plus Minus
// the first element is the length of the array
let array = [ 6, -4, 3, -9, 0, 4, 1 ];
let secondArr = [ 8, 1, 2, 3, -1, -2, -3, 0, 0 ];

const plusMinus = (arr) => {
	// shift the first element for the length value
	let len = arr.shift();
	// vars to hold values of pos, neg, zero
	let pos = 0;
	let neg = 0;
	let zero = 0;

	// loop over each element and see if pos, neg, zero
	arr.forEach((element) => {
		if (element > 0) {
			pos++;
		} else if (element < 0) {
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

plusMinus(array);
plusMinus(secondArr);
