function solve(input) {
    let peachSum = 0;
    let plumSum = 0;
    let cherrySum = 0;
    let rakiaSum = 0;
    for (const token of input) {
        [fruit, quantity] = token.split(' ').filter(x => x !=='');
        fruit = fruit.toLowerCase();
        quantity = Number(quantity);
        if (fruit === 'peach') {
            peachSum += quantity;
        }
        else if (fruit === 'plum') {
            plumSum += quantity;
        }
        else if (fruit === 'cherry') {
            cherrySum += quantity;
        }
        else {
            rakiaSum += quantity;
        }
    }
    let compCherry = ((cherrySum * 1000) / 9) / 25;
    let compPlum = ((plumSum * 1000) / 20) / 10;
    let compPeach = ((peachSum * 1000) / 140) / 2.5;
    let compRakia = rakiaSum / 5;

    console.group(`Cherry kompots: ${Math.floor(compCherry)}`);
    console.log(`Peach kompots: ${Math.floor(compPeach)}`);
    console.log(`Plum kompots: ${Math.floor(compPlum)}`);
    console.log(`Rakiya liters: ${compRakia.toFixed(2)}`);
}