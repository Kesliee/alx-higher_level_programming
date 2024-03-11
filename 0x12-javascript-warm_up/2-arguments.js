#!/usr/bin/node

const argaLength = process.argv.length;

if (argalength === 2) {
	console.log('No argument');
} else if (argaLength === 3) {
	console.log('Argument found');
} else {
	console.log('Arguments found');
}
