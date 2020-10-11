function solve(input) {
    let race = input.shift().split(' ');
    let obj = {
        Join: function (name) {
            if (!race.includes(name)) {
                race.push(name);
            }
        },
        Crash: function (name) {
            if (race.includes(name)) {
                let index = race.indexOf(name);
                race.splice(index, 1);
            }
        },
        Overtake: function (name) {
            if (race.includes(name)) {
                index = race.indexOf(name);
                race.splice(index, 1);
                let max = Math.max(index - 1, 0);
                race.splice(max, 0, name);
            }
        },
        Pit: function (name) {
            if (race.includes(name)) {
                let index = race.indexOf(name);
                race.splice(index, 1);
                let min = Math.min(race.length - 1, index + 1);
                race.splice(min, 0, name);
            }
        }

    }
    for (const m of input) {
        let [command, name] = m.split(' ');

        if (obj.hasOwnProperty(command)) {
            obj[command](name);
        }



    }
    console.log(race.join(' ~ '))
}