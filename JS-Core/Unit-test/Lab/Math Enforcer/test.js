let expect = require('chai').expect;
let mathEnforcer = require('./class');

describe('mathEnforcerObject', () => {
    describe('test addFive', () => {
        it('addFive with positive number, should return the number + 5', () => {
            let expected = mathEnforcer.addFive(10);
            expect(expected).to.equal(15);
        });

        it('addFive with negative number, should return the number + 5', () => {
            let expected = mathEnforcer.addFive(-10);
            expect(expected).to.equal(-5);
        });

        it('addFive with floating number, should return the number + 5', () => {
            let expected = mathEnforcer.addFive(10.5);
            expect(expected).to.equal(15.5);
        });

        it('addFive with string as a parameter, should return undefined', () => {
            let expected = mathEnforcer.addFive('Marti');
            expect(expected).to.equal(undefined);
        });
    });

    describe('test subtractTen', () => {
        it('subtractTen with positive number, should return the number - 10', () => {
            let expected = mathEnforcer.subtractTen(10);
            expect(expected).to.equal(0);
        });

        it('subtractTen with negative number, should return the number - 10', () => {
            let expected = mathEnforcer.subtractTen(-10);
            expect(expected).to.equal(-20);
        });

        it('subtractTen with floating number, should return the number - 10', () => {
            let expected = mathEnforcer.subtractTen(10.5);
            expect(expected).to.be.closeTo(0.5, 0.01);
        });

        it('subtractTen with string as a parameter, should return undefined', () => {
            let expected = mathEnforcer.subtractTen('Marti');
            expect(expected).to.equal(undefined);
        });
    })

    describe('test sum', () => {
        it('test sum with two positive number, should return their sum', () => {
            let expected = mathEnforcer.sum(2, 3);
            expect(expected).to.equal(5);
        });

        it('test sum with two floating number, should return their sum', () => {
            let expected = mathEnforcer.sum(2.2, 3.3);
            expect(expected).to.be.closeTo(5.5, 0.01);
        });

        it('test sum with a number and a string should return their undefined', () => {
            let expected = mathEnforcer.sum(2, 'vesko');
            expect(expected).to.equal(undefined);
        });

        it('test sum with a string and a number should return their undefined', () => {
            let expected = mathEnforcer.sum('vesko', 20);
            expect(expected).to.equal(undefined);
        });
    })
})

