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
