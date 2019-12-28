function triangle(num) {



    for (let i = 1; i <=num ; i++) {
        let text = " ";
        for (let j = 0; j < i; j++) {
            text+= i + " ";
        }
        console.log(text.trim());
    }

}