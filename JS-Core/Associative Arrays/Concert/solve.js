function solve(input) {
    let objNames = {};
    let objTime = {};
    let totalTime = 0;

    for (const value of input) {
        if (value === 'start of concert') {
            break;

        }

        let data = value.split('; ');
        let command = data[0];
        let band = data[1];

        if (command === 'Add') {
            let names = data[2].split(', ');
            if (!objNames.hasOwnProperty(band)) {
                objNames[band] = [];
            }

            for (const name of names) {
                if (!objNames[band].includes(name)) {
                    objNames[band].push(name);
                }
            }
        } else if (command === 'Play') {
            let time = parseInt(data[2]);
            totalTime += time;
            if (!objTime.hasOwnProperty(band)) {
                objTime[band] = 0;
            }
            objTime[band] += time;
        }
    }

    let sortedTimeArr = Object.keys(objTime)
        .sort()
        .sort((a, b) => {
            return objTime[b] - objTime[a];
        });

    let lastBand = input.pop();

    console.log(`Total time: ${totalTime}`);

    for (const key of sortedTimeArr) {
        console.log(`${key} -> ${objTime[key]}`);

    }
    console.log(lastBand);
    for (const value of objNames[lastBand]) {
            console.log(`=> ${value}`);
            
    }
    
}




solve([
    "Play; The Beatles; 2584",
    "Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr",
    "Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner",
    "Play; Eagles; 1869",
    "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
    "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart",
    "Play; The Rolling Stones; 4239",
    "start of concert",
    "The Rolling Stones"
]);