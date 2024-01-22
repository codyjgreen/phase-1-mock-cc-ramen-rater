const assert = require('assert');
// Assuming these functions are exported from the module where they are defined
const { displayRamens, addSubmitListener, renderOneRamen, showRamenDetails, addNewRamen, deleteRamen } = require('../src/index.js');

describe('Ramen Rater Functions', function() {
    it('should have a function named displayRamens', function() {
        assert.strictEqual(typeof displayRamens, 'function');
    });

    it('should have a function named addSubmitListener', function() {
        assert.strictEqual(typeof addSubmitListener, 'function');
    });

    it('should have a function named renderOneRamen', function() {
        assert.strictEqual(typeof renderOneRamen, 'function');
    });

    it('should have a function named showRamenDetails', function() {
        assert.strictEqual(typeof showRamenDetails, 'function');
    });

    it('should have a function named addNewRamen', function() {
        assert.strictEqual(typeof addNewRamen, 'function');
    });

    it('should have a function named deleteRamen', function() {
        assert.strictEqual(typeof deleteRamen, 'function');
    });
});
