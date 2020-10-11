const numbers = {
    0: 'нула',
    1: 'едно',
    2: 'две',
    3: 'три',
    4: 'четири',
    5: 'пет',
    6: 'шест',
    7: 'седем',
    8: 'осем',
    9: 'девет',
    10: 'десет',
    11: 'eдинайсет',
    12: 'дванайсет',
    20: 'двадесет',
    100: 'сто',
    200: 'двеста',
    300: 'триста',
    1000: 'хиляда'
};

const lessTen = (num) => numbers[num];

const betweenThirtheenAndOneHundred = (num, [num1, num2]) => {
    if (num > 10 && num < 20) return numbers[num2] + 'на' + numbers[10];

    if (num2 == 0) return numbers[num1] + numbers[10];

    return numbers[num1] + numbers[10] + ' и ' + numbers[num2];
};

const betweenOneHundredAndOneThousand= (num, [num1, ...nums]) => {
    const rest = +nums.join('');

    let res =  numbers[num1] +  'стотин';

    if (num1 == 1){
        res = numbers[100];
    }

    if (num > 100 && num < 400) {
        res = res.replace('стотин', 'ста');
    }

    return rest === 0 ? res : res + ' и ' + getNumberText(rest);
};

const betweenOneThousandAndTenThousand = (num, [num1, ...nums]) => {
    const rest = +nums.join('');
    if (num < 2000) return 'хиляда и ' + getNumberText(rest);

    if (rest == 0) return numbers[num1] + 'хиляди';

    console.log(rest);

    return numbers[num1] + 'хиляди и ' + getNumberText(rest);
}

const tenThousandAndOver = (num, nums) => {
    return getNumberText(+nums.slice(0, 2).join('')) + ' хиляди' + ' и ' + getNumberText(+nums.slice(2).join(''))
};

const removeWord = (res) => {
    res = res.split(' и ');
    res[res.length -2] += ' и';
    return res.join(' ');
};

function getNumberText (num) {
    let nums = num
    .toString()
    .split('');

    if (numbers.hasOwnProperty(num)) {
        return lessTen(num);
    } else if(num > 10 && num < 100) {
        return betweenThirtheenAndOneHundred(num, nums);
    }  else if (num > 100 && num < 1000) { 
      return removeWord(betweenOneHundredAndOneThousand(num, nums));
    } else if (num > 1000 && num < 10000) {
        return removeWord(betweenOneThousandAndTenThousand(num, nums));
    }else if(num > 9999) {
        return tenThousandAndOver(num, nums)
    }

    return '';
}

 console.log(getNumberText(2032)); 
