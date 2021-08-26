// import functions
import { add } from './calculator.js';

import { subtract } from './calculator.js';

// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const subtractNumber1 = document.getElementById('subtract-number-1');
const subtractNumber2 = document.getElementById('subtract-number-2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');






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


    // get user input(s)


    // do any needed work with the value(s)

    // update DOM to reflect new value(s)
