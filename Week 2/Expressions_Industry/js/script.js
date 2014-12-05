/*
 Tim Castillo
 SDI Section #03WDD
 Expressions_Industry Week #2
 12-05-2014
 */

//alert("Test");


//Cost of item
var itemCost = prompt("What is the purchasing cost of the item?");
//Sale price of item
var salePrice = prompt("What is the sale price of the item?");
//What is the promotional discount?
var discount = prompt("What is the promotional discount percentage?");
//What is the sales tax?
var salesTax = prompt("What is the sales tax?");
//Shipping and handling cost
var shippingCost = prompt("What is the cost of the shipping?");
//Discount and tax applied to sale price
var discountPrice = salePrice - salePrice(discount/100);
//Tax applied to sale price
var afterTax = salePrice + salePrice(salesTax/100);
//Shipping and purchasing cost added together
var totalCost = shippingCost + itemCost;
//Total Profit
var totalProfit = salePrice - totalCost;
//Concatenating the result
var result = ("With a purchasing cost of $" + itemCost + " and a sale price of $" + salePrice + " this item will bring in $" + totalProfit + " after a " + discount + "% discount and $" + shippingCost + " in shipping costs.");
//Displaying the result
alert(result);
console.log(itemCost);
console.log(salePrice);
console.log(discount);
console.log(salesTax);
console.log(shippingCost);
console.log(totalCost);
console.log(totalProfit);
console.log(result);