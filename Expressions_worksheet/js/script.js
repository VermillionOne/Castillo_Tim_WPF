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

/********************************/
// Problem #4: Average Shopping Bill
/********************************/

// An array of five weeks of grocery totals
var weeklyCosts = [125, 115, 104, 95, 112];
// Total amount spent on groceries over five weeks
var totalCost = weeklyCosts[0] + weeklyCosts[1] + weeklyCosts[2] + weeklyCosts[3] + weeklyCosts[4];
// Weekly average grocery expenses
var averageGroceryCost = totalCost / weeklyCosts.length;
// Displays total cost of groceries and average weekly cost of groceries in sentence form
var result4 = "You have spent a total of $" + totalCost + " over " + weeklyCosts.length + " weeks at an average of $" + averageGroceryCost + " per week." ;
// console.log(totalCost);
// console.log(averageGroceryCost);
console.log(result4);

/********************************/
// Problem #5: Discounts
/********************************/

// Original Price of item
var price = 30;
// Discount Percentage
var discount = 15;
// Item Description
var item = "Wireless Mouse";
// Sales Tax Percentage
var tax = 8;
// Item price without tax
var noTaxPrice = price - (discount/100) * price;
// Item price with tax
var taxPrice = noTaxPrice + (tax/100) * noTaxPrice;
// Item name, original price and discounted prices with and without taxes used in a sentence
var result5 = "Your " + item + " was originally $" + price + ", but after a " + discount + "% discount it is now $" + noTaxPrice + " without tax and $" + taxPrice +  " with tax.";
// console.log(noTaxPrice);
// console.log(taxPrice);
console.log(result5);
