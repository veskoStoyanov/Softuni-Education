function solve(input) {
    let arr = [];
    for (const m of input) {


        if (isNaN(m)) {
            if (arr.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            let index = arr.length - 1;
            switch (m) {
                case '+':
                    arr[index - 1] += arr[index];
                    arr.splice(index);
                    break;
                case '-':
                    arr[index - 1] -= arr[index];
                    arr.splice(index);
                    break;
                case '/':
                    arr[index - 1] /= arr[index];
                    arr.splice(index);
                    break;
                case '*':
                    arr[index - 1] *= arr[index];
                    arr.splice(index);
                    break;

                default:
                    break;
            }
        } else {
            arr.push(m);
        }
    }
    if (arr.length > 1) {
        console.log(`Error: too many operands!`);
    } else {
        console.log(arr[0]);

    }
}
solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);