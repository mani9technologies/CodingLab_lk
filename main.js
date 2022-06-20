console.log("Script Connection Succesful");

// Variable Declarations
var angle = 360;
var bigText = document.getElementById("maintext");

var rotateSum;
var rotateTime;


function vito(){

var rotateValue = bigText.style.transform;
var rotateTrans = bigText.style.transition;

// Button Read out
console.log("Button Click Succesfull");

//Variable arithimetic
rotateSum = rotateValue + "rotate(" + angle +"deg)" ;
rotateTime = rotateTrans + "4s";

//Checking if the value is true
bigText.style.transform = rotateSum;
bigText.style.transition = rotateTime;

}
