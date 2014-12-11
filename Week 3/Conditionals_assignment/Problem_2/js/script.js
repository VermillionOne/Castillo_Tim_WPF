/**
 * Tim Castillo
 * SDI Section #03WDD
 * Conditionals_Assignment Problem #2 - Industry - Week #3
 * 12-10-2014
 */


var imageWidth = prompt("What is the width of the image in pixels?");

var imageHeight = prompt("What is the Height of the image?");

var minSize = 500;

var maxSize = 800;

if ((imageWidth < maxSize && imageWidth > 500) || (imageHeight < 800 && imageWidth > 500)){
    "The image is the proper size."
}else if(imageWidth > maxSize || imageHeight > maxSize){
    if(imageWidth > maxSize && imageWidth > imageHeight){
        var newImageWidth = "800";
        var newImageHeight = imageHeight * newImageWidth / imageWidth;
    }else{
        var newImageHeight = "800";
        var newImageWidth = imageWidth * newImageHeight / imageHeight;
    }
}else{
    imageWidth = minSize;
}

var result = "The image has been adjusted to "