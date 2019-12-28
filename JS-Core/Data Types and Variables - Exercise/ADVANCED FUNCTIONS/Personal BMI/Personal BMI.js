function composeChart(name, age, weightKg, heightCm) {

    let calcBmi = (weight, heightM) => {
        return Math.round(weight / (heightM ** 2))
    }

    let generateState = (bmi) => {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal'
        } else if (bmi < 30) {
            return 'overweight'
        } else {
            return 'obese'
        }
    }

    let bmi = calcBmi(weightKg, heightCm / 100);

    let chart = {
        name,
        personalInfo: {
            age,
            weight: weightKg,
            height: heightCm,
        },
        BMI: bmi,
        status: generateState(bmi)
    }
    if (chart.status === 'obese') {
        chart.recommendation = 'admission required';
    }
    return chart;
}