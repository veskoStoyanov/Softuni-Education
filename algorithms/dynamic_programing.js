//Начин за решаване на проблеми. Дава ни насоки но не и точно решение
//Ако повечето решения които измислим са крайно бавно тогава трябва да се оптимизира.
//най важно е да разцепим големия проблем на по малки под проблеми
//memorization 

let numbers = [100];

function fib(n) {
    if (numbers[n] !== undefined) {
        return numbers[n];
    }

    if (n == 1 || n == 2) {
        return 1;
    }

    let result = fib(n - 1) + fib(n - 2)

    numbers[n] = result;

    return result

}
console.log(fib(600));
