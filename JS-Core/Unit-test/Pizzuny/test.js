let expect = require('chai').expect;
let PizzUni = require('./index');

describe('test AutoService', function () {
    let piza;
    beforeEach(function () {
        piza = new PizzUni();
    });

    describe('if props consist', function () {
        it('', function () {
            expect(PizzUni.prototype.hasOwnProperty('registerUser')).to.equal(true);
        });

        it('', function () {
            expect(PizzUni.prototype.hasOwnProperty('makeAnOrder')).to.equal(true);
        });

        it('', function () {
            expect(PizzUni.prototype.hasOwnProperty('detailsAboutMyOrder')).to.equal(true);
        });

        it('', function () {
            expect(PizzUni.prototype.hasOwnProperty('doesTheUserExist')).to.equal(true);
        });

        it('', function () {
            expect(PizzUni.prototype.hasOwnProperty('completeOrder')).to.equal(true);
        });



        it('', function () {
            expect(piza.availableProducts['pizzas']).to.eql(['Italian Style', 'Barbeque Classic', 'Classic Margherita']);
        });

        it('', function () {
            expect(piza.availableProducts['drinks']).to.eql(['Coca-Cola', 'Fanta', 'Water']);
        });

        it('arr', function () {
            expect(piza.registeredUsers).to.eql([]);
        });
        it('arr', function () {
            expect(piza.orders).to.eql([]);
        });

    });

    describe('register email', function () {
        it('there is no a mail', function () {

            let obj = {
                email: 'vesko',
                orderHistory: []
            }
            expect(piza.registerUser('vesko')).to.eql(obj);
        });
        it('there is a mail', function () {
            piza.registerUser('vesko')

            expect(() => piza.registerUser('vesko')).to.throw(Error, `This email address (vesko) is already being used!`);
        });

        it('add mail', function () {
            piza.registerUser('vesko')

            expect(piza.registeredUsers.length).to.equal(1);
        });

        it('add mail', function () {
            piza.registerUser('vesko')

            expect(piza.registeredUsers.join('')).to.equal('[object Object]');
        });

        

    });


    describe('make order', function () {
        it('', function () {
            expect(() => piza.makeAnOrder('vesko', 'Italian Style', 'Water')).throw(Error, 'You must be registered to make orders!')
        });

        it('', function () {
            piza.registerUser('vesko')
            expect(() => piza.makeAnOrder('vesko', 'Italia', 'Water')).throw(Error, 'You must order at least 1 Pizza to finish the order.')
        });

        it('ok with drink', function () {
            piza.registerUser('vesko')
            piza.makeAnOrder('vesko', 'Italian Style', 'Water')
            expect(piza.orders.join(' ')).to.equal('[object Object]');
        });

        it('ok without drink', function () {
            piza.registerUser('vesko')
            piza.makeAnOrder('vesko', 'Italian Style')
            expect(piza.orders.join(' ')).to.equal('[object Object]');
        });

        it('ok with drink', function () {
            piza.registerUser('vesko')
            
            expect(piza.makeAnOrder('vesko', 'Italian Style', 'Water')).to.equal(0);
        });
    
    });

    describe('make order', function () {
        it('completeOrder', function () {
            piza.registerUser('vesko');
            piza.makeAnOrder('vesko', 'Italian Style', 'Water');

            expect(piza.completeOrder()).eql({
                orderedPizza: 'Italian Style',
                orderedDrink: 'Water',
                email: 'vesko',
                status: 'completed'
              });

        });
    });

    describe('detailsAboutMyOrder', function () {
        it('completeOrder', function () {
            piza.registerUser('vesko');
            piza.makeAnOrder('vesko', 'Italian Style', 'Water');

            expect(piza.detailsAboutMyOrder(0)).to.equal(`Status of your order: pending`);

        });

        it('completeOrder', function () {
            piza.registerUser('vesko');
            piza.makeAnOrder('vesko', 'Italian Style', 'Water');

            expect(piza.detailsAboutMyOrder(4)).to.equal(undefined);

        });
    });

    describe('detailsAboutMyOrder', function () {
        it('completeOrder', function () {
            piza.registerUser('vesko');
            piza.makeAnOrder('vesko', 'Italian Style', 'Water');

            expect(piza.detailsAboutMyOrder(0)).to.equal(`Status of your order: pending`);

        });

        it('doesTheUserExist', function () {
            piza.registerUser('vesko');
            piza.makeAnOrder('vesko', 'Italian Style', 'Water');

            expect(piza.doesTheUserExist('vesko')).to.eql({
                email: 'vesko',
                orderHistory: [ { orderedPizza: 'Italian Style', orderedDrink: 'Water' } ]
              });

        });

        it('doesTheUserExist', function () {
            piza.registerUser('vesko');
            piza.makeAnOrder('vesko', 'Italian Style', 'Water');

            expect(piza.doesTheUserExist('mincho')).to.equal(undefined);

        });
    });

});

