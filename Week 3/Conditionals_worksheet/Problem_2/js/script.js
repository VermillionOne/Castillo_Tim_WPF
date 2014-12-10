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

// Compare the entered username to the base username
if(username != "Username"){
    // If the Username doesn't equal the base username, give the message, "User not found. Please try again", as the result
    var result = "User not found. Please try again.";
    console.log(result);
    // Compare the entered password to the base password
}else if(password != "password"){
    // If the password doesn't match, give the message, "Password does not match our records", as the result
    var result = "Password does not match our records.";
    console.log(result);
}else{
    // If both the password and username match, then give "Welcome, Tim!" as the result
    var result = "Welcome, Tim!";
    console.log(result);
}
// Print the result to the console
alert(result);

