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

let oper1;
let oper2;
let operator;
let isPoint;

function addButtonsListeners() {
    // Логика такая, 1) Вешаем слушатель на большой див с кнопками, чтобы разом слушать все кнопки
    // 2) Далее, если нажимаются цифровые кнопки "0-9-." то сохраняем нажатые значения кнопок в строку.
    // 2.1) Дублирующие нажатия точки не считаются
    // 3) Как только нажата кнопка операции "+-*/", то строка с первым числом парсится, оператор запоминается
    // в переменную
    // 3.1) ДУблирующие нажатия оператора переписывают оператор в переменной - последний нажатый будет активным
    // 4) Далее, если нажимаются цифровые кнопки "0-9-." то сохраняем нажатые значения кнопок во второй операнд
    // 5) Если после этого нажаты кнопки операций, то они не учитываются
    // 6) Получается большая часть этой логики должна быть в обработчиках событий
    // 7) Если operator undefined, то цифры записываем в oper1, если оператор есть, то цифры идут в oper2
    // 8) Булево значение надо для того, что нажата точка или нет

}