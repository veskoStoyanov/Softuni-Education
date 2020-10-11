function coffeeStorage() {
    let inputs = document.querySelector('section textarea').value;
    let divs = document.querySelectorAll('section div p');
    let report = divs[0];
    let inspection = divs[1];

    let input = JSON.parse(inputs);
    let obj = {};

    for (const commands of input) {
        let tokens = commands.split(', ');
        let command = tokens[0];

        if (command === 'IN') {
            let brand = tokens[1];
            let name = tokens[2];
            let date = tokens[3];
            let quantity = tokens[4];

            if (!obj.hasOwnProperty(brand)) {
                obj[brand] = {}
                obj[brand][name] = {
                    date,
                    quantity
                }
            } else {
                if (!obj[brand].hasOwnProperty(name)) {
                    obj[brand][name] = {
                        date,
                        quantity
                    }
                } else {
                    if (obj[brand][name].date < date) {
                        obj[brand][name].date = date;
                        obj[brand][name].quantity = quantity;
                    }
                    else if (date === obj[brand][name].date) {
                        obj[brand][name].quantity += quantity;
                    }
                }
            }
        } else if (command === 'OUT') {
            let brand = tokens[1];
            let name = tokens[2];
            let date = tokens[3];
            let quantity = tokens[4];

            if (obj.hasOwnProperty(brand)) {
                if (obj[brand].hasOwnProperty(name)) {
                    if (obj[brand][name].date > date) {
                        if (obj[brand][name].quantity >= quantity) {
                            obj[brand][name].quantity -= quantity;
                        }
                    }
                }
            }
        } else if (command === 'REPORT') {
            let keysBrand = Object.keys(obj);
            for (const token of keysBrand) {
                let text = '';
                text += `${token}: `

                let keysName = Object.keys(obj[token]);
                let arr = [];
                for (const toke of keysName) {

                    arr.push(`${toke} - ${obj[token][toke].date} - ${obj[token][toke].quantity}.`);
                    
                }
                text+=arr.join(' ')
                report.innerHTML += text + '<br>';

            }
        } else if (command === 'INSPECTION') {
            let keysBrand = Object.keys(obj).sort((a, b) => a.localeCompare(b));
            for (const token of keysBrand) {
                let text = '';
                text += `${token}: `

                let keysName = Object.keys(obj[token]).sort((a, b) => {
                    return obj[token][b].quantity - obj[token][a].quantity;
                });
                let arr = [];
                for (const toke of keysName) {
                   arr.push(`${toke} - ${obj[token][toke].date} - ${obj[token][toke].quantity}.`);                   
                }
                text +=arr.join(' ')
                inspection.innerHTML += text + '<br>';


                console.log(inspection);
            }
        }
    }

}