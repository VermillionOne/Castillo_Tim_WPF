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

// Asking the user for the height of the Christmas Tree
var height = prompt("What is the height of the Christmas Tree in feet?");


// This function is for finding the lateral surface area of the cone
function lateralSurface(r, h){
	// This is the first half of the Lateral Surface Area Formula
	var equation1 = (r * r) + (h * h);
	console.log(equation1);
	// This is finding the scquare root of equation1
	var squareRoot = Math.sqrt(equation1);
	console.log(squareRoot);
	// This is finding the full Lateral Surface Equation solution
	var equation2 = 3.14 * r * squareRoot;
	console.log(equation2);
	return equation2;
}
// Function for finding out the number of ornaments
function ornaments(surfaceArea, ornamentSize){
	var ornamentNumber = ;
}


