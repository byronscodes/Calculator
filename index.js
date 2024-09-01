// CALCULATOR PROGRAM

const display = document.getElementById("display")

function appendToDisplay(input){
    let bigNum = display.value + input;
    if (bigNum.toString().length > 10) {
        bigNum = parseFloat(bigNum.toPrecision(10));
    }
    display.value = bigNum;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        let longEval = eval(display.value);
    }
    catch(error){
        longEval = "Error";
    }
    if (longEval.toString().length > 10) {
        longEval = parseFloat(longEval.toPrecision(10));
    }
    display.value = longEval;
}