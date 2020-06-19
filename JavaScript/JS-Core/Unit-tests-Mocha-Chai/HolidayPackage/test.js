let expect = require('chai').expect;
let HolidayPackage = require('./class');

describe('test HolidayPackage', function () {
    let holiday;
    beforeEach(function () {
        holiday = new HolidayPackage('Italy', 'Summer');
    });
    describe('test constructor', function () {
        it('test property destination', function () {
            let expected = holiday.hasOwnProperty('destination');
            expect(expected).to.equal(true);
        });

        it('test property season', function () {
            let expected = holiday.hasOwnProperty('season');
            expect(expected).to.equal(true);
        });

        it('test property insuranceIncluded', function () {
            let expected = holiday.insuranceIncluded;
            expect(expected).to.equal(false);
        });

        it('test vacationers type and length', function () {
            let expected = holiday.vacationers;
            expect(expected).to.eql([]);
        });
    });

    describe('test insuranceIncluded', function () {
        it('test wrong params', function () {
            expect(() => holiday.insuranceIncluded = 'Vesko').to.throw();
        });
    });

    describe('test prop showVacationers', function () {
        it('test with empty', function () {

            expect(holiday.showVacationers()).to.equal("No vacationers are added yet");
        });

        it('test correct data', function () {
            holiday.addVacationer('Vesko Stoqnov');
            expect(holiday.showVacationers()).to.equal("Vacationers:\n" + 'Vesko Stoqnov');
        });
    });

    describe('test addVacationer', function () {
        it('wrong !== string', function () {
            expect(() => holiday.addVacationer(555)).to.throw();
        });
        it('wrong space', function () {
            expect(() => holiday.addVacationer(' ')).to.throw();
        });
        it('wrong empty', function () {
            expect(() => holiday.addVacationer('')).to.throw();
        });

        it('wrong name', function () {
            expect(() => holiday.addVacationer('Vesko')).to.throw();
        });

        it('correct data', function () {
            holiday.addVacationer('Vesko Stoqnov');
            holiday.addVacationer('Marti Toncheva');

            expect(holiday.vacationers.join(',')).to.equal('Vesko Stoqnov,Marti Toncheva');
        });
    });

    describe('generateHolidayPackage', function () {
        it('vacationers < 0', function () {
            expect(() => holiday.generateHolidayPackage()).to.throw();
        });

        it('season is Summer || Winter', function () {
            holiday.addVacationer('Vesko Stoqnov');

            expect(holiday.generateHolidayPackage()).to.equal("Holiday Package Generated\n" +
                "Destination: " + 'Italy' + "\n" +
                'Vacationers:\n' +
                'Vesko Stoqnov\n' +
                'Price: ' + 600);
        });

        it('season !== Summer || Winter', function () {
            let vacant = new HolidayPackage('Viena', 'Autumn')
            vacant.addVacationer('Vesko Stoqnov');

            expect(vacant.generateHolidayPackage()).to.equal("Holiday Package Generated\n" +
                "Destination: " + 'Viena' + "\n" +
                'Vacationers:\n' +
                'Vesko Stoqnov\n' +
                'Price: ' + 400);
        });
        it('test insuranceIncluded === true', function () {
         holiday.addVacationer('Vesko Stoqnov');
         holiday.insuranceIncluded = true;
         
         expect(holiday.generateHolidayPackage()).to.equal("Holiday Package Generated\n" +
                "Destination: " + 'Italy' + "\n" +
                'Vacationers:\n' +
                'Vesko Stoqnov\n' +
                'Price: ' + 700);
 
        });

    });
});