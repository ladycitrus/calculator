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
            num1 = num1 === null ? Number(button.innerHTML) : Number(num1 + button.innerHTML);
            operandDisplay.textContent = num1;
        } else {
            num2 = num2 === null ? Number(button.innerHTML) : NUmber(num2 + button.innerHTML);
        }
        
    });
});

// show contents of operator button
operatorBtn.forEach(button => {
    button.addEventListener("click", () => {
        operator = `${button.innerHTML}`;
    });
});

// show contents of equals, zero, clear button
clearBtn.addEventListener("click", () => {
    operandDisplay.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
});

zeroBtn.addEventListener("click", () => {
    operandDisplay.textContent = `${zeroBtn.innerHTML}`;
    num1 = `${zeroBtn.innerHTML}`;
});

equalsBtn.addEventListener("click", () => {
    operandDisplay.textContent = operate(operator, num1, num2);
});
    

