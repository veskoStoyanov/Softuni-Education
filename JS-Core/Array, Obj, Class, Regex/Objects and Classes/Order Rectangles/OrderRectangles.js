function solve(input) { 
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        let obj = {
            width: input[i][0],
            height: input[i][1],
            area: function () {
                return this.width * this.height
            },
            compareTo: function (other) {
                let diff = other.area() - this.area();
                if(diff === 0){
                    return other.width - this.width;
                }
                return diff;
            }
        }
        arr.push(obj);
    }
    return arr.sort((a, b) => a.compareTo(b));    
}