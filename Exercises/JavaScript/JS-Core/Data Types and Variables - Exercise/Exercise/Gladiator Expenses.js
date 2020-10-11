function main(lostCount, helmetPrice, swordPrice, shildPrice, armorPrice) {

    let sum = 0;

    for (let i = 1; i <= lostCount; i++) {
        if (i % 2 === 0) {
            sum += helmetPrice;
        }
        if(i % 3 === 0){
            sum+=swordPrice;
        }
        if(i % 6 === 0){
            sum+=shildPrice;
        }
        if(i % 12 === 0){
            sum+=armorPrice;
        }

    }
    sum= parseFloat(sum);
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}