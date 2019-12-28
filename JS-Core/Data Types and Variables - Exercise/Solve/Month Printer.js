function f(number) {
    let months = "";
    switch (number) {
        case 1 :
            months = "January";
            break;
        case 2 :
            months = "February";
            break;
        case 3 :
            months = "March";
            break;
        case 4 :
            months = "April";
            break;
        case 6 :
            months = "June";
            break;
        case 7 :
            months = "July";
            break;
        case 8 :
            months = "August";
            break;
        case 9 :
            months = "September";
            break;
        case 10 :
            months = "October";
            break;
        case 11 :
            months = "November";
            break;
        case 12 :
            months = "December";
            break;
        case 5 :
            months = "May";
            break;
        default :
            months = "Error!";


    }
    console.log(months);
}