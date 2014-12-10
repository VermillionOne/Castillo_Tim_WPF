/**
 * Tim Castillo
 * SDI Section #03WDD
 * Conditionals_Worksheet Problem 3 Week #3
 * 12-08-2014
*/

/*
 This takes an array representing the four tires of a car and compares them to see if the two front and back have matching PSI.
*/

var psi = new Array(4);
    psi[0] = prompt("PSI of Front Driver's side tire");
    psi[1] = prompt("PSI of Front Passenger's side tire");
    psi[2] = prompt("PSI of Back Driver's side tire");
    psi[3] = prompt("PSI of Back Passenger's side tire");

if(psi[0] === psi[1] && psi[2] === psi[3]){
    var result = "The tires pass spec!";
}else{
    var result = "Get your tires checked out!";
}

alert(result);

