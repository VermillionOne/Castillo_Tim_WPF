/**
 * Tim Castillo
 * SDI Section #03WDD
 * Conditionals_Assignment Problem 1 - Personal - Week #3
 * 12-10-2014
 */

// This is to determine how many cars we will need for a road trip.

// Ask for how many can ride in the first car
var vehicle1 = prompt("How many can ride in the first car?");
console.log(vehicle1);
// Ask for how many can ride in the second car
var vehicle2 = prompt("How many can ride in the second car?");
console.log(vehicle2);
// Ask for the number of passengers
var numPassengers = prompt("How many people are going?");
console.log(numPassengers);
// Figure out how many vehicles we will need
var result = (numPassengers > vehicle1) ? "We will need both cars." : "We only need one car.";
alert(result);
console.log(result);


