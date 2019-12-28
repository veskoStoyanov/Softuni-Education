function solve(input) {
    let token = input[0].split('|');
    let patternFirst = /([#$%*&])([A-Z]+)\1/;
    let firstStr = token[0];
    let firstMatch = firstStr.match(patternFirst);
    let text = firstMatch[2];

    for (let i = 0; i < text.length; i++) {

        let symbol = text[i];
        let aski = symbol.charCodeAt(0);

        let patternSec = new RegExp(`${aski}:([0-9][0-9])`);
        let secondStr = token[1];

        let matchSec = secondStr.match(patternSec);
        let num = +matchSec[1] +1;

        let thirdStr = token[2];

        let arr = thirdStr.split(' ');

        for (let j = 0; j <arr.length ; j++) {
            let word = arr[j];

            if (word[0] === symbol && word.length === num){
                console.log(word);
            }
        }
    }
}
solve(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);