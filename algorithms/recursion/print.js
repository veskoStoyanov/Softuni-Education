let cnr = 5;
let stops = cnr + 1;
let symbol = '*';

function print (index) {
    if (index == 0) {
        return;
    }

    console.log('*'.repeat(index));
    

    print(index -1);

    console.log('#'.repeat(index));
      
}

print(5);