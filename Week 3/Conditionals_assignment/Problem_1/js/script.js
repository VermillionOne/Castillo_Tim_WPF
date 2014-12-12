/**
 * Tim Castillo
 * SDI Section #03WDD
 * Conditionals_Assignment Problem 1 - Personal - Week #3
 * 12-11-2014
 */

// This is to determine how many cars we will need for a road trip.

// Ask for how many can ride in the first car
var vehicle1 = prompt("How many can ride in the first car?");
// Check variable for populated answer
if (vehicle1 === "") {
	// if the answer is not populated, ask again
	var vehicle1 = prompt("How many can ride in the first car?\n\nPlease provide a number or this will not work.");
};
console.log(vehicle1);
// Ask for how many can ride in the second car
var vehicle2 = prompt("How many can ride in the second car?");
// Check variable for populated answer
if (vehicle2 === "") {
	// if the answer is not populated, ask again
	var vehicle2 = prompt("How many can ride in the second car?\n\nPlease provide a number or this will not work.");
};
console.log(vehicle2);
var vehicles = parseInt(vehicle2) + parseInt(vehicle1);
console.log(vehicles);
// Ask for the number of passengers
var numPassengers = prompt("How many people are going?");
// Check variable for populated answer
if (numPassengers === "") {
	// if the answer is not populated, ask again
	var numPassengers = prompt("How many people are going?\n\nPlease provide a number or this will not work.");
};
console.log(numPassengers);

// Figure out how many vehicles we will need
if (numPassengers > vehicle1 && numPassengers <= vehicles) {
	var result = "We will need both cars.";
}else if(numPassengers > vehicles){
	var	result = "We're going to need a bigger car..."
}else{
	var result = "We only need one car.";
}

/*
var result = (numPassengers > vehicle1) ? "We will need both cars." : "We only need one car.";
*/

alert(result);
console.log(result);


