function solve(input) {
    let totalIncome = 0;

    for (let order of input) {
        let drink;
        let commands = order.split(', ');
        let coin = parseFloat(commands.shift());
        let money = 0.00;       
        let product = commands.shift();

        if (product === 'coffee') {
            let type = commands.shift();
            if (type === 'caffeine') {
                money += 0.80;               
                if (commands[0] === 'milk') {
                    commands.shift();
                    money += parseFloat((0.80 * 0.10).toFixed(1));
                }
                drink = 'coffee';
            }
            else if (type === 'decaf') {
                money += 0.90;               
                if (commands[0] === 'milk') {
                    commands.shift();
                    money += parseFloat((0.90 * 0.10).toFixed(1));

                }
                drink = 'coffee';
            }
        } else if (product === 'tea') {
            money += 0.80;
            if (commands[0] === 'milk') {
                commands.shift();
                money += parseFloat((0.80 * 0.10).toFixed(1));
            }
            drink = 'tea';
        }

        let sugar = Number(commands.shift());
        if (sugar >= 1 && sugar <= 5) {
            money += 0.10;
        }
        
        let price = parseFloat((coin - money).toFixed(2));
        if (price >= 0) {
            totalIncome += money;
            console.log(`You ordered ${drink}. Price: ${(money).toFixed(2)}$ Change: ${(price).toFixed(2)}$`);
        } else {
            coin = Math.abs(coin);
            console.log(`Not enough money for ${drink}. Need ${(Math.abs(price)).toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);

}
solve();