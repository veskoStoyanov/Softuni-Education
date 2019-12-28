function f(input) {
    let priceGold = 67.51;
    let priceBitcoin = 11949.16;
    let money = 0;
    let bitcoin = 0;
    let day = 0;
    let daysBuyBitcoin = 0;
    let gold = 0;
    let daysFirstBuy =0;
    let isBuy = true;
    for (let i = 0; i < input.length; i++){
        day++;
        if (day % 3 === 0) {
            gold = input[i] - (input[i] * 0.30);
        } else {
            gold = input[i];
        }
        money += priceGold * gold;

        while  (true){
            if (money >= priceBitcoin) {
                money -= priceBitcoin;
                bitcoin++;

                if (isBuy) {
                    daysFirstBuy=day;
                    isBuy=false;
                }
            }
            else{
                break;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (daysFirstBuy>0){
        console.log(`Day of the first purchased bitcoin: ${daysFirstBuy}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}