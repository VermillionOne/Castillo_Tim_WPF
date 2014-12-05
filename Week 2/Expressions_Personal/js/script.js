/*
Tim Castillo
SDI Section #03WDD
Expressions_Personal Week #2
12-05-2014
 */

/******
 * How many trash bags will we go through in a certain amount of time?
 */

//alert("Testing js file connection.");

// Trash Bag Capacity
var bagCapacity = prompt("Maximum weight your trash bag can hold in pounds:");
console.log(bagCapacity);
// Trash used daily
var dailyTrash = prompt("Pounds of trash gone through daily:");
console.log(dailyTrash);
// Timeframe given
var timeFrame = prompt("Time Frame in days:");
console.log(timeFrame);
// Time to fill bag
var filledBag = bagCapacity / dailyTrash;
console.log(filledBag);
// How many times does this happen in given time frame?
var bagsPerTime = timeFrame / filledBag;
console.log(bagsPerTime);
// Displaying the result in a string
var result = alert("With " + dailyTrash + " pounds of trash used daily, " + bagsPerTime + " bags of trash will be used over the course of " +timeFrame+" days.");
console.log(result);