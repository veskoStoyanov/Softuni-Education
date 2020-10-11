function solve(line) {
    let arr = line.shift().split(', ');

    for (let index = 0; index < line.length; index++) {
        if (line[index] === 'Retire') {
            break;
        }

        let token = line[index].split(' - ');
        let command = token[0];
        let quest = token[1];

        if (command === 'Start') {

            if (!arr.includes(quest)) {

                arr.push(quest);
            }
        } else if (command === 'Complete') {

            if (arr.includes(quest)) {

                let index = arr.indexOf(quest);
                arr.splice(index, 1);
            }
        } else if (command === 'Renew') {

            if (arr.includes(quest)) {

                let index = arr.indexOf(quest);
                arr.splice(index, 1);
                arr.push(quest);
            }
        } else if (command === 'Side Quest') {

            let sideQuest = quest.split(':');

            let curQuest = sideQuest[0];
            let putQuest = sideQuest[1];

            if (arr.includes(curQuest)) {
                if (!arr.includes(putQuest)) {

                    let index = arr.indexOf(curQuest);
                    arr.splice(index+1, 0, putQuest)
                }
            }
        }
    }
console.log(arr.join(', '));
}
solve([ 'Hello World, If else',
'Complete - Homework',
'Side Quest - If else:Switch',
'Renew - Hello World',
'Retire!' ]);