function solve(input) {
    let obj = {}

    for (const m of input) {
        let [team, name, point] = m.split(' -> ');
        point = Number(point);
        if (!obj.hasOwnProperty(team)) {
            obj[team] = {};
            obj[team][name] = point;
            obj[team]['totalPoint'] = point;
        } else {
            let boolCount = countKeys(team);
            if (!obj[team].hasOwnProperty(name) && boolCount) {
                obj[team][name] = point;
                obj[team]['totalPoint'] += point;
            } else {
                obj[team][name] += point;
                obj[team]['totalPoint'] += point;
            }
        }
    }

    let sorted = Object.keys(obj).sort((a, b) => {
        return obj[b]['totalPoint'] - obj[a]['totalPoint'];
    })

    sorted.splice(3)

    for (const item of sorted) {
        console.log(`${item}: ${obj[item]['totalPoint']}`);

        let keysSort = Object.keys(obj[item]).filter(x => x !== 'totalPoint').sort((a, b) => {
            return obj[item][b] - obj[item][a];
        })
        for (const n of keysSort) {
            console.log(`-- ${n} -> ${obj[item][n]}`);
        }
    }

    function countKeys(team) {
        let cnrKeys = Object.keys(obj[team])
        let length = cnrKeys.length;
        if (length > 2) {
            return false;
        }
        return true;
    }
}