function hollyday(countPeople, type, day) {

    let res = 0;

    switch (day) {

        case "Friday" :
            if (type==="Students"){
                res=8.45;
            }else if (type=="Business"){
                res=10.90;
            }else if(type=="Regular"){
                res=15.00;
            }
            break;

        case "Saturday" :
            if (type==="Students"){
                res=9.80;
            }else if (type=="Business"){
                res=15.60;
            }else if(type=="Regular"){
                res=20.00;
            }
            break;

        case "Sunday" :
            if (type==="Students"){
                res=10.46;
            }else if (type=="Business"){
                res=16.00;
            }else if(type=="Regular"){
                res=22.50;
            }
            break;
        default:
            break;
    }
    res*=countPeople;
    if(type==="Students" && countPeople>=30){
        res-=res*0.15;
    }
    if(type==="Business" && countPeople>=100){
        res-= (res/countPeople) * 10.00;
    }
    if (type=="Regular" && (countPeople>10 && countPeople<20)) {
        res-=res*0.05;
    }


    console.log(`Total price: ${res.toFixed(2)}`);

}