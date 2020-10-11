function fibonacci(n) {
    if ((n == 1) || (n == 2)) {
        return 1;
    }else {
        let first = fibonacci(n -1)
        let second = fibonacci(n - 2)
        return first + second;
    }
}

console.log(fibonacci(10));
