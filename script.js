let currentTotal = 0
let digitsString = ""
let numberInMemory = 0
let operationType = ""
let numberEntered
let historyText = ""
let logText = ""
let numberLastEntered

// DECIMAL
document.getElementById("buttonDecimal").addEventListener("click", function(){
    if (digitsString.indexOf('.') <= -1) {
        digitsString = digitsString + "."
    }

    if (digitsString == ".") {
        digitsString = "0."
    }
    writeToDisplay(digitsString);
});

// something is happening during equals that causes--if the next operation is carried out without clicking the AC button--the history string to become [object Undefined] and then the last three characters are deleted (from deleteLastOperator) because the value that is passed in as startingNumber to concatenateHistoryText is "".
// EQUALS
document.getElementById("buttonEquals").addEventListener("click", function(){
    if (digitsString !== "") {
        currentTotal = operatorButtonStuff(operationType, digitsString)
    }
    writeToDisplay(currentTotal)
    console.log(currentTotal)
    numberLastEntered = parseFloat(digitsString)
    digitsString = ""
    operationType = ""
    appendToLog(concatenateLogText(historyText, numberLastEntered, currentTotal))
    historyText = ""
    writeToHistory(currentTotal)
});

// AC
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

function appendToLog(stringToBeLogged) {
    let para = document.createElement("p");
    para.innerHTML = stringToBeLogged
    // let node = document.createTextNode(stringToBeLogged);
    // para.appendChild(node);
    let element = document.getElementById("log");
    element.appendChild(para);

}

function concatenateHistoryText(startingNumber, thisOperation) {
    if (startingNumber == "") {
        historyText = deleteLastOperatorSymbol(historyText)
    }
    historyText = historyText + startingNumber + getOperatorSymbol(thisOperation)
    return historyText
}

function concatenateLogText(stringFromHistory, lastNumberEntered, totalToLog) {
    let stringToBeLogged = stringFromHistory + lastNumberEntered + " = " + totalToLog + "\n"
    return stringToBeLogged
    console.log(stringToBeLogged)
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
    if (historyLength < 11) {
        return historyString
    }
    else if (historyString.substr(-10, historyLength - 1) == " &divide; ") {
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

Next: add a log of all operations performed to completion (equals button) underneath the calculator.

Other improvement ideas: event listening for keyboard strokes, such as enter, backspace, number keys, and operators
*/