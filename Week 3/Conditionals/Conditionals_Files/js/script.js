/*
Tim Castillo
SDI Section #03WDD
Conditional Logic Tutorial
12-05-2014
*/

var kidHeight = 47;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //You can ride
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //You can ride with a parent
    console.log("You can ride, but only with a parent present.")
}else{
    //Sorry you have growing to do
    console.log("Sorry, kid... you've got some growing to do first!")
}