function solve(token) {
    let timeDishes = 0;
    let timeCleaning = 0;
    let timeLaundry = 0;
    let nums = [];

    let numPattern = /[0-9]/g;
    let patternOne = /<([a-z0-9]+)>/;
    let patternSec = /\[([A-Z0-9]+)\]/;
    let thirdPattern = /{(.+)}/;

    token.pop();
    for (let text of token) {
        let firstMatch = text.match(patternOne);
        let secMatch = text.match(patternSec);
        let thirdMatch = text.match(thirdPattern);

        if (firstMatch !== null){
            nums = firstMatch[1].match(numPattern);
            timeDishes += addNums(nums);

        }else if (secMatch !== null){
            nums = secMatch[1].match(numPattern);
            timeCleaning += addNums(nums)

        }else if (thirdMatch !== null){
            nums = thirdMatch[1].match(numPattern);
            timeLaundry += addNums(nums);}
    }

    let totalSum  = timeDishes + timeCleaning + timeLaundry;

    console.log(`Doing the dishes - ${timeDishes} min.`);
    console.log(`Cleaning the house - ${timeCleaning} min.`);
    console.log(`Doing the laundry - ${timeLaundry} min.`);
    console.log(`Total - ${totalSum} min. `);

    function addNums(nums) {
        let sum = 0;

        for (let num of nums) {
            sum+= Number(num);
        }

        return sum;
    }
}
solve ([ '-^hr5a65j48<dd6f5h4dhfd>456sga_+',
    'DHdhy4*3[T2HOU87KRC]sA/@',
    'Sda%t]gf{%hjK8f34)!fG1re}-+htG%v',
    'wife is happy',
    '' ]);