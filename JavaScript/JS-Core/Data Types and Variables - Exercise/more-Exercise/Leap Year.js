function data(number) {

    if (number===2000){
        console.log("yes")
        return
    }
    if(number % 100 !== 0 && number % 4 ===0){

        console.log("yes");

    }else {
        console.log("no");
    }


}