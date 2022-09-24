//Generate button array and input calculator button text
function makeButtons () {
    const numberOfColumns = 4;
    const numberOfRows = 5;
    let column1 = ["X", 7, 4, 1, null];
    let column2 = ["C", 8, 5, 2, 0];
    let column3 = [null, 9, 6, 3, "."];
    let column4 = ["/", "X", "-", "+","="];
    let columnData = [column1, column2, column3, column4];




    const buttonBox = document.querySelector("#buttonBox");
    for (i= 0; i < numberOfColumns; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        buttonBox.appendChild(column);
        for (j = 0; j < numberOfRows; j++){
            const row = document.createElement("div");
            row.classList.add("row");
            // console.log(columnData[i][j]);
            row.textContent = columnData[i][j];
            column.appendChild(row);
        }
    }
}

makeButtons();













function operate (operator, number1, number2) {
    if (operator === "+"){
        add(number1, number2);
    }else if (operator === "-"){
        subtract(number1, number2);
    }else if (operator === "*"){
        multiply(number1, number2);
    }else if (operator === "/"){
        divide(number1, number2);
    }
}
function add (number1,number2) {
    return number1 + number2;
}
function subtract (number1,number2) {
    return number1 - number2;
}
function multiply (number1,number2) {
    return number1 * number2;
}
function divide (number1,number2) {
    return number1 / number2;
}