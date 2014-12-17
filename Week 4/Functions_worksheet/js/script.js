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
// Get the radius of the circle from the user
var radius = prompt("What is the radius of the circle?");
// Invoking the function with a user input and gather the returned result
var circumference = circle(radius);
// Concatenate the results into a string
var result = "The circumference of a circle with a radius of " + radius + " is " + circumference + ".";
// Printing the result to the console
console.log(result);
// Displaying the result to the user
alert(result);

/*------- Finding the Fatal Amount of Bee Stings per Animal -------*/

// Creating a function using the bee sting to weight ratio to find out how many stings it would take to kill an animal
function beeSting(weight){
	var ratio = weight / 8.666666667;
	return ratio;
}

// Get the weight of the animal from the user
var weight = prompt("How much does the animal weigh in pounds?");
// Invoke the function and gather the returned result
var fatalStings = beeSting(weight);
// Concatenate the results into a string.
var result2 = "It takes about " + parseInt(fatalStings) + " bee stings to kill an animal weighing " + weight + " pounds.";

console.log(result2);
alert(result2);
