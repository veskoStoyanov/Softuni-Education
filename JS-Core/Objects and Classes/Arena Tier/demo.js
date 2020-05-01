function solve(input) {
    let obj = {};

    for (const text of input) {
        if (text.includes(' -> ')) {
            let [name, item, score] = text.split(' -> ');
            score = Number(score);
            if (!obj.hasOwnProperty(name)) {
                obj[name] = {};
                obj[name][item] = score;
                obj[name]['__totalScore__'] = score;
            }
            else {
                if (!obj[name].hasOwnProperty(item)) {
                    obj[name][item] = score;
                    obj[name]['__totalScore__'] += score;
                } else {
                    if (obj[name][item] < score) {
                        obj[name]['__totalScore__'] -= obj[name][item];
                        obj[name][item] = score;
                    }
                }
            }
        } else if (text.includes(' vs ')) {
            let [firstGl, secondGl] = text.split(' vs ');
            if (obj.hasOwnProperty(firstGl) && obj.hasOwnProperty(secondGl)) {
                for (const key in obj[firstGl]) {
                    let g1Score = obj[firstGl][key]
                    let g2Score = obj[secondGl][key]
                    if (g1Score && g2Score && key !== '__totalScore__') {
                        if (g1Score > g2Score) {
                            delete obj[secondGl]
                            break;
                        } else {
                            delete obj[firstGl]
                            break;
                        }
                    }
                }
            }
        } else {
            let sortedObj = Object.keys(obj).sort().sort((f, s) => {
                return obj[s]['__totalScore__'] - obj[f]['__totalScore__']
            })

            for (const key of sortedObj) {
                console.log(`${key}: ${obj[key]['__totalScore__']} skill`);

                let sorted = Object.keys(obj[key]).filter(x => x !== '__totalScore__').sort().sort((a, b) => {
                    return obj[key][b] - obj[key][a]
                })
                for (const m of sorted) {
                    console.log(`- ${m} <!> ${obj[key][m]}`)
                }
            }
        }
    }

}