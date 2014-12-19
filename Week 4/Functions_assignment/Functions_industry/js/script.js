/**
 * Tim Castillo
 * SDI Section #03WDD
 * Functions_industry Week #4
 * 12-17-2014
*/


// Ask the user for date of birth

// Ask for year born in
var year = prompt("In what year were you born?");
while (isNaN(year) || year === ""){
    year prompt("Please enter the year you were born.\n\nPlease enter a number only");
}
console.log(year);
// Ask for birth month
var month = prompt("In which month were you born?");
while (isNaN(month) || month === ""){
    month = prompt("Please enter the month you were born.\n\nPlease enter a number only");
}
console.log(month);
// Ask for day of birth
var day = prompt("What day of the month were you born?");
while (isNaN(day) || day === ""){
    day = prompt("Please enter the day of the month you were born.\n\nPlease enter a number only");
}
console.log(day);

birthday(month, day, year);

function birthday(m, d, y){
    return = m + " / " + d + " / " + y;
}