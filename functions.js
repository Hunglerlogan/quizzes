require("inline-mocha")(module);
const assert = require('assert');
const mockCl = require('./mockCl.js');
const TODO = 'TODO';

// Follow the instructions.
// The tests that are provided should pass after you have successfully completed the tasks below.
// You do not need to fix the tests.

// Part 1
mockCl.start(); // IGNORE ME
// Assign the string ‘Good morning' to a variable named `greeting`.
TODO

// Invoke console.log to print `greeting`.
TODO


// ============================================================================
// Part 2

let kyleStatus = 'Kyle is hungry.';

// Use `String.prototype.replace` to change your status to 'Kyle ate a bagel.'
TODO

// Print your status using console.log.
TODO

mockCl.stop();  // IGNORE ME
// ============================================================================
// Part 3

// The following objects represent members of the team:
const newestEngineer = {
    name: 'Kyle',
    status: 'is hungry'
};

const engineerTurnedProductManager = {
    name: 'Sycho',
    status: 'is tired'
};

const vacationingInSunnyvale = {
    name: 'George',
    status: 'bought a car'
};

// Create a function called `updateStatus`.
// The function should take a team member object as an argument.
// The function should add an `statusMessage` property to the team member object.
//      statusMessage should concatenate the person's name and status. eg 'Kyle is hungry.'
// The function should use the map below to return an updated status, using the provided map. eg 'Kyle ate a bagel.'
// *** Tests are picky.  Pay attention to punctuation and spacing.

const map = {
	'is hungry': 'ate a bagel',
	'is tired': 'should get some sleep',
	'bought a car': 'is looking for a comfortable couch'
};

TODO


// =======================================================================================
// The following tests should pass when you are finished.  You do not need to modify them.

describe('Part 1', function() {
    it('greeting should be defined', function() {
        assert(greeting === 'Good morning');
    });
    it('should log the value of greeting', function() {
        assert(mockCl.stack.includes('Good morning'));
    });
});

describe('Part 2', function() {
    it('should update kyleStatus', function() {
        assert.equal(kyleStatus, 'Kyle ate a bagel.');
    });
    it('should log the updated status', function() {
        assert(mockCl.stack.includes('Kyle ate a bagel.'));
    });
});

describe('Part 3', function() {
    it('should be a function', function () {
        assert.equal(typeof(updateStatus), 'function');
    });
    it('should return the team member\'s new status', function() {
        assert.equal(updateStatus(newestEngineer), 'Kyle ate a bagel.');
        assert.equal(updateStatus(engineerTurnedProductManager), 'Sycho should get some sleep.');
        assert.equal(updateStatus(vacationingInSunnyvale), 'George is looking for a comfortable couch.');
    });
    it('should add a statusMessage property to the teamMember', function() {
        assert.equal(newestEngineer.statusMessage, 'Kyle is hungry.');
        assert.equal(engineerTurnedProductManager.statusMessage, 'Sycho is tired.');
        assert.equal(vacationingInSunnyvale.statusMessage, 'George bought a car.');
    });
});
