let collection = [3, 44, 38, 5, 47,15,36, 26,27, 2, 46, 19, 50 , 48,  1536, 26,];

for (let i = 1; i < collection.length; i++) {
    let index = i;
   
     let main = collection.splice(i, 1)[0];
   for (let j = i -1; j >= 0; j--) {
      let current = collection[j];
        if(main > current) {
            break;
        }
        index = j;
   }
  
    collection.splice(index, 0, main);
 
}

for (const el of collection) {
    console.log(el);
    
}
