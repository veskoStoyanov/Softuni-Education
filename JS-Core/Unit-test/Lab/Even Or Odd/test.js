let expect = require('chai').expect;
let isOddOrEven = require('./class');

describe('isOddOrEven', function () {

    it('test with number, should return undefined', function () {
        let expected = isOddOrEven(100);

        expect(expected).to.equal(undefined, 'function return undefine')
    });
    it('test with object should return undefined', function () {
        let expected = isOddOrEven({ name: 'Vesko' });

        expect(expected).to.equal(undefined);
    });
    it('String parametar with even length, should return even', function () {
        let expexted = isOddOrEven('VeskoMar');
        expect(expexted).to.equal('even')
    });
    it('String parametar with odd length, should return odd', function () {
        let expected = isOddOrEven('Marti');
        expect(expected).to.equal('odd');
    })
});