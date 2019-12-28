let expect = require('chai').expect;
let SoftUniFy = require('./class');

describe('SoftUniFy', () => {
    let sf;
    beforeEach(() => {
        sf = new SoftUniFy();
    });

    describe('constructor', function () {

        it('is empty object', function () {
            expect(sf.allSongs).eql({});
        });

    });
    describe('playSong', function () {
        it('without songs in', function () {
            expect(sf.playSong('eminem')).to.equal(`You have not downloaded a eminem song yet. Use SoftUniFy\'s function downloadSong() to change that!`)
        });

        it('without songs in', function () {
            sf.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL');
            expect(sf.playSong('Phenomenal')).to.equal('Eminem:\nPhenomenal - IM PHENOMENAL\n');
        });
    });

    describe('songsList', function () {
        it('without songs in', function () {
            expect(sf.songsList).to.equal(`Your song list is empty`)
        });
        it('with songs', function () {
            sf.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL');
            expect(sf.songsList).to.equal(`Phenomenal - IM PHENOMENAL`);
        });

    });

    describe('rateArtist', function () {

        it('without artist', function () {
            expect(sf.rateArtist('eminem')).to.equal('The eminem is not on your artist list.')
        });
        it('with artist', function () {
            sf.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL');
            expect(sf.rateArtist('Eminem')).to.equal(0); 
        });
    });

});
