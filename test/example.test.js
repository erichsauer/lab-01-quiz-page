// IMPORT MODULES under test here:
import { answerCheck } from '../utils.js'

const test = QUnit.test;

test('any answer beginning in "y" or "Y" should be counted as true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    const expected2 = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = answerCheck('yeah');
    const actual2 = answerCheck('YEHAWWW');
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
