/*
 Tim Castillo
 SDI Section #03WDD
 Expressions_Industry Week #2
 12-05-2014
 */

//alert("Test");

/******
 * What is the profit of an item after the shipping and promotional
 * discount?
 */

//Asking for the purchasing cost of the item
var itemCost = prompt("What is the purchasing cost of the item?");
console.log(itemCost);
//Asking for the store sale price of item
var salePrice = prompt("What is the sale price of the item?");
console.log(salePrice);
//What is the promotional discount?
var discountPercent = prompt("What is the promotional discount percentage?");
console.log(discountPercent);
//What is the sales tax?
var salesTax = prompt("What is the sales tax?");
console.log(salesTax);
//Asking for the shipping and handling cost
var shippingCost = prompt("What is the cost of the shipping?");
console.log(shippingCost);
//Discount and tax applied to sale price
var discountPrice = salePrice - salePrice*(discountPercent / 100);
console.log(discountPrice);
//Tax applied to sale price
var afterTax = discountPrice + discountPrice*(salesTax / 100);
console.log(afterTax);
//Shipping and purchasing cost added together
var totalCost = shippingCost + itemCost;
console.log(totalCost);
//Calculating Total Profit by subtracting total cost from sales price after the tax and discount and shipping
var totalProfit = afterTax - totalCost;
console.log(totalProfit);
//Putting the results all in a string
var result = ("With a purchasing cost of $" + itemCost + " and a sale price of $" + salePrice + " this item will bring in $" + totalProfit + " after a " + discountPercent + "% discount and $" + shippingCost + " in shipping costs.");
//Displaying the result
alert(result);
console.log(result);