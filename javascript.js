// variables for number, operator, another number
let num1;
let num2;
let operator;


// add, subtract, multiply, divide functions
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

// operate function for taking operator and number then calling above function

function operate(operator, num1, num2) {
    if (operator = '+') {
        add(num1, num2); 
    } else if (operator = '-') {
        subtract(num1, num2);
    } else if (operator = '*') {
        multiple(num1, num2);
    } else if (operator = '/') {
        divide(num1, num2);
    }
}

// create number grid

function generateGrid() {
    const gridContainer = document.querySelector('.numbers');
    
    let number = 1;

    for (let i = 0; i < 9; i++){ 
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.textContent = number;
        gridContainer.appendChild(gridItem);
        number++;
    }
}

generateGrid();
