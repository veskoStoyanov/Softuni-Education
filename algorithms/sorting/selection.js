let collection = [3, 44, 38, 5, 47,15,36, 26,27, 2, 46, 19, 50 , 48,  1536, 26,];

for (let i = 0; i < collection.length; i++) {
    let primary = collection[i]
    let min = collection[i];
    let index = -1;

    for (let j = i + 1; j < collection.length; j++) {
        let compared = collection[j];
        if(compared < min) {
          min = compared;
          index = j;
         
        }     
    }
    if(index !== -1) {
        collection[index] = primary;
        collection[i] = min;
    }
   
}
console.log(collection);