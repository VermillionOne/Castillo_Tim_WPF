/*
 Tim Castillo
 SDI Section #03WDD
 Expressions_Wacky Week #2
 12-05-2014
 */

//alert("Test");

//Number of collectors
var collectors = prompt("How many gold mines, elixir collectors, or dark elixir drills do you have?");
console.log(collectors);

//Individual production rate of collectors
var productRate = prompt("How fast do they produce the material per hour?");
console.log(productRate);

//Individual maximum capacity of collectors
var capacity = prompt("How much can each collector hold?");
console.log(capacity);

//Rate that the user manually collects the material
var userCollect = prompt("How many hours on average between collecting your materials?");
console.log(userCollect);

//Name of Item or upgrade
var itemName = prompt("What are you saving to buy or upgrade?");
console.log(itemName);

//Cost of item or upgrade
var itemCost = prompt("How much will it cost to purchase or upgrade your item?");
console.log(itemCost);

// Prompting the user to give current amount of material
var currentAmount = prompt("How much material do you currently have?");
console/log();

//Total production rate
var totalProdRate = collectors * productRate;
console.log(totalProdRate);

//Total Max Capacity
var totalCapacity = capacity * collectors;
console.log(totalCapacity);

//Time for Total Max Capacity to fill
var capProdTime = totalCapacity / totalProdRate;
console.log(capProdTime);

//Minimum Collection Time
var minCollectTime = itemCost / capProdTime;
console.log(minCollectTime);

//Actual Collection Time
var actualCollectTime = itemCost / (minCollectTime / userCollect)
console.log(actualCollectTime);

//Displaying Results in a string
var result = ("You will be able to buy or upgrade the " + itemName + " in " + minCollectTime + " hours.");




