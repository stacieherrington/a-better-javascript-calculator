let currentTotal = 0
let digitsString = ""


document.getElementById("button7").addEventListener("click", function(){
    digitsString = digitsString + "7"
    console.log(digitsString);
});

document.getElementById("button8").addEventListener("click", function(){
    digitsString = digitsString + "8"
    console.log(digitsString);
});

document.getElementById("button9").addEventListener("click", function(){
    digitsString = digitsString + "9"
    console.log(digitsString);
});

document.getElementById("button4").addEventListener("click", function(){
    digitsString = digitsString + "4"
    console.log(digitsString);
});

document.getElementById("button5").addEventListener("click", function(){
    digitsString = digitsString + "5"
    console.log(digitsString);
});

document.getElementById("button6").addEventListener("click", function(){
    digitsString = digitsString + "6"
    console.log(digitsString);
});

document.getElementById("button1").addEventListener("click", function(){
    digitsString = digitsString + "1"
    console.log(digitsString);
});

document.getElementById("button2").addEventListener("click", function(){
    digitsString = digitsString + "2"
    console.log(digitsString);
});

document.getElementById("button3").addEventListener("click", function(){
    digitsString = digitsString + "3"
    console.log(digitsString);
});

document.getElementById("button0").addEventListener("click", function(){
    digitsString = digitsString + "0"
    console.log(digitsString);
});

document.getElementById("buttonDecimal").addEventListener("click", function(){
    if (digitsString.indexOf('.') > -1) {}
    else {digitsString = digitsString + "."}
    console.log(digitsString);
});



/*
/*
Done: digitsString is a string variable that concatenates as number buttons and/or the decimal are clicked.
Done: There needs to be a way to check, when the decimal button is clicked, whether or not digitsString already contains a decimal character.
When a button is clicked, the variable currentTotal = 0 should be set to currentTotal [operator] numberClicked. For now, display currentTotal in the console.
There needs to be a variable called operationType that will be set to either operationAdd, operationSubtract, operationMultiply, or operationDivide by the click event on the operator buttons.
I think there needs to be a function called performOperation. It will contain a switch/case thing for each operation, and will return the new value of currentTotal.

*/