function solve(params) {

    let map = new Map();

    let input = params.shift().split(' ');

    for (let i = 0; i < input.length; i++) {

        let first = input[i];

        map.set(first, 0);

        for (let j = 0; j < params.length; j++) {

            let second = params[j];

            if (first === second) {

                let num = map.get(first) + 1;
                map.set(first, num);

            }
        }
    }
    let sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortedMap) {

        console.log(`${key} - ${value}`);
    }
}
solve();