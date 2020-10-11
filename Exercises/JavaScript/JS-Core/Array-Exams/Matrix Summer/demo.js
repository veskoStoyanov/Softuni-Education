function solve(first, second) {
    let sum = 0;
    let array = [];

    for (let row = 0; row < first.length; row++) {
        let arr = [];
        for (let col = 0; col < first[row].length; col++) {
            let num = 0;
            let one = first[row][col];
            let two = second[row][col];
            num = one + two;
            if (sum > 0) {
                num += sum;
                sum = 0;
            } if (num > 9) {
                sum = num - 9;
                num = 9;
            }

            arr.push(num);
        } while (sum > 0) {
            if(sum > 9){
                arr.push(9);
                sum -=9;
            }else {
                arr.push(sum);
                sum =0;
            }
        }
        
        array.push(arr);
    }

    let jason = JSON.stringify(array);
    console.log(jason);
}