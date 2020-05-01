function solve(input) {

    let map = new Map();

    for (let m of input) {

        let token = m.split(' > ');

        let country = token[0];
        let city = token[1];
        let price = token[2];

        if (!map.has(country)) {

            let cityMap = new Map();
            cityMap.set(city, price);

            map.set(country, cityMap);
        }
        else {
            let cityMap = map.get(country);

            if (!cityMap.has(city)) {

                cityMap.set(city, price);
                map.set(country, cityMap);
            }
            else {
                let value = cityMap.get(city);

                if (price < value) {

                    cityMap.set(city, price);
                }
                map.set(country, cityMap);
            }
        }
    }
    let sortedMap = [...map].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sortedMap) {

        let sortedValue = [...value].sort((a, b) => a[1] - b[1])
            .map(e => `${e[0]} -> ${e[1]}`);

        console.log(`${key} -> ${sortedValue.join(' ')}`)
    }
}