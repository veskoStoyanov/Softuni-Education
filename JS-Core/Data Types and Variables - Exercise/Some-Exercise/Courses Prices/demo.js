function solve(fundamentals, advanced, applications, type) {
    let price = 0;
    if (fundamentals) {
        price += 170;
    } if (advanced) {
        price += 180;
    } if (applications) {
        price += 190;
    } if (advanced && fundamentals) {
        price -= 180 * 0.10;
    } if (advanced && fundamentals && applications) {
        price -= price * 0.06;
    } if (type === 'online') {
        price -= price * 0.06;
    }
    console.log(Math.round(price));
}
solve();