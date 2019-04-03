var add = require('./add.js');
var expect = require('chai').expect;

describe('test add', function() {
    it('1 + 1 should be equal to 2', function() {
        expect(add(1,1)).to.be.equal(2);
    });

    it('3 + (-3) should be equal to 0', function() {
        expect(add(3, -3)).to.be.equal(0);
    });
});