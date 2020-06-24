function operator(num1, num2, operatorType) {
    if (operatorType === '+') {
        outcome = add(parseFloat(num1), parseFloat(num2));
    } else if (operatorType === '-') {
        outcome = subtract(parseFloat(num1), parseFloat(num2));

    } else if (operatorType === '/') {
        outcome = divide(parseFloat(num1), parseFloat(num2));

    } else if (operatorType === '*') {
        outcome = multiply(parseFloat(num1), parseFloat(num2));
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

const userInput = document.querySelectorAll('button');
const calcDisplay = document.getElementById('calcDisplay');
let currentOperand = '';
let operand1 = ``;
let operatorType = '';
let outcome = '';

userInput.forEach((button) => {
    button.addEventListener('click', (e) => {
        const key = e.target;
        const action = key.dataset.action;
        const keyValue = button.getAttribute('value');
        console.log(keyValue);
        if(!action) {
            handleNumbers(keyValue);
        } else if (action === 'clear') {
            clearAll();
        } else if (action === 'plus') {
            if(currentOperand != '') {
                operatorType = '+';
                operand1 = currentOperand;
                currentOperand = ''
            }
        } else if (action === 'minus') {
            if (currentOperand !== '') {
                operatorType = '-';
                operand1 = currentOperand;
                currentOperand = ''
            } else {
                currentOperand = '-'
            }
        } else if (action === 'times') {
            if (currentOperand != '') {
                operatorType = '*';
                operand1 = currentOperand;
                currentOperand = ''
            }
        } else if (action === 'divide') {
            if (currentOperand != '') {
                operatorType = '/';
                operand1 = currentOperand;
                currentOperand = ''
            }
        } else if (action === 'equate') {
            if (operand1 !== '' && currentOperand !== '') {
                operator(operand1, currentOperand, operatorType);
                calcDisplay.textContent = outcome;
                console.log(operatorType);
            }
        }
    })
})

function handleNumbers(keyValue) {

    if (keyValue === '.' && currentOperand.includes('.')
        && currentOperand != '0') {
            // Do nothing
            currentOperand = currentOperand;
    } else if (currentOperand === '0' && keyValue === '.') {
            // Append Decimal
            currentOperand = '0.'
    } else {
            // Append digits
            currentOperand += keyValue;
            calcDisplay.textContent = currentOperand;
    }
}

function clearAll() {
    currentOperand = '';
    operand1 = '';
    operatorType = '';
    calcDisplay.textContent = '0';
    console.log(currentOperand)
}