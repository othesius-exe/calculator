function operator(num1, num2, operatorType) {
    if (operatorType === '+') {
        return (parseFloat(num1) + parseFloat(num2));
    } else if (operatorType === '-') {
        return (parseFloat(num1) - parseFloat(num2));

    } else if (operatorType === '/') {
        return (parseFloat(num1) / parseFloat(num2));

    } else if (operatorType === '*') {
        return (parseFloat(num1) * parseFloat(num2));
    }
}


const userInput = document.querySelectorAll('button');
const calcDisplay = document.getElementById('calcDisplay');

let currentOperand = '';
let operand1 = '';
let operatorType = '';
let outcome = '';

userInput.forEach((button) => {
    button.addEventListener('click', (e) => {
        const key = e.target;
        const action = key.dataset.action;
        const keyValue = button.getAttribute('value');

        //console.log(keyValue);
        //console.log(e.target);

        if(!action) {
            currentOperand += keyValue;
            calcDisplay.textContent = currentOperand;
        } else if (action === 'decimal') {
            if (!currentOperand.includes('.')) {
                currentOperand += keyValue;
                calcDisplay.textContent = currentOperand;
            } else {
                currentOperand.replace('.', '');
                calcDisplay.textContent = currentOperand;
            }
        } else if (action === 'plus' || action === 'divide'
            || action === 'times') {
                if (operand1 === '' || currentOperand !== ''
                    && currentOperand !== '-' 
                    && currentOperand !== '-.'
                    && parseFloat(currentOperand) !== 0
                    && parseFloat(currentOperand) !== null
                    && parseFloat(currentOperand) !== NaN) {
                        operand1 = currentOperand;
                        operatorType = keyValue;
                        currentOperand = '';
                        calcDisplay.textContent = operatorType;
                        console.log(operand1, currentOperand, operatorType);
                } else if (operand1 !== '') {
                    operatorType = keyValue;
                    calcDisplay.textContent = operatorType;
                }
        } else if (action === 'minus') {
                if (operand1 === '' && currentOperand === '') {
                    currentOperand = '-';
                    calcDisplay.textContent = currentOperand;
                } else if (operand1 === '' && currentOperand === '-'){
                    currentOperand = '';
                    calcDisplay.textContent = currentOperand;
                } else if (operand1 === '' && currentOperand !== ''
                    && currentOperand !== '-' && currentOperand !== '.'
                    && currentOperand !== '-.' && currentOperand !== '0'
                    && parseFloat(currentOperand) !== null
                    && parseFloat(currentOperand) !== NaN) {
                        operand1 = currentOperand;
                        operatorType = keyValue;
                        currentOperand = '';
                        calcDisplay.textContent = operatorType;
                    } else if (operand1 !== '') {
                        operatorType = keyValue;
                        calcDisplay.textContent = operatorType;
                    }
        } else if (action === 'equate') {
            if (
                currentOperand !== '-'
                && currentOperand !== '.'
                && currentOperand !== '-.'
                && parseFloat(currentOperand) != 0
                && parseFloat(currentOperand) != null
                && parseFloat(currentOperand) != NaN
                && operatorType != '') {
                    console.log(operand1, currentOperand);
                    outcome = operator(operand1, currentOperand, operatorType);
                    calcDisplay.textContent = outcome;
                    operand1 = outcome;
                    console.log(Number.isSafeInteger(operand1), operand1);
                    outcome = '';
                    operatorType = '';
                    currentOperand = '';

                } 
        } else if (action === 'clear') {
            currentOperand = '';
            operand1 = '';
            operatorType = '';
            outcome = '';
            calcDisplay.textContent = '0';
        }
            
    })
})







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
                calcDisplay.textContent = operand1 + operatorType;
            }
        } else if (action === 'minus') {
            if (currentOperand === '') {
                currentOperand = '-';
            } else if (currentOperand === '-') {
                currentOperand = currentOperand;
            } else {
                operatorType = '-';
                operand1 = currentOperand;
                currentOperand = '';
                calcDisplay.textContent = operand1 + operatorType;
            }
        } else if (action === 'times') {
            if (currentOperand != '') {
                operatorType = '*';
                operand1 = currentOperand;
                currentOperand = ''
                calcDisplay.textContent = operand1 + operatorType;
            }
        } else if (action === 'divide') {
            if (currentOperand != '') {
                operatorType = '/';
                operand1 = currentOperand;
                currentOperand = ''
            }
        } else if (action === 'equate' && outcome === '') {
            if (operand1 !== '' && currentOperand !== '') {
                operator(operand1, currentOperand, operatorType);
                calcDisplay.textContent = outcome;
                operand1 = outcome;
                console.log(operatorType);
                console.log(currentOperand);
                console.log(operand1);
                console.log(outcome);
            } else if (operand1 == outcome) {
                operator(operand1, currentOperand, operatorType);
                calcDisplay.textContent = outcome;
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
            currentOperand = '0.';
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
    console.log(operatorType);
    console.log(currentOperand);
    console.log(operand1);
    console.log(outcome);}


