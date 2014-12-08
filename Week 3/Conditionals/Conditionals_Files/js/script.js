/*
Tim Castillo
SDI Section #03WDD
Conditional Logic Tutorial
*/

var age = 9;
var book;

//if the child is under 10, they get Green Eggs and Ham, otherwise they get The time Machine
/*
if(age < 10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}
*/
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);

