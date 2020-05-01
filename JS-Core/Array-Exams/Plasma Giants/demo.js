function solve(array, cutSize) {   
    let firstPart = array.slice(0, array.length / 2);
    let secPart = array.slice(array.length / 2);
    let firstLife = 0;
    let secLife = 0;

    while (firstPart.length > 0 && secPart.length > 0) {
        firstLife += firstPart.splice(0, cutSize).reduce((a, b) => a * b);
        secLife += secPart.splice(0, cutSize).reduce((a, b) => a * b);
    }

    let damage = Math.min(...array);
    let health = Math.max(...array);
    let rounds = 1;
    if (damage !== 0) {
        while (firstLife > health && secLife > health) {
            firstLife -= damage;
            secLife -= damage;
            rounds++;
        }
    }

    if (firstLife === secLife) {
        console.log(`Its a draw ${Math.round(firstLife)} - ${Math.round(secLife)}`);
    } else if (firstLife > secLife) {
        console.log(`First Giant defeated Second Giant with result ${firstLife} - ${secLife} in ${rounds} rounds`);
    } else {
        console.log(`Second Giant defeated First Giant with result ${secLife} - ${firstLife} in ${rounds} rounds`);
    }   
}
solve();