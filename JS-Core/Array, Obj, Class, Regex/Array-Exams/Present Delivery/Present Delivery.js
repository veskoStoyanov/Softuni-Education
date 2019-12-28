function solve(list) {

    let index = 0;
    let arr = list.shift().split('@').map(Number);

    for (let i = 0; i < list.length; i++) {
        if (list[i] === 'Merry Xmas!') {
            break;
        }

        let token = list[i].split(' ');
        let command = token[0];
        let jump = token[1];

        for (let j = 0; j < jump; j++) {

            index++;

            if (index == arr.length) {
                index = 0;
            }
        }

        if (arr[index] === 0) {

            console.log(`House ${index} will have a Merry Christmas.`)
        }
        else {
            arr[index] -= 2;
        }
    }
    console.log(`Santa's last position was ${index}.`)

    let sum = 0;
    let cnr = 0;

    for (let m = 0; m < arr.length; m++) {
        sum += arr[m];
        if (arr[m] > 0) {
            cnr++;
        }
    }

    if (sum === 0) {

        console.log(`Mission was successful.`);
    }
    else {
       
        console.log(`Santa has failed ${cnr} houses.`)
    }
}
solve(['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Merry Xmas!']);