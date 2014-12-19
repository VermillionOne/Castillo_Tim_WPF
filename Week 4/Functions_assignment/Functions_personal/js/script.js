/**
 * Tim Castillo
 * SDI Section #03WDD
 * Functions_personal Week #4
 * 12-17-2014
*/


// Will the item ship out today?

var shipment = function(hour){

}

var hour = prompt("In what hour was the product ordered");

var dayNight = prompt("Was it ordered during am or pm?");

var nightDay = str.toLowerCase(dayNight);

timeOfOrder = (nightDay === "pm" ) ? parseInt(hour) + 12 : parseInt(hour);
console.log(timeOfOrder)

var result = shipment(timeOfOrder);