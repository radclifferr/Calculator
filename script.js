//Generate button array and input calculator button text
function makeButtons () {
    const numberOfColumns = 4;
    const numberOfRows = 5;
    let column1 = ["X", 7, 4, 1, null];
    let column2 = ["CE", 8, 5, 2, 0];
    let column3 = [null, 9, 6, 3, "."];
    let column4 = ["/", "*", "-", "+","="];
    let columnData = [column1, column2, column3, column4];

    const buttonBox = document.querySelector("#buttonBox");
    for (i= 0; i < numberOfColumns; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        buttonBox.appendChild(column);
        for (j = 0; j < numberOfRows; j++){
            const row = document.createElement("div");
            row.classList.add("row");
            row.textContent = columnData[i][j];
            column.appendChild(row);
        }
    }
}
makeButtons();
getInput();

dataBank = [];

function operate (data) {
    dataBank.push(data);  
    console.log(dataBank)
    data = [];
    let runningTotal = 0;
    if (dataBank.length >=2){
        runningTotal = parseInt(dataBank[0].match(/[1-9]+/g));
        if (dataBank[1] ==="="){
            dataBank[1] = dataBank[0] + "=";
        }
        console.log(dataBank[0], dataBank[1])
        for (i = 0; i < dataBank.length-1; i ++){
            if (dataBank.at(i).at(-1) ==="+"){
                runningTotal = add(runningTotal, dataBank[i+1]);
                sendOutput(runningTotal);
            }else if (dataBank.at(i).at(-1) ==="-"){
                runningTotal = subtract(runningTotal, dataBank[i+1]);
                sendOutput(runningTotal);
            }else if (dataBank.at(i).at(-1) ==="*"){
                runningTotal = multiply(runningTotal, dataBank[i+1]);
                sendOutput(runningTotal);
            }else if (dataBank.at(i).at(-1) ==="/"){
                runningTotal = divide(runningTotal, dataBank[i+1]);
                sendOutput(runningTotal);
            }
        }sendOutput(runningTotal);
    }
}

function add (runningTotal, rawString2) {
    num2 = parseInt(rawString2.match(/[1-9]+/g));
    return runningTotal + num2;
}
function subtract (runningTotal, rawString2) {
    num2 = parseInt(rawString2.match(/[1-9]+/g));
    return runningTotal - num2;
}
function multiply (runningTotal, rawString2) {
    num2 = parseInt(rawString2.match(/[1-9]+/g));
    return runningTotal * num2;
}
function divide (runningTotal, rawString2) {
    num2 = parseInt(rawString2.match(/[1-9]+/g));
    return runningTotal / num2;
}
function getInput(){
    data = [];
    let buttonPress = document.querySelectorAll("div.row");
    sendOutput("0");
    for (i = 0; i<buttonPress.length; i++){
        buttonPress[i].addEventListener("click", (e) => {
            data += e.target.textContent; 
    if (e.target.textContent === "+"){
        sendOutput("");
        operate(data);
        data = [];
    }else if (e.target.textContent === "-"){
        sendOutput("");
        operate(data);
        data = [];
    }else if (e.target.textContent === "*"){
        sendOutput("");
        operate(data);
        data = [];
    }else if (e.target.textContent === "/"){
        sendOutput("");
        operate(data);
        data = [];
    }else if (e.target.textContent === "="){
        sendOutput("");
        operate(data);
        data = [];
    }else if (e.target.textContent === "CE"){
        sendOutput("0");
        dataBank = [];
        data = [];
        
    }else {
        sendOutput(data);
    }
        });
    }
}

function sendOutput(target){
    const display = document.querySelector("#display");
    // target = target.toString();
    // if (target.length > 10) target = target.substring(0,10);
    display.textContent = Math.round(target * 100)/100;
}
