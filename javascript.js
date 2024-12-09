let num1;
let num2;
let operator;
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
            add(num1, num2);
        case "-":
            subtract(num1, num2);
        case "*":
            multiply(num1, num2);
        case "/":
            divide(num1, num2);
    }
}

// show contents of operand button 
operandBtn.forEach(button => {
    button.addEventListener("click", () => {
        operandDisplay.textContent = `${button.innerHTML}`;
        num1 = `${button.innerHTML}`;
    });
});

// show contents of operator button
operatorBtn.forEach(button => {
    button.addEventListener("click", () => {
        alert(`${button.innerHTML}`);
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
    alert(`${equalsBtn.innerHTML}`);
});
    

