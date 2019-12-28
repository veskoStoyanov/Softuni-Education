(function () {
    let sum = 0;

    function add(num) {
        sum += num;
        console.log(sum);
        
        return add;
    }

    add.toString = function () {
        return sum;
    }
    return add;
})()