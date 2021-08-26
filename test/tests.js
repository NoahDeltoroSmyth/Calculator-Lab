
import { add } from '../calculator.js';

import { subtract } from '../calculator.js';

import { multiply } from '../calculator.js';

import { divide } from '../calculator.js';


const test = QUnit.test;


test ('add function', (expect) => {
    const expected = 10;
    const actual = add(5, 5);
    expect.equal(actual, expected);
});

test ('subtract function', (expect) => {
    const expected = 1;
    const actual = subtract(4, 3);
    expect.equal(actual, expected);
});

test ('multiply function', (expect) => {
    const expected = 10;
    const actual = multiply(5, 2);
    expect.equal(actual, expected);
});

test ('divide function', (expect) => {
    const expected = 10;
    const actual = divide(20, 2);
    expect.equal(actual, expected);
});