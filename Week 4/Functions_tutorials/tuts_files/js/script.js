/**
 * Created by Vermillion on 12/12/14.
 */

// Functions - Function vs. Procedure


var total = calcArea(50, 20);

// This is a function
function calcArea(w, h) { //w=30, h=20
    var area = w * h;
    return area; // Functions return data
}

// This is a procedure
function calcArea2(w, h) { //w=30, h=20
    var area = w * h;
    console.log(area); //Procedures only provide instruction
}

calcArea2(45,3);

console.log(total);