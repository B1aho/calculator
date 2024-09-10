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
    return a / b;
}

function operation(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            add(operand1, operand2);
            break;
        case '-':
            subtract(operand1, operand2);
            break;
        case '*':
            multiply(operand1, operand2);
            break;
        case '/':
            divide(operand1, operand2);
            break;
        default:
            break;
    }
}