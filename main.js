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

//Variable arithimetic and concantenation
rotateSum = rotateValue + "rotate(" + angle +"deg)" ;
rotateTime = rotateTrans + "6s cubic-bezier(0.39,-1.46, 0.55, 1.73)";

//Checking if the value is true
bigText.style.transform = rotateSum;
bigText.style.transition = rotateTime;

}

function foo(){
    var currentColor = bigText.style.color.valueOf;
    var myYellowColor = "yellow";
    var myWhiteColor = "white";

    if(currentColor = myWhiteColor){
        bigText.style.color = myYellowColor;
    }
    else if (document.getElementById("maintext").style.color.valueOf = myYellowColor){
        bigText.style.color = myYellowColor;
    
    }
    bigText.style.transform = "scale(1.1)";
    bigText.style.transition = "2s Out · Back";
    console.log(h1.value);
}

