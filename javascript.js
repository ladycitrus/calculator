let num1 = null;
let num2 = null;
let operator = null;
let result = null;
const operandBtn = document.querySelectorAll(".operand");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");
const operandDisplay = document.querySelector(".operandDisplay");
const backspaceBtn = document.querySelector(".backspace");
const decimalBtn = document.querySelector(".decimal");

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
    if (num2 === 0) {
        return Infinity;
    } else {
        return num1 / num2; // return division of nums

    }
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

// clears and resets all variables 
clearBtn.addEventListener("click", () => {
    operandDisplay.textContent = "";
    num1 = null;
    num2 = null;
    operator = null;
    result = null;
});

equalsBtn.addEventListener("click", () => {
    if (num1 !== null && num2 !== null) {
        result = operate(operator, num1, num2);
        let formattedNumber = Math.round(result * 100) / 100;
        operandDisplay.textContent = formattedNumber;

    }
});
    

backspaceBtn.addEventListener("click", () => {
    const currentOperand = operandDisplay.textContent;
    if (currentOperand !== "" && currentOperand !== result) {
      operandDisplay.textContent = operandDisplay.textContent.slice(0, -1);
    }
      
    if (num2 === null) {
      num1 = operandDisplay.textContent ? Number(operandDisplay.textContent) : null;
    } else {
      num2 = operandDisplay.textContent ? Number(operandDisplay.textContent) : null;
    }
    
  });

  decimalBtn.addEventListener("click", () => {
    if (num1 === null) {
    num1 = (num1 ?? "0").toString();
      if (!num1.includes(".")) {
       
        num1 = num1 !== null ? num1.toString() + decimalBtn.innerHTML : "0" + decimalBtn.innerHTML;
        operandDisplay.textContent = num1;
        console.log(num1, num2);
       } 
      } else {
        num2 = (num2 ?? "0").toString();
        if (!num2.includes(".")) {
          num2 = num2 !== null ? num2.toString() + decimalBtn.innerHTML : "0" + decimalBtn.innerHTML;
          operandDisplay.textContent = num2;
          
       }
    }
   });
