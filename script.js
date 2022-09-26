getInput();
dataBank = [];
function operate (data) {
    dataBank.push(data);  
    data = [];
    let runningTotal = 0;
    if (dataBank.length >=2){
        runningTotal = parseFloat(dataBank[0].match(/(\w*\.?\w*)+/g));
        if (dataBank[1] ==="="){
            dataBank[1] = dataBank[0] + "=";
        }
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
    num2 = parseFloat(rawString2.match(/(\w*\.?\w*)+/g));
    return runningTotal + num2;
}
function subtract (runningTotal, rawString2) {
    num2 = parseFloat(rawString2.match(/(\w*\.?\w*)+/g));
    return runningTotal - num2;
}
function multiply (runningTotal, rawString2) {
    num2 = parseFloat(rawString2.match(/(\w*\.?\w*)+/g));
    return runningTotal * num2;
}
function divide (runningTotal, rawString2) {
    num2 = parseFloat(rawString2.match(/(\w*\.?\w*)+/g));
    return runningTotal / num2;
}
function getInput(){
    data = [];
    let buttonPress = document.querySelectorAll("div.row");
    sendOutput("");
    for (i = 0; i<buttonPress.length; i++){
        buttonPress[i].addEventListener("click", (e) => {
        data += e.target.textContent; 


    if (e.target.textContent === "⌫"){
        data = data.slice(0, data.length -1);
        data = data.slice(0, data.length -1);
        sendOutput(data);
    }
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
        sendOutput("");
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
    display.textContent = Math.round(target * 100)/100;
}





const column = document.querySelectorAll(".column");
for (let i = 0; i < column.length; i++){
    column[i].addEventListener("mouseover", function () {
        column[i].classList.add("buttonHover");
    });
    column[i].addEventListener("mouseleave", function () {
        column[i].classList.remove("buttonHover")
    });
    column[i].addEventListener("click", function () {
        column[i].classList.add("buttonClick")
    });
    column[i].addEventListener("transitionend", removeTransition
    );
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("buttonClick")
}

