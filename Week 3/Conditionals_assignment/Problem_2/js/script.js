/**
 * Tim Castillo
 * SDI Section #03WDD
 * Conditionals_Assignment Problem #2 - Industry - Week #3
 * 12-10-2014
 */

// Ask the user for the width of the image in pixels
var imageWidth = prompt("What is the width of the image in pixels?");
console.log(imageWidth);
// Ask the user for the height of the image in pixels
var imageHeight = prompt("What is the Height of the image?");
console.log(imageHeight);
// Ask the user to set the minimum size
var minSize = prompt("What is the minimum size the longest side must be in pixels?");
console.log(minSize);
// Ask the user to set the maximum size
var maxSize = prompt("What is the maximum size the longest side must be in pixels?");
console.log(maxSize);
// Creating a holder for new image width value
//var newImageWidth;

// Creating a holder for new image height value
//var newImageHeight;
// Compare the
if (imageWidth > maxSize && imageWidth > imageHeight){
    imageHeight = parseInt(imageHeight) * parseInt(maxSize) / parseInt(imageWidth);
}else if(imageHeight > maxSize && imageHeight > imageWidth){
    ImageWidth = parseInt(imageWidth) * parseInt(maxSize) / parseInt(imageHeight);
}else if(imageWidth < minSize && imageHeight < minSize){
    imageWidth = minSize;
}else{
    var rightSize = "The image is the proper size.";
}

endHeight = imageHeight.toFixed(0);
endWidth = imageWidth.toFixed(0);
// Create a results printout
if(rightSize === "The image is the proper size."){
    alert(rightSize);
    console.log(rightSize)
}else{
    var result = "The image was adjusted to " + endWidth + "x" + endHeight + " resolution.";
    alert(result);
    console.log(result);
}

