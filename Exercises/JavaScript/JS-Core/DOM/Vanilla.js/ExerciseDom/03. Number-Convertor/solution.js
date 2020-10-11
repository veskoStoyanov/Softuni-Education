function solve() {
    let button = document.querySelector('#container > button')
    button.addEventListener('click', convertNumbers)

    let convertSet = document.getElementById('selectMenuTo').children
    let firstSet = convertSet[0]
    firstSet.value = 'hexadecimal'
    firstSet.textContent = 'Hexadecimal'

    let optionn = document.createElement('option')
    optionn.value = 'binary'
    optionn.textContent = 'Binary'
    document.getElementById('selectMenuTo').appendChild(optionn)

    function convertNumbers(ev) {
        let inputNumber = document.getElementById('input')
        let number = Number(inputNumber.value)
        let event = document.getElementById('selectMenuTo').value;
        let result = ''

        if (event === 'hexadecimal') {
            result = number.toString(16).toUpperCase();

        } else if (event === 'binary') {

            result = number.toString(2)
        }

        let print = document.getElementById('result');
        print.value = result;
    }
}