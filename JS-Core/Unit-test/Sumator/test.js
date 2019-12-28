let expect = require('chai').expect;
let Sumator = require('./class');

describe('Sumator', function () {
    let list;
    this.beforeEach(function () {
        list = new Sumator();
    })
    describe('', function () {
        it('', function () {

        });
    });
    describe('do the props consist', function () {
        it('data', function () {
            expect(list.data !== undefined).to.equal(true);
        });

        it('add', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true);
        });
        it('sumNums', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true);
        });
        it('removeByFilter', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true);
        });
        it('toString', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true);
        });
       
    });
    describe('constructor', function () {
        it('prop data is it empty array', function () {

            expect(list.data).to.eql([]);

        });
        it('prop data is it empty array', function () {

            expect(list.data.length).to.equal(0);
        });
        it('prop data is it empty array', function () {

            expect(list.data.join('')).to.equal('');
        });
        it('prop data is it empty array', function () {
            let expected = Array.isArray(list.data);
            expect(expected).to.equal(true);
        });

    });
    describe('add', function () {
        it('only numbers', function () {
            list.add(5);
            list.add(10);
            list.add(20);

            expect(list.data.join(', ')).to.eql(`5, 10, 20`);
        });

        it('only string', function () {
            list.add('5');
            list.add('vesko');
            list.add('kiro');

            expect(list.data.join(', ')).to.eql(`5, vesko, kiro`);
        });
        it('only objects', function () {
            list.add({});
            list.add({ name: 'vesko' });

            expect(list.data.join(', ')).to.eql(`[object Object], [object Object]`);
        });
        it('mix data', function () {
            list.add({});
            list.add(5.50);
            list.add('vesko');

            expect(list.data.join(', ')).to.eql(`[object Object], 5.5, vesko`);
        });
    });

    describe('sum', function () {
        it('only numbers', function () {
            list.add(5);
            list.add(10);
            list.add(20);
            expect(list.sumNums()).to.equal(35);
        });

        it('mix data', function () {
            list.add(5);
            list.add([]);
            list.add('vesko');
            list.add(30)
            expect(list.sumNums()).to.equal(35);
        });
        it('without numbers', function () {
            list.add([]);
            list.add('vesko');
            expect(list.sumNums()).to.equal(0);
        });
    });
    describe('removeByFilter', function () {
        it('even nums', function () {
            for (let i = 0; i <= 10; i++) {
                list.add(i);
            }
            list.removeByFilter((x) => x % 2 === 0);
            expect(list.data.join(' ')).to.equal('1 3 5 7 9');
        });

        it('WITH UNDEFINED', function () {
            for (let i = 0; i <= 10; i++) {
                list.add(i);
            }

            expect(() => list.removeByFilter(undefined)).to.throw();
        });
    });

    describe('toString', function () {
        it('with data', function () {
            list.add('vesko');
            list.add(5);

            expect(list.toString()).to.equal('vesko, 5')
        });

        it('with no data', function () {

            expect(list.toString()).to.equal('(empty)')
        });
    });
});