let expect = require('chai').expect;
let FilmStudio = require('./class');

describe('FilmStudio', function () {
    let filmStudio;
    this.beforeEach(function () {
        filmStudio = new FilmStudio('Vesko');
    })
    describe('constructor', function () {
        it('prop name', function () {

            expect(filmStudio.name).to.equal('Vesko');
        });
        it('prop name', function () {

            expect(typeof filmStudio.name).to.equal('string');
        });

        it('prop films', function () {

            expect(filmStudio.films).to.eql([]);
        });
    });

    describe('makeMovie', function () {
        it('makeMovie with more data', function () {
            let arr = ['ves', 'mes'];
            expect(() => filmStudio.makeMovie('Eminen', arr, 'boicho')).to.throw();
        });

        it('makeMovie with less data', function () {
            let arr = ['ves', 'mes'];
            expect(() => filmStudio.makeMovie('Eminen')).to.throw();
        });

        it('makeMovie first wrong data', function () {
            let arr = ['ves', 'mes'];
            expect(() => filmStudio.makeMovie(55, arr)).to.throw();
        });

        it('makeMovie sec wrong data', function () {
            let arr = ['ves', 'mes'];
            expect(() => filmStudio.makeMovie('vesi', 55)).to.throw();
        });

        it('makeMovie both wrong data', function () {
            let arr = ['ves', 'mes'];
            expect(() => filmStudio.makeMovie({}, 'vesi')).to.throw();
        });

        it('makeMovie with correct data', function () {
            let result  =filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            expect(result.filmName).to.equal('The Avengers');
        });

        
    });

    describe('prop casting', function () {
        it('empty film', function () {
            expect(filmStudio.casting('ves', 'mar')).to.equal(`There are no films yet in Vesko.`)
        });

        it('without role', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

            expect(filmStudio.casting('vesko', 'eminem')).to.equal('vesko, we cannot find a eminem role...')
        });

        it('with role', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

            expect(filmStudio.casting('vesko', 'Thor')).to.equal('You got the job! Mr. vesko you are next Thor in the The Avengers. Congratz!')
        });
    });

    describe('prop lookForProducer', function () {
        it('with empty films', function () {
            expect(() => filmStudio.lookForProducer('vesko')).to.throw();
        });

        it('with wrong film', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            expect(() => filmStudio.lookForProducer('vesko')).to.throw(`vesko do not exist yet, but we need the money...`);
        });

        it('with film', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor']);
            expect(filmStudio.lookForProducer('The Avengers')).to.equal(`Film name: The Avengers\nCast:\nfalse as Iron-Man\nfalse as Thor\n`);
        });

    });
});