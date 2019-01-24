let currentTotal = 0
let digitsString = ""
let operationType = ""


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

document.getElementById("buttonAdd").addEventListener("click", function(){
    if (digitsString !== "") {
        currentTotal = operatorButtonStuff(operationType, digitsString)
    }
    console.log(currentTotal)
    digitsString = ""
    operationType = "operationAdd"
});

document.getElementById("buttonSubtract").addEventListener("click", function(){
    if (digitsString !== "") {
        currentTotal = operatorButtonStuff(operationType, digitsString)
    }
    console.log(currentTotal)
    digitsString = ""
    operationType = "operationSubtract"
});

document.getElementById("buttonMultiply").addEventListener("click", function(){
    if (digitsString !== "") {
        currentTotal = operatorButtonStuff(operationType, digitsString)
    }
    console.log(currentTotal)
    digitsString = ""
    operationType = "operationMultiply"
});

document.getElementById("buttonDivide").addEventListener("click", function(){
    if (digitsString !== "") {
        currentTotal = operatorButtonStuff(operationType, digitsString)
    }
    console.log(currentTotal)
    digitsString = ""
    operationType = "operationDivide"
});

function performOperation(lastResult, newNumberEntered, arithmeticOperation) {
    switch(arithmeticOperation) {
        case "operationAdd":
            return(lastResult + newNumberEntered)
            break;
        case "operationSubtract":
            return(lastResult - newNumberEntered)
            break;
        case "operationMultiply":
            return(lastResult * newNumberEntered)
            break;
        case "operationDivide":
            return(lastResult / newNumberEntered)
            break;
    }
}

function operatorButtonStuff(currentOperationType, stringOfDigits) {
    if (currentOperationType == "") {
        return parseFloat(stringOfDigits)
    }
    else {
        return performOperation(currentTotal, parseFloat(digitsString), operationType)
    }
}

/*
/*
Done: digitsString is a string variable that concatenates as number buttons and/or the decimal are clicked.

Done: There needs to be a way to check, when the decimal button is clicked, whether or not digitsString already contains a decimal character.

Done: When an operator button is clicked, digitsString should be parsed as a float and, if operationType == "", the parsed digitsString float should be saved as currentTotal, else the parsed digitsString float should be operated upon by performOperation function according to current operationType and the result should be saved as currentTotal. Then digitsString should be set to "". operationType updates now to the button clicked. Display currentTotal.

Done: There needs to be a variable called operationType that will be set to either operationAdd, operationSubtract, operationMultiply, or operationDivide by the click event on the operator buttons.

Done: I think there needs to be a function called performOperation. It will contain a switch/case thing for each operation, and will return the new value of currentTotal. I also added an operatorButtonStuff to cut down on some repetitive code that I would have needed to type under every operator button. I could probably cut this down further but I wanted to make sure I could get something working first. 

Still needs: clear button and = button functionality.

*/