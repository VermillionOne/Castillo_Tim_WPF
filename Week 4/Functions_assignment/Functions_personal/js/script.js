/**
 * Tim Castillo
 * SDI Section #03WDD
 * Functions_personal Week #4
 * 12-17-2014
*/


// Will the item ship out today?

var shipment = function(hour){
    if(hour > 0 && hour < 15){
        var ship = "The item will ship today"
    } else {
        var ship = "The item will ship tomorrow"
    }
}

var hour = prompt("In what hour was the product ordered");

var dayNight = prompt("Was it ordered during am or pm?");

var nightDay = str.toLowerCase(dayNight);

timeOfOrder = (nightDay === "pm" ) ? parseInt(hour) + 12 : parseInt(hour);
console.log(timeOfOrder);

var result = shipment(timeOfOrder);