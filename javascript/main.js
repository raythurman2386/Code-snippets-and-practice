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

// Carousel component made from a class
// Implement Carousel JS
class Carousel {
	constructor(element) {
			this.carousel = element;
			this.leftBtn = element.querySelector('.left-button');
			this.rightBtn = element.querySelector('.right-button');
			this.images = element.querySelectorAll('img');
			this.count = 0;
			this.imageNum = this.images.length;
			this.current = this.images[this.count];
			this.current.style.display = 'flex';
			this.leftBtn.addEventListener('click', () => this.scrollLeft());
			this.rightBtn.addEventListener('click', () => this.scrollRight());
	}

	scrollLeft() {
			if (this.count === 0) {
					this.count = this.imageNum - 1;
			} else {
					this.count -= 1;
			}
			this.current.style.display = 'none';
			this.current = this.images[this.count];
			this.current.style.display = 'flex';
	}

	scrollRight() {
			if (this.count === this.imageNum - 1) {
					this.count = 0;
			} else {
					this.count += 1;
			}
			this.current.style.display = 'none';
			this.current = this.images[this.count];
			this.current.style.display = 'flex';
	}

}

let carousel = document.querySelector('.carousel');
let ref = new Carousel(carousel);
