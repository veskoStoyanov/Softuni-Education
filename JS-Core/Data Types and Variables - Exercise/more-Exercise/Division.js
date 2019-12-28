function divide(number) {
    let res = 0;

    if (number % 10 === 0){
        res=10;
    }else if(number % 7 ==0){
        res=7;
    }else if(number % 6 === 0){
        res=6;
    }else if(number % 3 === 0){
        res=3;
    }else if (number % 2 === 0){
        res =2;
    }else  {
        console.log("Not divisible")
        return;
    }

    console.log(`The number is divisible by ${res}`);
}