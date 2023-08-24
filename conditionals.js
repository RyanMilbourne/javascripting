const raining = true;
const cold = false;
let temperature = 35;

if (raining) {
	console.log("Don't forget your umbrella!");
}

if (temperature < 0) {
	console.log("Grab a scarf, my guy!");
} else if (temperature < 15) {
	console.log("Gonna need something more than a short sleeve, my guy!")
} else {
	console.log("A short sleeve shirt is fine, my guy!")
}

console.log("Now you're ready to go outside!");
