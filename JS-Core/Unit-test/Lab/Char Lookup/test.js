let expect = require('chai').expect;
let lookupChar = require('./class');

describe('test char from string at index', function () {
    it('with parameter number, should return undefined', function () {
        let expected = lookupChar(1, 1);
        expect(expected).to.equal(undefined);
    });
    it('test with not-integer for second parameter', function () {
        let expected = lookupChar('1', '1');
        expect(expected).to.equal(undefined);
    })
    it('test with floating', function () {
        let expected = lookupChar('Vesko', 5.50);
        expect(expected).to.equal(undefined);
    });
    it('test index smaller than 0', function () {
        let expected = lookupChar('Marti', -5);
        expect(expected).to.equal('Incorrect index');
    });
    it('length smaller than index should return : Incorrect index', function () {
        let expected = lookupChar('vesko', 20)
        expect(expected).to.equal('Incorrect index')
    }); 
    it('test correct string and index', function () {
        let expected = lookupChar('Vesko', 1);

        expect(expected).to.equal('e');
    })
});