function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Can't divide bu 0!");
    }
    else 
        return a / b;
}

function operate(operator, operand1, operand2) {
    let result;
    switch (operator) {
        case '+':
            result = add(operand1, operand2);
            break;
        case '-':
            result = subtract(operand1, operand2);
            break;
        case '*':
            result = multiply(operand1, operand2);
            break;
        case '/':
            result = divide(operand1, operand2);
            break;
        default:
            break;
    }
    return result;
}

let oper1 = "";
let oper2 = "";
let operator;
let pressOperator = false;
const display = document.querySelector("#display");
const point = document.querySelector("#point");
document.addEventListener("keypress", handleOperationEvents);

function addButtonsListeners() {
    const buttons = document.querySelector(".buttons");
    buttons.addEventListener("click", handleOperationEvents);
}

// Упростить логику
function handleOperationEvents(event) {
    let res = 0;
    let val;
    if (event.type === "click") {
        val = event.target.textContent;
    } else {
        val = event.key;
    }
    if (val >= '0' && val <= '9' || val === '.') {
        if (val === '.' && !point.disabled) {
            point.disabled = true;
            if (!pressOperator) {
                oper1 += val;
            } else {
                oper2 += val;
            }
        } else if (val !== '.') {
            if (!pressOperator) {
                oper1 += val;
                showResult(parseFloat(oper1));
            } else {
                oper2 += val;
                showResult(parseFloat(oper2));
            }
    }
    } else if (val === '+' || val === '*' || val === '-' || val === '/') {
        if (pressOperator && oper2 !== "") {
            point.disabled = false;
            res = operate(operator, parseFloat(oper1), parseFloat(oper2));
            operator = val;
            oper1 = res;
            oper2 = "";
            showResult(res);
        } else {
            pressOperator = true;
            point.disabled = false;
            operator = val;
        }
    } else if (val === 'AC') {
        oper1 = "";
        oper2 = "";
        operator = "";
        point.disabled = false;
        pressOperator = false;
        display.textContent = "";
    } else if (val === '=') {
        res = operate(operator, parseFloat(oper1), parseFloat(oper2));
        oper1 = res;
        oper2 = "";
        showResult(res);
    }
} 

function showResult(num) {
    if (num === undefined || isNaN(num)) {
        display.textContent = "MIN 2 operands";
    } else { 
        display.textContent = num;
    }
}


addButtonsListeners();