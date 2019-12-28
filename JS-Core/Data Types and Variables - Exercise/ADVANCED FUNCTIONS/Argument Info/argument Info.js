function argumentInfo() {
    let typeCounter = {};

    for (const arg of arguments) {
        let type = typeof arg;

       
           console.log( `${type}: ${arg}`);
           
        
        if (!typeCounter.hasOwnProperty(type)) {
            typeCounter[type] = 1;
        } else {
            typeCounter[type]++;
        }

        
    }
    let sorted = Object.entries(typeCounter).sort((a, b) => b[1] - a[1]).forEach(el => {
        console.log(`${el[0]} = ${el[1]}`);
    });

        

}