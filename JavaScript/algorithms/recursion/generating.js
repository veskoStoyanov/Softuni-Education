function generate(index, arr) {
    if (index == arr.length) {
        console.log(arr.join(' '));
      
    }else {
        for (let i = 0; i <= 1; i++) {
           arr[index] = i;
           generate(index + 1, arr)
            
        }
    }
}

let arr = [0, 0, 0, 0, 0, 0, 0, 0];
generate(0, arr);