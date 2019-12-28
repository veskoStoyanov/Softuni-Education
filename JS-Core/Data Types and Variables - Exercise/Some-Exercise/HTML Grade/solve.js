function solve(point, homework, totalHomework) {

    let maxPoint = 400;
    if (point === maxPoint) {
        console.log(`6.00`);
        return;

    }
    let sum = point / maxPoint * 90;

    let home = 10 - (totalHomework - homework);
    sum += home;




    let total = 3 + 2 * (sum - 100 / 5) / (100 / 2);

    if (total < 3.00) {
        total = 2.00;
    } else if (total > 6.00) {
        total = 6.00;
    }
    console.log(total.toFixed(2));
}
solve();