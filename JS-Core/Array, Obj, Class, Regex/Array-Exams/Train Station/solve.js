function solve(cap, input) {
    let arr = [];
    let rest = 0;
    let bool = true;

    for (let i = 0; i < input.length; i++) {
        let num = input[i];
        
        if (num > cap) {
            arr.push(cap);
            num -= cap;

            if (input[i + 1] !== undefined) {
                input[i + 1] += num;
            } else {
                rest = num;
                bool = false;
            }
        } else {
            arr.push(num);
        }
    }

    console.log(arr);

    if (bool) {
        console.log('All passengers aboard');
    } else {
        console.log(`Could not fit ${rest} passengers`);

    }
}