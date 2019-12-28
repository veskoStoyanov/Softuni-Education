let expect = require('chai').expect;
let AutoService = require('./class');

describe('test AutoService', function () {
    let auto;
    beforeEach(function () {
        auto = new AutoService('2');
    });
    describe('', function () {
        it('', function () {

        });
    });
    describe('check name props', function () {
        it('availableSpace', function () {
            expect(AutoService.prototype.hasOwnProperty('availableSpace')).to.equal(true);
        });

        it('repairCar', function () {
            expect(AutoService.prototype.hasOwnProperty('repairCar')).to.equal(true);
        });

        it('signUpForReview', function () {
            expect(AutoService.prototype.hasOwnProperty('signUpForReview')).to.equal(true);
        });

        it('carInfo', function () {
            expect(AutoService.prototype.hasOwnProperty('carInfo')).to.equal(true);
        });

        it('garageCapacity', function () {
            expect(auto.garageCapacity).to.equal('2');
        });

        it('workInProgress', function () {
            expect(auto.workInProgress).to.eql([]);
        });

        it('backlogWork', function () {
            expect(auto.backlogWork).to.eql([]);
        });
    });

    describe('availableSpace', function () {
        it('test', function () {
            expect(auto.availableSpace).to.equal(2)
        });
    });

    describe('repairCar', function () {
        it('workingPlace.length = 0', function () {
            expect(auto.repairCar()).to.equal('No clients, we are just chilling...');
        });

        it('.length > 0', function () {
            auto.signUpForReview('Philip', 'PB4321PB', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS' });
            auto.signUpForReview('Philip', 'PB4321PB', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS' });

            expect(auto.repairCar()).to.equal('Your car was fine, nothing was repaired.');
        });

        it('backlogWork.length > 0', function () {
            auto.signUpForReview('Philip', 'PB4321PB', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS' });
            auto.signUpForReview('Philip', 'PB4321PB', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS' });
            auto.signUpForReview('Philip', 'PB4321PB', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS' });
            auto.signUpForReview('Philip', 'PB4321PB', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS' });

            expect(auto.repairCar()).to.equal('Your car was fine, nothing was repaired.');
        });

        it('with broken in workingPlace', function () {
            auto.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            auto.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            auto.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});

            expect(auto.repairCar()).to.equal('Your doors were repaired.');
        });
    });

    describe('signUpForReview', function () {
        it('with space', function () {
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));
            expect(auto.workInProgress.length).to.equal(2);
            expect(auto.backlogWork.length).to.equal(2);
        });

        it('with space', function () {
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));

            expect(auto.workInProgress.length).to.equal(2);
            expect(auto.backlogWork.length).to.equal(0);
        });
    });

    describe('carInfo', function () {
        it('wrong name ', function () {
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));
            expect(auto.carInfo('CA1234CA', 'Ivan')).to.equal('There is no car with platenumber CA1234CA and owner Ivan.')
        });

        it('wrong number ', function () {
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));
            expect(auto.carInfo('CA3334CA', 'Peter')).to.equal('There is no car with platenumber CA3334CA and owner Peter.')
        });

        it('wrong name and number ', function () {
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));
            expect(auto.carInfo('CA3334CA', 'Ivan')).to.equal('There is no car with platenumber CA3334CA and owner Ivan.')
        });

        it('corect name and number in workInProgress', function () {
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));
            auto.signUpForReview('Philip', 'PB4321PB', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS' });
            let obj = {
                plateNumber: 'PB4321PB',
                clientName: 'Philip',
                carInfo: { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS' }
            }
            expect(auto.carInfo('PB4321PB', 'Philip')).to.eql(obj)
        });

        it('corect name and number in backlogWork', function () {
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));
            auto.signUpForReview(('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }));
            auto.signUpForReview('Philip', 'PB4321PB', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS' });
            let obj = {
                plateNumber: 'PB4321PB',
                clientName: 'Philip',
                carInfo: { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS' }
            }
            expect(auto.carInfo('PB4321PB', 'Philip')).to.eql(obj)
        });
    });


});