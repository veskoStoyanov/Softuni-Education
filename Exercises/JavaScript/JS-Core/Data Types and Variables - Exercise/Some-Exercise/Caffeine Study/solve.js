function solve(n) {
    let cafein = 0;
    let allDay = 180 + 40 + 210;

    for (let i = 1; i <= n; i++) {
        cafein += allDay;
        if (i % 5 === 0) {
            cafein += 450;
        } if (i % 9 === 0) {
            cafein += 380;
        }
    }
    
    console.log(`${cafein} milligrams of caffeine were consumed`);

}