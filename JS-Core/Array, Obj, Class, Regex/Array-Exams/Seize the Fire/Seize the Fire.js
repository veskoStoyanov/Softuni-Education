function solve(input) {
    let water = +input[1];
let curWater = water;
    let cells = [];
    let effort = 0;
    let token = input.shift().split('#');

    for (let i = 0; i < token.length; i++) {

        let arr = token[i].split(' = ');
        let type = arr[0];
        let range = arr[1];

        if (type === "High" && range >= 81 && range <= 125) {

            if (curWater >= range) {
                curWater -= range;
                cells.push(range);
                effort += range * 0.25;
            }
        } else if (type === "Medium" && range >= 51 && range <= 80) {
            if (curWater >= range) {
                curWater -= range;
                cells.push(range);
                effort += range * 0.25;
            }
        } else if (type === "Low" && range >= 1 && range <= 50) {
            if (curWater >= range) {
                curWater -= range;
                cells.push(range);
                effort += range * 0.25;
            }
        }
    }
    console.log('Cells:');

    for (let m of cells){
        console.log(` - ${m}`);
    }

    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${water - curWater}`);
}

solve(["High = 89#Meduim = 53#Low = 28#Medium = 77#Low = 23", '1250'])