// Random number in range
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

console.log(randomNumberInRange(2, 10));

// LongestItem
/*   Takes any number of iterable objects wit ha length property and returns the longest one.   */
const longestItem = (...vals) => vals.reduce((a, x) => (x.length > a.length ? x : a));

console.log(longestItem('this', 'is', 'a', 'testcase'));

// averageBy
// Returns the average of an array
const averageBy = (arr, fn) =>
	arr.map(typeof fn === 'function' ? fn : (val) => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length;

console.log(averageBy([ { n: 4 }, { n: 2 }, { n: 8 }, { n: 6 } ], (o) => o.n));

// isFunction
const isFunction = (val) => typeof val === 'function';

console.log(isFunction('x'));
console.log(isFunction((x) => x));

// tomorrow
const tomorrow = () => {
	let t = new Date();
	t.setDate(t.getDate() + 1);
	return t.toISOString().split('T')[0];
};

console.log(tomorrow());
