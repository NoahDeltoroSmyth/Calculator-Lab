// import functions
import { add } from './calculator.js';

import { subtract } from './calculator.js';

import { multiply } from './calculator.js';

import { divide } from './calculator.js';

// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const subtractNumber1 = document.getElementById('subtract-number-1');
const subtractNumber2 = document.getElementById('subtract-number-2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');

const multiplyNumber1 = document.getElementById('multiply-number-1');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

const divideNumber1 = document.getElementById('divide-number-1');
const divideNumber2 = document.getElementById('divide-number-2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');

// set event listeners 

addButton.addEventListener('click', () => {
    const num1 = Number(addNumber1.value);
    const num2 = Number(addNumber2.value);
    const sum = add(num1, num2);
    addAnswer.textContent = sum;

});

subtractButton.addEventListener('click', () => {
    const subnum1 = Number(subtractNumber1.value);
    const subnum2 = Number(subtractNumber2.value);
    const subsum = subtract(subnum1, subnum2);
    subtractAnswer.textContent = subsum;
});

multiplyButton.addEventListener('click', () => {
    const multnum1 = Number(multiplyNumber1.value);
    const multnum2 = Number(multiplyNumber2.value);
    const multsum = multiply(multnum1, multnum2);
    multiplyAnswer.textContent = multsum;
});

divideButton.addEventListener('click', () => {
    const divnum1 = Number(divideNumber1.value);
    const divnum2 = Number(divideNumber2.value);
    const divsum = divide(divnum1, divnum2);
    divideAnswer.textContent = divsum;
});


    // get user input(s)


    // do any needed work with the value(s)

    // update DOM to reflect new value(s)
