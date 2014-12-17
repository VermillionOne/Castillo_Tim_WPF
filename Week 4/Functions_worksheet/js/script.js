/**
 * Tim Castillo
 * SDI Section #03WDD
 * Functions_worksheet Week #4
 * 12-15-2014
*/

/*------- Finding the circumference of a circle -------*/

// Creating a function to find the circumference of a circle
function circle(radius){
	var calcCirc = 2 * radius * 3.14;  // Circumference formula
	return calcCirc;  // Returning the circumference value
};
// Invoking the function with a user input
var result = circle(prompt("What is the radius of the circle?"));
// Printing the result to the console
console.log(result);
// Displaying the result to the user
alert(result);

/*------- Finding the Fatal Amount of Bee Stings per Animal -------*/

