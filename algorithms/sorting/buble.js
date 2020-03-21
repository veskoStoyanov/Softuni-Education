let collection = [3, 44, 38, 5, 47,15,36, 26,27, 2, 46, 19, 50 , 48,  1536, 26,];

let isNotSorted = true;

while(isNotSorted) {
   isNotSorted = false;

    for (let i = 0; i < collection.length -1; i++) {
        let one = collection[i];
        let two = collection[i +1];

        if(one > two) {
            collection[i] = two;
            collection[i+1] = one;
            isNotSorted = true;
        }
    }
}

console.log(collection);
