function solve(input){

    let kids = input.shift().split('&');

    for (let index = 0; index < input.length; index++) {
        if (input[index] === 'Finished!'){
            break;
        }
        let token = input[index].split(' ');
        let command = token[0];

        if (command === 'Bad'){

            let name = token[1];

            if(!kids.includes(name)){

                kids.unshift(name);
            }
        }
        else if (command === 'Good'){

            let name = token[1];

            if (kids.includes(name)){

                let indexx = kids.indexOf(name);
                kids.splice(indexx, 1);

            }
        }else if (command === 'Rename'){

            let name = token[1];
            let changeName = token[2];

            if(kids.includes(name)){

                let indexx = kids.indexOf(name);
                kids[indexx] = changeName;
            }

        }else if (command === 'Rearrange'){

            let name = token[1];

            if (kids.includes(name)){

                let indexx = kids.indexOf(name);
                let changeName = kids[indexx];
                kids.splice(indexx, 1);
                kids.push(changeName);
            }

        }
    }
    console.log(kids.join(', '));
}
solve([ 'Joshua&Aaron&Walt&Dustin&William',
    'Good Walt',
    'Bad Jon ',
    'Rename Aaron Paul',
    'Rearrange Jon',
    'Rename Peter George',
    'Finished!' ]);