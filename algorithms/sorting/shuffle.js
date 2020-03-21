let collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = 0; i < collection.length; i++) {
   let index = Math.floor(Math.random() * collection.length);
    let elementForSwap = collection[index];
    collection[index] = collection[i];
    collection[i] = elementForSwap;   
}

console.log(collection);




