function solve(input, input2) {
    let header = input.shift();
    let commands = input2.split(' ');
    let sorted = [];

    if (commands[0] === 'sort') {
        let type = commands[1];
        let index = header.indexOf(type);

        if (isNaN(type)) {
            sorted = input.sort((a, b) => {
                return a[index].localeCompare(b[index]);
            });
        } else {
            sorted = input.sort((a, b) => {
                return a[index] - (b[index]);
            });
        }
    } else if (commands[0] === 'filter') {
        let command = commands[1];
        let type = commands[2];
        let index = header.indexOf(command);

        input.forEach((e) => {
            if (e[index] === type) {
                sorted.push(e);
            }
        });
    } else if (commands[0] === 'hide') {
        let type = commands[1];
        let index = header.indexOf(type);

        input.forEach((a) => {
            a.splice(index, 1);
        })

        header.splice(index, 1);
        sorted = input;
    }

    console.log(header.join(' | '));
    for (const m of sorted) {
        console.log(m.join(' | '));
    }
}
solve();