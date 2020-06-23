function operator (num1, num2, operand) {
    switch (operand) {
        case (operand == '*'):
           return multiply(num1, num2)
           break;
        case (operand == '/'):
            return divide(num1, num2);
            break;
        case (operand == '+'):
            return add(num1, num2);
            break;
        case (operand == '-'):
            return subtract(num1, num2);
            break;
    }
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

const equalizer = document.getElementById('equate');
const display = document.getElementById('calcDisplay');

equalizer.addEventListener('click', (e) => {

})

const digits = document.getElementsByClassName('digit');
const operator = document.getElementsByClassName('operator');
let operand1 = ``;
let operand2 = ``;
let operator = ``;

const inputButton = document.querySelectorAll('button');

inputButton.forEach((button) => {
    inputButton.addEventListener('click', (e) => {
        if(inputButton.classList.contains('digit')) {
            operand1 += inputButton.getAttribute('value');
        }
    })

})