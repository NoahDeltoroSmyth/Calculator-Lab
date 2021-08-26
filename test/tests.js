// IMPORT MODULES under test here:
import { add } from '../calculator.js';
// import { add } from '../calculator.js';

const test = QUnit.test;

// name your test by what it is testing
test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
