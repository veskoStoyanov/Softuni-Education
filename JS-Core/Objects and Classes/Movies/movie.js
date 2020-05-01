function solve(input) {
    let movies = [];

    for (let text of input) {
        if (text.includes('add movie ')) {
            let command = text.split('add movie ');
            let nameFilm = command[1];
            movies.push({name: nameFilm});

        } else if (text.includes(' directed by ')) {

            let command = text.split(' directed by ');
            let movieName = command[0];
            let directorName = command[1];
            addDirector(movieName, directorName)

        } else if (text.includes(' on date ')) {
            let command = text.split(' on date ');
            let filmName = command[0];
            let date = command[1];

            addData(filmName, date)
        }
    }

    printMovies();

    function addDirector(movieName, directorName) {
        let findMovie = movies.find(m => m.name === movieName);
        if (findMovie) {
            findMovie.director = directorName;
        }
    }

    function addData(movieName, date) {
        let findMovie = movies.find(m => m.name === movieName);

        if (findMovie) {
            findMovie.date = date;
        }
    }

    function printMovies() {
        for (let obj of movies) {
            if (obj.hasOwnProperty('name') &&
                obj.hasOwnProperty('date') &&
                obj.hasOwnProperty('director')) {
                console.log(JSON.stringify(obj));
            }
        }
    }
}

solve([
    'add movie Fast and Furious',
    'add movie Godfather',
    'Inception directed by Christopher Nolan',
    'Godfather directed by Francis Ford Coppola',
    'Godfather on date 29.07.2018',
    'Fast and Furious on date 30.07.2018',
    'Batman on date 01.08.2018',
    'Fast and Furious directed by Rob Cohen'
]);