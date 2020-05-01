function solve(params) {

    let line = params.shift().split('|');
    let healt = 100;
    let coins = 0;
    let room = 0;

    for (let index = 0; index < line.length; index++) {
        room++;
        let token = line[index].split(' ');
        let command = token[0];

        if (command === 'chest') {

            let money = +token[1];
            coins += money;

            console.log(`You found ${money} coins.`);
        }
        else if (command == "potion") {

            let help = +token[1];

            if (healt + help > 100) {
                help = 100 - healt;
            }
            healt += help;

            console.log(`You healed for ${help} hp.`);
            console.log(`Current health: ${healt} hp.`);
        }
        else {
            let damage = +token[1];
            healt -= damage;

            if (healt <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                return;
            }
            console.log(`You slayed ${command}.`);
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${healt}`);
}
solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
