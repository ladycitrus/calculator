let num1 = null;
let num2 = null;
let operator = null;
const operandBtn = document.querySelectorAll(".operand");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const zeroBtn = document.querySelector(".zero");
const equalsBtn = document.querySelector(".equals");
const operandDisplay = document.querySelector(".operandDisplay");


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// takes operator and two numbers then calls function
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

// show contents of operand button 
operandBtn.forEach(button => {
    button.addEventListener("click", () => {
        if (operator === null) {
            //assign numeric value to num1
            num1 = num1 === null ? button.innerHTML : num1 + button.innerHTML;
            num1 = Number(num1);
            operandDisplay.innerHTML = num1;
        } else {
            // assign numeric value to num2
            num2 = num2 === null ? button.innerHTML : num2 + button.innerHTML;
            num2 = Number(num2);
            operandDisplay.textContent = num2;
        }
        
    });
});

// show contents of operator button
operatorBtn.forEach(button => {
    button.addEventListener("click", () => {
        if (num1 !== null) {
            //assign operator string to operator value
            operator = operator === null ? button.innerHTML : operator;
        } 
    });
});

// show contents of equals, zero, clear button
clearBtn.addEventListener("click", () => {
    operandDisplay.textContent = "";
    num1 = null;
    num2 = null;
    operator = null;
});

zeroBtn.addEventListener("click", () => {
    if (operator === "/" && num1 !== null) {
        operandDisplay.textContent = "Invalid";
    } else {
        num1 = num1 === null ? Number(zeroBtn.innerHTML) : Number(num1 + zeroBtn.innerHTML);
    }
});

equalsBtn.addEventListener("click", () => {
    result = operate(operator, num1, num2);
    operandDisplay.textContent = result;
});
    

