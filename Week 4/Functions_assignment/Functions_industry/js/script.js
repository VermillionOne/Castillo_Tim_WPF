/**
 * Tim Castillo
 * SDI Section #03WDD
 * Functions_industry Week #4
 * 12-17-2014
*/
// Invoking the Lateral Surface area function
var surfaceArea = lateralSurface(radius, height);

// Asking the user for the radius of the Christmas Tree
var radius = prompt("What is the radius of the Christmas tree in feet?");
console.log(radius);

// Asking the user for the height of the Christmas Tree
var height = prompt("What is the height of the Christmas Tree in feet?");
console.log(height);

// Asking the user for the size of the ornaments
var ornamentSize = prompt("How big are the Christmas ornaments?\n\nPlease provide us the diameter of the ornament.");
console.log(ornamentSize);

// Invoking the function for the number of ornaments
var ornamentNumber = ornaments(surfaceArea, ornamentSize);

var result = "It will take " + ornamentNumber + " ornaments to fully dress the Christmas Tree.";

// This function is for finding the lateral surface area of the cone
function lateralSurface(r, h){
	// This is the first half of the Lateral Surface Area Formula
	var equation1 = (r * r) + (h * h);
	console.log(equation1);
	// This is finding the square root of equation1
	var squareRoot = Math.sqrt(equation1);
	console.log(squareRoot);
	// This is finding the full Lateral Surface Equation solution
	var equation2 = 3.14 * r * squareRoot;
	console.log(equation2);
	return equation2;
}

// Function for finding out the number of ornaments
function ornaments(area, size){
	var ornamentNumber = area / (size + 2) * (size + 2);
	console.log(ornamentNumber);
	return ornamentNumber;
}

