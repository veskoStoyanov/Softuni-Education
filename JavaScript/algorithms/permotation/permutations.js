let elements = [1, 2, 3, 4];
let used = [];
let permutations = [];
function permit(index) { // curent cell to fill
    console.log(index);
    if (elements.length == index) {
        console.log(permutations.join(' '));
        
    }else {
       
        
        for (let i = 0; i < elements.length; i++) {

            if(!used[i]) {
                let currentNumber = elements[i];
                used[i] = true;
                permutations[index] = currentNumber;
                permit(index +1);
    
                used[i] = false;
            }
      
        }
    }

    
}

permit(0);