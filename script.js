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
    