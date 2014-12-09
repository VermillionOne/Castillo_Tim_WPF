/**
 * Tim Castillo
 * SDI Section #03WDD
 * Conditionals_Worksheet Problem 1 Week #2
 * 12-05-2014
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
// Variable for holding conversion result
var result;

// Perform one conversion or the other based on whether Fahrenheit or Celsius were selected
if(scale === "F" || scale === "f"){
    result = (degrees - 32) / 1.8;
    console.log(result);
}else{
    result = degrees * 1.8 + 32;
    console.log(result);
}

//Display the results with the appropriate scale stated
var displayResult;
if(scale === "F" || scale === "f"){
    alert("The temperature is " + result + " degrees Celsius.");
    console.log("The temperature is " + result + " degrees Celsius.");
}else{
    alert("The temperature is " + result + " degrees Fahrenheit.");
    console.log("The temperature is " + result + " degrees Fahrenheit.");
}
console.log(displayResult);