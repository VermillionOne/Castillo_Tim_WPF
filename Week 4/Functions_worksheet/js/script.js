/**
 * Tim Castillo
 * SDI Section #03WDD
 * Functions_worksheet Week #4
 * 12-15-2014
*/

/*------- Finding the circumference of a circle -------*/


circumference(4);
// Creating a function to find the circumference of a circle
function circumference(radius){
	var calcCirc;  //Holder for the circumference value
	calcCirc = radius * (3.14 * 2);  // Circumference formula
	console.log(calcCirc);
	return calcCirc;  // Returning the circumference value
};

var result = circumference();

console.log(result);