function combine(index, arr) {
    if (index == arr.length) {
        return;
    }

   for (let i = index + 1; i < arr.length; i++) {
      console.log(arr[index], arr[i]);
           
   }  
    combine(index + 1, arr);
}

let numbers = [1, 2, 3, 4];

combine(0, numbers)