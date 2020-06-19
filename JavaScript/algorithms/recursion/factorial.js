let num = 10;


function solve(number) {
    if (number <= 0) {
        return 1;
    }
    return number * solve(number - 1)
}

console.log(solve(num));
