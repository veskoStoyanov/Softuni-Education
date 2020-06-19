function main(input) {
    let counter =0;
    let name = input.shift();
    for (let i = 0; i < input.length; i++) {
        let trying = input[i];
        let pass = "";
        for (let j = trying.length - 1; j >= 0; j--) {
            pass += trying[j];

        }
        if (name === pass) {
            return console.log(`User ${name} logged in.`);
        } else {
            counter++;
            if (counter==4){
                return console.log(`User ${name} blocked!`);
            }
            console.log("Incorrect password. Try again.");
        }
    }
}