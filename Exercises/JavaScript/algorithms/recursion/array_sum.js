
let numbers = [1, 2, 3, 3]

function sum(arr, index) {
    if(arr.length == index) {
        return 0;
    }
    return arr[index] + sum(arr, index+1)
}

let total = sum(numbers, 0);

console.log(total);

