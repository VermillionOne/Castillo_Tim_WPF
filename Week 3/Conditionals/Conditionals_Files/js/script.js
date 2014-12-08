/*
Tim Castillo
SDI Section #03WDD
Conditional Logic Tutorial
12-05-2014
*/

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}