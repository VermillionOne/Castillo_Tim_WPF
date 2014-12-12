/**
 * Tim Castillo
 * SDI Section #03WDD
 * Conditionals_Assignment Problem #2 - Industry - Week #3
 * 12-10-2014
 */

// To determing whether an image needs resized

// Ask the user for the width of the image in pixels
var width = prompt("What is the width of the image in pixels?");
console.log(width);
if (width === "") {
	var width = prompt("What is the width of the image in pixels?\n\nPlease provide a number or else this will not work.");
};
// Ask the user for the height of the image in pixels
var height = prompt("What is the height of the image?");
console.log(height);
if (height === "") {
	var height = prompt("What is the height of the image in pixels?\n\nPlease provide a number or else this will not work.");
};
// Ask the user to set the minimum size
var minSize = prompt("What is the minimum size the longest side must be in pixels?");
console.log(minSize);
if (minSize === "") {
	var minSize = prompt("What is the minimum size the longest side must be in pixels?\n\nPlease provide a number or else this will not work.");
};
// Ask the user to set the maximum size
var maxSize = prompt("What is the maximum size the longest side must be in pixels?");
console.log(maxSize);
if (maxSize === "") {
	var height = prompt("What is the maximum size the longest side must be in pixels?\n\nPlease provide a number or else this will not work.");
};
// Determine if either side is larger than "maxSize"
if(width > maxSize || height > maxSize){
	// Determine which side is largest
	if(width > height){
		// Perform conversion for height
		var newSide = height * maxSize / width;
		var newSide = newSide.toFixed(0);
		console.log(newSide);
		// Create the resulting solution string
		var result = "The image has been resized to " + maxSize + "x" + newSide + " pixel resolution.";
		// Display the result
		alert(result);
		console.log(result);
	}else{
		// Perform conversion for width
		var newSide = width * maxSize / height;
		var newSide = newSide.toFixed(0);
		console.log(newSide);
		// Create the resulting solution string
		var result = "The image has been resized to " + newSide + "x" + maxSize + " pixel resolution.";
		// Display the result
		alert(result);
		console.log(result);
	};
}else if(width < minSize && height < minSize){
	// Extend width to minSize in result solution string
	var result = "The image has been resized to " + minSize + "x" + height + " pixel resolution.";
	// Display the result
	alert(result);
	console.log(result);
}else{
	// Define result solution string as the image is in the proper size range
	var result = "The image is in the proper size range."
	// Display the result
	alert(result);
	console.log(result);
};