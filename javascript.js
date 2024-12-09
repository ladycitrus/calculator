let num1 = null;
let num2 = null;
let operator = null;
let result = null;
const operandBtn = document.querySelectorAll(".operand");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const zeroBtn = document.querySelector(".zero");
const equalsBtn = document.querySelector(".equals");
const operandDisplay = document.querySelector(".operandDisplay");
const backspaceBtn = document.querySelector(".backspace")

function add(num1, num2) {
    return num1 + num2; // return sum of nums
}

function subtract(num1, num2) {
    return num1 - num2; // return subtractions of nums
}

function multiply(num1, num2) {
    return num1 * num2; // return multiplication of nums
}

function divide(num1, num2) {
    return num1 / num2; // return division of nums
}

// takes operator and two numbers then calls and returns function
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
        if (result !== null) {
            num1 = result;
            num2 = num2 === null ? Number(button.innerHTML) : Number(num2 + button.innerHTML);
            operandDisplay.textContent = num2;
        } else if (operator === null) {
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
// operatorBtn.forEach(button => {
//     button.addEventListener("click", () => {
//         if (num1 !== null && num2 !== null) {
//             result = operate(operator, num1, num2);
//             num1 = result;
//             operandDisplay.textContent = num1;
//             num2 = null;
//         }
//         else if (num1 !== null) {
//             //assign operator string to operator value
//             operator = operator === null ? button.innerHTML : operator;
//         } 
//     });
// });

operatorBtn.forEach(button => {
    button.addEventListener("click", () => {
        if (num2 === null) {
            operator = operator === null ? button.innerHTML : operator;
        } else if (num1 !== null && num2 !== null) {
            result = operate(operator, num1, num2);
            operator = button.innerHTML;
            num1 = result;
            operandDisplay.textContent = num1;
            num2 = null;
         };
    });
});

// show contents of equals, zero, clear button
clearBtn.addEventListener("click", () => {
    operandDisplay.textContent = "";
    num1 = null;
    num2 = null;
    operator = null;
    result = null;
});

zeroBtn.addEventListener("click", () => {
    if (operator === "/" && num1 !== null) {
        operandDisplay.textContent = "Invalid";
    } else {
        num1 = Number(num1 + zeroBtn.innerHTML);
        operandDisplay.innerText = num1;
    }
});

equalsBtn.addEventListener("click", () => {
    if (num1 !== null && num2 !== null) {
        result = operate(operator, num1, num2);
        const formattedNumber = Math.round(result * 100) / 100;
        operandDisplay.textContent = formattedNumber;
    }
});
    

// backspaceBtn.addEventListener("click", () => {
//     if (operandDisplay.textContent !== result && operandDisplay.textContent !== "") {
//       operandDisplay.textContent = operandDisplay.innerHTML.substring(0, operandDisplay.innerHTML.length -1);
//       if (num1 === operandDisplay.textContent) {
//         num1 = operandDisplay.textContent;
      
//     }
//   });
