/**
 * Tim Castillo
 * SDI Section #03WDD
 * Conditionals_Worksheet Problem 2 Week #2
 * 12-08-2014
*/

/*
 This is a Login Check
*/

// Get the username from the user
var username = prompt("Enter Username");
console.log(username);

// Get the password from the user
var password = prompt("Enter Password");
console.log(password);

if(username != "Username"){
    var result = "User not found. Please try again.";
    console.log(result);
}else if(password != "password"){
    var result = "Password does not match our records.";
    console.log(result);
}else{
    var result = "Welcome, Tim!";
    console.log(result);
}
alert(result);

