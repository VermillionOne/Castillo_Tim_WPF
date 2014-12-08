/*
Tim Castillo
SDI Section #03WDD
Conditional Logic Tutorial
12-05-2014
*/

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

//if the price of the phone is less than our budget
if(iPhonePrice < budget && paycheck > 300){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}