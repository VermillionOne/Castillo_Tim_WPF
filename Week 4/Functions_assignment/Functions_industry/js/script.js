/**
 * Tim Castillo
 * SDI Section #03WDD
 * Functions_industry Week #4
 * 12-17-2014
*/


// Ask the user for date of birth

// Ask for year in which born
var year = prompt("In what year were you born?");
//Create a loop to verify the number for the year
while (isNaN(year) || year === ""){
    //Prompt again for month
    year = prompt("Please enter the year you were born.\n\nPlease enter a number only");
}
console.log(year);
// Ask for birth month
var month = prompt("In which month were you born?");

//Create a loop to verify the number for the month
while ((month === "") || (month != "january") || (month != "february") || (month != "march") || (month != "april") || (month != "may") || (month != "june") || (month != "july") || (month != "august") || (month != "september") || (month != "october") || (month != "november") || (month != "december")){
    //Prompt again for month
    month = prompt("Please enter the month you were born.\n\nPlease enter a number or name of the month.");
}
if (month = "january"){
    var month = 1;
}else if(month === "february"){
    var month = 2;
}else if(month === "march"){
    var month = 3;
}else if(month === "april"){
    var month = 4;
}else if(month === "may"){
    var month = 5;
}else if(month === "june"){
    var month = 6;
}else if(month === "july"){
    var month = 7;
}else if(month === "august"){
    var month =8 ;
}else if(month === "september"){
    var month = 9;
}else if(month === "october"){
    var month = 10;
}else if(month === "november"){
    var month = 11;
}else{
    var month = 12;
}
console.log(monthnew);
// Ask for day of birth
var day = prompt("What day of the month were you born?");
//Create a loop to verify the number for the day
while (isNaN(day) || day === ""){
    //prompt for day again
    day = prompt("Please enter the day of the month you were born.\n\nPlease enter a number only");
}
console.log(day);

// Invoke the function to create the result
var result = birthday(month, day, year);
// Create a function to put together the date of birth
function birthday(m, d, y){
    // Concatenating the parts in a string
    var date = "Your birthday is " + m + "/" + d + "/" + y + ".";
    return(date); // return the value to the result
}
// Display the result
alert(result);
console.log(result);