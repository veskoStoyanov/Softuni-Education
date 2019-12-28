function rounding(number, precision) {
    if(precision > 15){
        precision=15;
    }
    console.log(+number.toFixed(precision));
}