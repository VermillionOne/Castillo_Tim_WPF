/**
 * Tim Castillo
 * SDI Section #03WDD
 * Functions_personal Week #4
 * 12-18-2014
*/


// Will the item ship out today?

// Anonymous function for finding if the item will ship today or tomorrow
var shipment = function(hour){
    // Determine if the product was order before 3pm (15)
    if(hour < 15){
        // If ordered before 3pm, the item will ship today
        var ship = "The item will ship today."
    } else {
        // If ordered after 3pm, the item will ship tomorrow
        var ship = "The item will ship tomorrow."
    }
    // Send the answer out to the result variable
    return(ship);
};
// Find out what hour the item was ordered
var hour = prompt("During what hour was the product ordered?");
//Create a loop to verify the number for the hour
while ((isNaN(hour) || hour === "") && (hour <= 0 && hour > 12)){
    //Prompt again to get hour
    hour = prompt("What hour was the product ordered?\n\nPlease enter a number between 1 and 12 only");
}
// Find out if the hour was AM or PM
var dayNight = prompt("Was it ordered during AM or PM?");
// Force the string for AM or PM to lower case to rule out differentiation
var nightDay = dayNight.toLowerCase();
// Adjust the hour according to whether it was during AM or PM by adding 12 if it was during PM
timeOfOrder = (nightDay === "pm") ? parseInt(hour) + 12 : parseInt(hour);
console.log(timeOfOrder);
// Invoke the function to determine when the item will ship out
var result = shipment(timeOfOrder);
// Display the shipment results
alert(result);
console.log(result);

