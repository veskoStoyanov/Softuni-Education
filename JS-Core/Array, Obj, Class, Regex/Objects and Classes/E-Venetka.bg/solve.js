function solve(input) {
    let obj = {};
    let model = {};

    for (const m of input) {
        if (!obj.hasOwnProperty(m.town)) {
            obj[m.town] = {
                price: m.price,
                venetka: 1,
                [m.model]: {
                    counter: 1,
                    prices: m.price
                }
            }
        } else {
            obj[m.town].price += m.price;
            obj[m.town].venetka++;
            if (!obj[m.town].hasOwnProperty(m.model)) {
                obj[m.town][m.model] = {
                    counter: 1,
                    prices: m.price
                }
            } else {
                obj[m.town][m.model].prices += m.price;
                obj[m.town][m.model].counter++;
            }
        }

        if (!model.hasOwnProperty(m.model)) {
            model[m.model] = 1;
        } else {
            model[m.model]++;
        }
    }

    let sorted = Object.keys(obj).sort().sort((a, b) => {
        return obj[b].venetka - obj[a].venetka;
    }).sort((a, b) => {
        return obj[b].price - obj[a].price;
    })

    let name = sorted[0];
    let sortedModel = Object.keys(obj[name]).splice(2).sort().sort((a, b) => {
        return obj[name][b].prices - obj[name][a].prices;
    }).sort((a, b) => {
        return obj[name][b].counter - (obj[name][a].counter);
    })

    let modCar = sortedModel[0]
    let objectt = {};

    for (const token of input) {
        if (token.model === modCar) {
            if (!objectt.hasOwnProperty(token.town)) {
                objectt[token.town] = [];
            }
            objectt[token.town].push(token.regNumber);
        }
    }

    console.log(`${name} is most profitable - ${obj[name].price} BGN`);
    console.log(`Most driven model: ${modCar}`);

    let sortRegNum = Object.keys(objectt).sort();
    for (const m of sortRegNum) {
        let sortNum = objectt[m].sort().join(', ');

        console.log(`${m}: ${sortNum}`);
    }
}
solve();