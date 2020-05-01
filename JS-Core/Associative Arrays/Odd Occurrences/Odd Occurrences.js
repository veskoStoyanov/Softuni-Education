function solve(params) {

    let map = new Map();

    let wordss = params.split(' ');
   let words = wordss.map(e => e.toLowerCase());

    for (let m of words) {

        if (!map.has(m)) {

            map.set(m, 1);
        }
        else {
            let num = map.get(m) + 1;
            map.set(m, num);
        }
    }

    let keys = [];

    for (let [key, value] of map) {

        if (value % 2 !== 0) {
            
            keys.push(key);
        }
    }
    console.log(keys.join(' '));
}
solve();