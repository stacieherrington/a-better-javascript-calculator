// M+
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

// M-
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

// MR
document.getElementById("buttonMRecall").addEventListener("click", function() {
    writeToDisplay(numberInMemory)
});

// MC
document.getElementById("buttonMClear").addEventListener("click", function() {
    numberInMemory = 0
    console.log(numberInMemory)
});
