let currentTotal = 0
let digitsString = ""
let numberInMemory = 0
let operationType = ""
let numberEntered
let historyText = ""
let operatorArray = ["Multiply", "Divide", "Add", "Subtract"]

for (let i = 0; i < 10; i++) {
    let buttonNumber = i.toString()
    document.getElementById("button" + buttonNumber).addEventListener("click", function (){
        digitsString = digitsString + buttonNumber
        writeToDisplay(digitsString)
    });
}

for (let x = 0; x < 4; x++) {
    let operatorText = operatorArray[x]
        document.getElementById("button" + operatorText).addEventListener("click", function(){
        if (digitsString !== "") {
            currentTotal = operatorButtonStuff(operationType, digitsString)
        }
        writeToDisplay(currentTotal)
        numberEntered = digitsString
        digitsString = ""
        operationType = "operation" + operatorText
        writeToHistory(concatenateHistoryText(numberEntered, operationType))
    });

}

document.getElementById("buttonMAdd").addEventListener("click", function(){
    if (digitsString == "") {
        numberInMemory = numberInMemory + currentTotal
        console.log(numberInMemory)
    }
    else {
        numberInMemory = numberInMemory + parseFloat(digitsString)
        console.log(numberInMemory)
    }
});

document.getElementById("buttonMSubtract").addEventListener("click", function() {
    if (digitsString == "") {
        numberInMemory = numberInMemory - currentTotal
        console.log(numberInMemory)
    }
    else {
        numberInMemory = numberInMemory - parseFloat(digitsString)
        console.log(numberInMemory)
    }
});

document.getElementById("buttonMRecall").addEventListener("click", function() {
    writeToDisplay(numberInMemory)
});

document.getElementById("buttonMClear").addEventListener("click", function() {
    numberInMemory = 0
    console.log(numberInMemory)
});

document.getElementById("buttonDecimal").addEventListener("click", function(){
    if (digitsString.indexOf('.') > -1) {}
    else {digitsString = digitsString + "."}
    if (digitsString == ".") {
        digitsString = "0."
    }
    writeToDisplay(digitsString);
});

document.getElementById("buttonEquals").addEventListener("click", function(){
    if (digitsString !== "") {
        currentTotal = operatorButtonStuff(operationType, digitsString)
    }
    writeToDisplay(currentTotal)
    console.log(currentTotal)
    digitsString = ""
    operationType = ""
    historyText = currentTotal
    writeToHistory(currentTotal)
});

document.getElementById("allClear").addEventListener("click", function(){
    digitsString = ""
    operationType = ""
    currentTotal = 0
    writeToDisplay("0")
    historyText = ""
    writeToHistory("&nbsp;")
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
            if (newNumberEntered == 0) {
                window.alert("No.")
                return(lastResult)
            }
            else {
            return(lastResult / newNumberEntered)
            }
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

function writeToDisplay(stringToDisplay) {
    document.getElementById("display").innerHTML = stringToDisplay
}

function writeToHistory(stringOfHistory) {
    document.getElementById("history").innerHTML = stringOfHistory
}

// If startingNumber == "", change the last three digits in historyText to be getOperatorSymbol(thisOperation) and save that as historyText. This should be its own function, probably.
function concatenateHistoryText(startingNumber, thisOperation) {
    if (startingNumber == "") {
        historyText = deleteLastOperatorSymbol(historyText)
    }
    historyText = historyText + startingNumber + getOperatorSymbol(thisOperation)
    return historyText
}

function getOperatorSymbol(currentOperation) {
    switch(currentOperation) {
        case "operationAdd":
            return " + "
            break;
        case "operationSubtract":
            return " - "
            break;
        case "operationMultiply":
            return " * "
            break;
        case "operationDivide":
            return " &divide; "
            break;
    }
}

function deleteLastOperatorSymbol(historyString) {
    let historyLength = historyString.length
    if (historyString.substr(-10, historyLength - 1) == " &divide; ") {
        let newString = historyString.substr(0, historyLength - 10)
        return newString
    }
    else if (historyLength > 3) {
        let newString = historyString.substr(0, historyLength - 3)
        return newString
    }
    else { return historyString }
}

/*
Done: digitsString is a string variable that concatenates as number buttons and/or the decimal button are clicked.

Done: There needs to be a way to check, when the decimal button is clicked, whether or not digitsString already contains a decimal character.

Done: When an operator button is clicked, digitsString should be parsed as a float and, if operationType == "", the parsed digitsString float should be saved as currentTotal, else the parsed digitsString float should be operated upon by performOperation function according to current operationType and the result should be saved as currentTotal. Then digitsString should be set to "". operationType updates now to the button clicked. Display currentTotal.

Done: There needs to be a variable called operationType that will be set to either operationAdd, operationSubtract, operationMultiply, or operationDivide by the click event on the operator buttons.

Done: I think there needs to be a function called performOperation. It will contain a switch/case thing for the operations, and will return the new value of currentTotal. I also added an operatorButtonStuff to cut down on some repetitive code that I would have needed to type under every operator button. I could probably cut this down further but I wanted to make sure I could get something working first. (Update: cut it down a lot by writing a loop.)

Done: clear button and = button functionality.

Done: divide by zero problem

Done: write loop for operator buttons.

Done: add memory functionality with MC, MR, M+ and M-.

Done: add a history line above the calculator

Other improvement ideas: event listening for keyboard strokes, such as enter, backspace, number keys, and operators
*/