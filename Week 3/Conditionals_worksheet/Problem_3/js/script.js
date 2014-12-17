/**
 * Tim Castillo
 * SDI Section #03WDD
 * Conditionals_Worksheet Problem 3 Week #3
 * 12-08-2014
*/

/*
 This takes an array representing the four tires of a car and compares them to see if the two front and back have matching PSI.
*/

// Creat an array that will hold four values
var psi = new Array(4);
    // List the four values and ask the user to define each through a series of prompts
    psi[0] = prompt("PSI of Front Driver's side tire");
    console.log(psi[0]);
    psi[1] = prompt("PSI of Front Passenger's side tire");
    console.log(psi[1]);
    psi[2] = prompt("PSI of Back Driver's side tire");
    console.log(psi[2]);
    psi[3] = prompt("PSI of Back Passenger's side tire");
    console.log(psi[3]);
// Compare the front and back tire pressures. Use the "And"/"&&" conditional to tell if both sets are matching, and the "Equals Exactly"/"===" conditional to tell if the sets match.
if(psi[0] === psi[1] && psi[2] === psi[3]){
    // If both sets match, define "result" with string "The tires pass spec!"
    var result = "The tires pass spec!";
    console.log(result);
}else{
    // If at least one set does not match, define "result" with string "Get your tires checked out!"
    var result = "Get your tires checked out!";
    console.log(result);
}
// Print "result" to user
alert(result);


/*------- Finding the circumference of a circle -------*/

var radius = prompt("What is the radius of the circle?");
esfeeffeeefs
function circumference(){

}
