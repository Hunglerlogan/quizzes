require("inline-mocha")(module);
const assert = require('assert');
const mockCl = require('./mockCl.js');

// DIRECTIONS: make a copy of this file called moreFunctions1.js (moreFunctions2...)
// In the copy of the file, complete the prompts below, replacing TODO with your answers.
// Your goal is to make as many tests pass as possible within 15 minutes.
// If you get stuck, move on.  You can come back to a previous question if there is still time.

// Today you will see some prompts that are similar to other tests this week.
// You will also see some in a new format.  Do your best.

// Part 1:

// Write a function called multiply which accepts two numbers and returns their product.
// TODO

// Write a function called censor which accepts a string and replaces the word 'Chevy' with 'Dodge'.
// The function should return the modified string.
// TODO

// Write a function called aol which prints "You've got mail!".
// TODO


// Part 2:

// In this section, the function definitions have been provided.
// For each of the following prompts, invoke the provided functions to complete the prompts below.

function add(num1, num2) {
    testHelper('add', num1, num2);
    return num1 + num2;
}

// Use the add function to add 5 and 6.
// Assign the result of the above invocation to a variable named answer1;
// TODO

// Use the add function to add 5 to the previous answer.
// Assign the result of the above invocation to a variable named answer2;
// TODO

function callMeMaybe() {
    testHelper('callMeMaybe');
    return 'Good Job.'
}

// Invoke the function callMeMaybe and assign the result to a variable named answer3;
// TODO


// TESTS:
// You do not need to modify code below this point:

function testHelper(name, ...nums) {
    mockCl.start();
    console.log(name, ...nums.sort());
    mockCl.stop();
}

describe('Part 1', function() {
    describe('multiply', function() {
        it("Should be a function", function() {
            assert.equal(typeof(multiply), 'function');
        });

        it("should do multiplication", function() {
            assert.equal(multiply(4, 4), 16);
            assert.equal(multiply(2, 2), 4);
        });
    });

    describe('censor', function() {
        it("Should be a function", function() {
            assert.equal(typeof(censor), 'function');
        });

        it("should censor bad words", function() {
            assert.equal(censor('I want a Chevy for Christmas.'), 'I want a Dodge for Christmas.');
            assert.equal(censor('Chevy is the best!'), 'Dodge is the best!');
        });
    });

    describe('aol', function() {
        it("Should be a function", function() {
            assert.equal(typeof(aol), 'function');
        });

        it("should print \"You've got mail!\" when invoked", function() {
            mockCl.start();
            const start = mockCl.stack.filter(val => val === "You've got mail!").length;
            aol();
            aol();
            aol();
            const end = mockCl.stack.filter(val => val === "You've got mail!").length;
            mockCl.stop();
            assert.equal(end - start, 3);
        });
    });
});

describe('Part 2', function() {
    describe('add', function() {
        it("should have been called with 5 and 6", function() {
            assert(mockCl.stack.includes('add 5 6'));
        });

        it("should have saved the result to answer1", function() {
            assert.equal(answer1, 11);
        });

        it("should have been called with 11 and 5", function() {
            assert(mockCl.stack.includes('add 11 5'));
        });

        it("should have saved the result to answer2", function() {
            assert.equal(answer2, 16);
        });
    });

    describe('callMeMaybe', function() {
        it("should have been called", function() {
            assert(mockCl.stack.includes('callMeMaybe'));
        });

        it("should have saved the result to answer3", function() {
            assert.equal(answer3, 'Good Job.');
        });
    });
});
