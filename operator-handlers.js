const operatorArray = ["Multiply", "Divide", "Add", "Subtract"]

// OPERATOR BUTTON LOOP
for (let x = 0; x < 4; x++) {
    let operatorText = operatorArray[x]
    document.getElementById("button" + operatorText).addEventListener("click", function () {
        // // if ((digitsString == "") && operationType == "") {
        // //     // something something numberLastEntered HELP
        // }
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
