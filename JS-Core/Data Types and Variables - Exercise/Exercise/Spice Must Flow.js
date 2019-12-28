function main(num) {
    if (num <100) {
        console.log(0);
        console.log(0);
        return;
    }
    let days = 0;
    let sum = 0;

    while (true) {
        sum += num;

        sum -= 26;
        if (sum<0)
        {
            sum=0;
        }
        num -= 10;
        days++;

        if (num < 100) {
            break;
        }
    }

    sum -= 26;
    if (sum<0)
    {
        sum=0;
    }
    console.log(days);
    console.log(sum);
}