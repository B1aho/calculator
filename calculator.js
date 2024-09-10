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
let havePoint = false;
let pressOperator = false;
const display = document.querySelector("#display");
const point = document.querySelector("#point");

function addButtonsListeners() {
    const buttons = document.querySelector(".buttons");
    buttons.addEventListener("click", handleOperationEvents);
}
// Возможно подумать над css отключением точки, если она уже нажата, то есть визуальное решение.
// Добавить поддержку клавиатуры
// Добавить кнопку возврать действия
function handleOperationEvents(event) {
    let res = 0;
    let val = event.target.value;
    if (val >= '0' && val <= '9' || val === '.') {
        if (val === '.' && !havePoint) {
            havePoint = true;
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
            havePoint = false;
            point.disabled = false;
            res = operate(operator, parseFloat(oper1), parseFloat(oper2));
            operator = val;
            oper1 = res;
            oper2 = "";
            showResult(res);
        } else {
            pressOperator = true;
            havePoint = false;
            point.disabled = false;
            operator = val;
        }
    } else if (val === 'AC') {
        oper1 = "";
        oper2 = "";
        operator = "";
        havePoint = false;
        point.disabled = false;
        pressOperator = false;
        display.value = "";
    } else if (val === '=') {
        res = operate(operator, parseFloat(oper1), parseFloat(oper2));
        oper1 = res;
        oper2 = "";
        showResult(res);
    }
} 

function showResult(num) {
    if (num === undefined || isNaN(num)) {
        display.value = "There must be two operands";
    } else { 
        display.value = num;
    }
}

addButtonsListeners();