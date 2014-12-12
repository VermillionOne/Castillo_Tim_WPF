/**
 * Tim Castillo
 * SDI Section #03WDD
 * Conditionals_Assignment Problem #3 - Wacky - Week #3
 * 12-11-2014
 */

// To Determine whether or not to hook Rudolph up to the sleigh

// Ask if the whether outside is frightful
var weather	= prompt("Is the weather outside frightful?\n\nPlease answer using 'true' or 'false'");
if (weather === "") {
	var weather = prompt("Is the weather outside frightful?\n\nPlease answer using 'true' or 'false'\n\nPlease provide an answer or this will not work.");
};
console.log(weather);
// Ask if it is Christmas Eve
var date = prompt("Is today Christmas Eve?\n\nPlease answer using 'true' or 'false'");
if (date === "") {
	var date = prompt("Is today Christmas Eve?\n\nPlease answer using 'true' or 'false'\n\nPlease provide an answer or this will not work.");
};
console.log(date);
//make sure that the strings will match our test exactly by making them both lowercase
var weatherLc = weather.toLowerCase();
console.log(weatherLc);
var dateLc = date.toLowerCase();
console.log(dateLc);
// Figure out if we will hook up Rudolph to the sleigh
var result = (weatherLc === "true" && dateLc === "true") ? "Rudolph, with your nose so bright, won't you guide my sleigh tonight?" : "Rudolph, you don't get to play reindeer games this time...";

/*if(weatherLc === "true" && dateLc === "true"){
	var result = "Rudolph, with your nose so bright, won't you guide my sleigh tonight?";
}else{
	var result = "Rudolph, you don't get to play reindeer games this time..."
}*/

alert(result);
console.log(result);