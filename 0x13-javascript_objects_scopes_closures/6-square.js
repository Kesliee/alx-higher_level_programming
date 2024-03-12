#!/usr/bin/node

const supSquare = require('./5-square');

class Square extends supSquare {
	charPrint (c) {
		if (c == null) {
			c = 'X';
		}
		for (let i = o; i < this.width; i++) {
			console.log(c.repeat(this.width));
		}
	}
}

module.exports = Square;
