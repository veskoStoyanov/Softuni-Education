function solve(input) {
    let allBancnotes = [];
    for (const array of input) {
        let allMoney = multiplayAllMoney(allBancnotes);
        if (array.length > 2) {
            let sum = addMoney(array);
            allMoney = multiplayAllMoney(allBancnotes);
            console.log(`Service Report: ${sum}$ inserted. Current balance: ${allMoney}$.`);
        } else if (array.length === 2) {
            let [moneyPerson, moneyDrawing] = array;
            if (moneyDrawing > moneyPerson) {
                console.log(`Not enough money in your account. Account balance: ${moneyPerson}$.`);
            }
            else if (allMoney < moneyDrawing) {
                console.log(`ATM machine is out of order!`);
            }
            else {
                banknotesDrawing(moneyDrawing, allBancnotes);
                console.log(`You get ${moneyDrawing}$. Account balance: ${moneyPerson - moneyDrawing}$. Thank you!`);
            }
        } else {
            let bancnote = array[0];
            let count = chechBancnotes(bancnote, allBancnotes);
            console.log(`Service Report: Banknotes from ${bancnote}$: ${count}.`);           
        }
    }

    function addMoney(array) {
        let sum = 0;
        for (let index = 0; index < array.length; index++) {
            allBancnotes.push(array[index]);
            sum += array[index];
        }
        return sum;
    }

    function banknotesDrawing(moneyDrawing, allBancnotes) {
        allBancnotes = allBancnotes.sort((a, b) => b - a);
        for (let i = 0; i < allBancnotes.length; i++) {
            if (allBancnotes[i] <= moneyDrawing) {
                moneyDrawing -= allBancnotes[i];
                allBancnotes.splice(i, 1);
                i--;
                if (moneyDrawing === 0) {
                    break;
                }
            }
        }
    }

    function multiplayAllMoney(allBancnotes) {
        let allMoney = 0;
        for (let i = 0; i < allBancnotes.length; i++) {
            allMoney += allBancnotes[i];
        }
        return allMoney;
    }

    function chechBancnotes(bancnote, allBancnotes) {
        let count = 0;
        for (let i = 0; i < allBancnotes.length; i++) {
            if(allBancnotes[i] === bancnote){
                count++;
            }           
        }
        return count;
    }
}
solve();