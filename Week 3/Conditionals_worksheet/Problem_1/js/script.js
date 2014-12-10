/**
 * Tim Castillo
 * SDI Section #03WDD
 * Conditionals_Worksheet Problem 1 Week #2
 * 12-08-2014
*/

/*
 This is a temperature converter between Fahrenheit and Celsius.
*/

// Tell the user how to use this tool and ask them to give the initial degrees value.
var degrees = prompt("This is a unit converter to find out conversions between Fahrenheit and Celsius temperatures.\n\nWhat is the initial degree value?\nPlease only give the number (ex. 90)");
console.log(degrees);
// Ask the user which scale the initial value is measured in.
var scale = prompt("Is this temperature in Fahrenheit or Celsius?\n\nPlease give 'F' for Fahrenheit, or 'C' for Celsius.");
console.log(scale);

// Perform one conversion or the other based on whether Fahrenheit or Celsius were selected
if(scale === "F" || scale === "f"){
    // If the entered letter is exactly equal to "f" or "F", then perform the Fahrenheit to to Celsius conversion formula
    result = (degrees - 32) / 1.8;
    console.log(result);
}else if(scale === "C" || scale === "C"){
    result = degrees * 1.8 + 32;
    console.log(result);
}else{
    // If anything else is entered, display "Please try again."
    alert("Please try again.");
}
if(scale === "F" || scale === "f"){
    // If the original scale is Fahrenheit, then display the answer showing the degrees in Celsius
    var result = "The temperature is " + result + " degrees Celsius.";
    console.log(result);
    // Because it has already been found whether the letter "F" or "C" have been entered, it is not necessary to test further.
}else if(scale === "C" || scale === "C"){
    // If the original scale is Celsius, then display the answer showing the degrees in Fahrenheit
    var result = "The temperature is " + result + " degrees Fahrenheit.";
    console.log(result);
}else{
    alert("Refresh the page to use the converter.");
}
// Display Result
alert(result);