/**
 * Tim Castillo
 * SDI Section #03WDD
 * Functions_wacky Week #4
 * 12-17-2014
 */

// Asking the user for the radius of the Christmas Tree
var radius = prompt("What is the radius of the Christmas tree in feet?");
console.log(radius);

// Asking the user for the height of the Christmas Tree
var height = prompt("What is the height of the Christmas Tree in feet?");
console.log(height);

// Asking the user for the size of the ornaments
var ornamentSize = prompt("How much distance will be allowed for each ornament?\n\n Please provide the distance in inches, including the length of the ornament.");
console.log(ornamentSize);

// Invoking the Lateral Surface area function
var surfaceArea = lateralSurface(radius, height);

// Invoking the function for the number of ornaments
var ornamentNumber = ornaments(surfaceArea, ornamentSize);

// This function is for finding the lateral surface area of the cone
function lateralSurface(r, h){
    // This is the first half of the Lateral Surface Area Formula
    var equation1 = (r * r) + (h * h);
    console.log(equation1);
    // This is finding the square root of equation1
    var squareRoot = Math.sqrt(equation1);
    console.log(squareRoot);
    // This is finding the full Lateral Surface Equation solution
    var equation2 = 3.14 * r * squareRoot;
    console.log(equation2);
    return equation2; // returning lateral surface area value
}

// Function for finding out the number of ornaments
function ornaments(area, size){
    // converting the square feet to inches
    var areaInches =  area * 144;
    console.log(areaInches);
    // Dividing the tree surface area by the area needed for each ornament
    var amount = areaInches / (size * size);
    console.log(amount);
    return parseInt(amount); // Returning the amount of ornaments
}

// Concatenate the result string
var result = "It will take " + ornamentNumber + " ornaments to dress the Christmas Tree.";
// Display the result
alert(result);
console.log(result);

