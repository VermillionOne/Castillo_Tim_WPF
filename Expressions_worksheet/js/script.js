//**** Expressions Worksheet ****//


/********************************/
// Problem #1: Dog Years
/********************************/

// Sparky's age in human years
var sparkyAge = 6;
//Sparky's age in dog years
var dogYears = sparkyAge * 7;
// Result of finding out how old Sparky is in dog years compared to human
var result = "Sparky is " + sparkyAge + " in human years which is " + dogYears + " in dog years.";
// Displaying output in console
console.log(result);

/********************************/
// Problem #2: Slice of Pie Part I
/********************************/

// Number of pizzas ordered
var pizzas = 5;
// Number of people at party
var people = 7;
// Number of slices per pizza
var slicesPerPizza = 8;
// Number of slices of pizza per person
var slicesPerPerson = pizzas * slicesPerPizza / people;
// Complete answer for how many slices of pizza per person
var result2 = "Each person at the party ate " + slicesPerPerson + " slices of pizza.";
console.log(result2);

/********************************/
// Problem #3: Slice of Pie Part II
/********************************/

// Number of slices Sparky gets
var sparkySlices = pizzas * slicesPerPizza % people;
// Output displaying how many slices of pizza Sparky gets
var result3 = "Sparky got " + sparkySlices + " slices of pizza.";
console.log(result3);