/**
 * Tim Castillo
 * SDI Section #03WDD
 * Functions_personal Week #4
 * 12-17-2014
*/


// Will the item ship out today?

// Anonymous function for finding if the item will ship today or tomorrow
var shipment = function(hour){
    // Determine if the product was order before 3pm (15)
    if(hour > 0 && hour < 15){
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
while ((isNaN(hour) || hour === "") && (hour <= 0 && hour > 24 )){
    //Prompt again to get hour
    hour = prompt("What hour was the product ordered?\n\nPlease enter a number 1 and 12 only");
var dayNight = prompt("Was it ordered during am or pm?");
    
var nightDay = dayNight.toLowerCase();

timeOfOrder = (nightDay === "pm" ) ? parseInt(hour) + 12 : parseInt(hour);
console.log(timeOfOrder);

var result = shipment(timeOfOrder);

alert(result);
console.log(result);

