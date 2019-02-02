// NUMBER BUTTON LOOP
for (let i = 0; i < 10; i++) {
    let buttonNumber = i.toString()
    document.getElementById("button" + buttonNumber).addEventListener("click", function (){
        digitsString = digitsString + buttonNumber
        writeToDisplay(digitsString)
    });
}