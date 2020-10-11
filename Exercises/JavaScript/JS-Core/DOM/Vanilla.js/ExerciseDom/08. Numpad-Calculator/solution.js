function solve() {
        let buttons = Array.from(document.querySelectorAll('.keys>button'));

        buttons.forEach(btn => {
            btn.addEventListener('click', calculate)
        })

        let result = document.getElementById('resultOutput');
        let output = document.getElementById('expressionOutput');
        let resBut = document.querySelector('.keys>button[value="="]');

        resBut.removeEventListener('click', calculate);
        resBut.addEventListener('click', resultCalculating);
        let sum = [0];

        function calculate(ev) {
            let value = ev.target.value;
            num = Number(value);

            if (isNaN(num) && value !== '.') {
                output.textContent += ' ' + value + ' ';
            } else {
                output.textContent += value
            }
        }

        function resultCalculating(ev) {

            value = ev.target.value;
            let text = output.textContent + value;
            let sec = /[0-9]+[.]*[0-9]* [+*-\/] [0-9]+[.]*[0-9]*=/
            let regex = sec.exec(text);

            if (regex !== null) {
                let outText = output.textContent.split(' ');
                let sum = 0;
                let num1 = +outText[0];
                let num2 = +outText[2];

                let el = outText[1];

                switch (el) {
                    case "+":
                        sum = num1 + num2;
                        break;
                    case "-":
                        sum = num1 - num2;
                        break;
                    case "*":
                        sum = num1 * num2;
                        break;
                    case "/":
                        sum = num1 / num2;
                        break;
                    default:
                        break;
                }

                result.textContent = sum;

            } else {
                result.textContent = 'NaN';
            }
        }

        let clearBtn = document.querySelector('.clear');
        clearBtn.addEventListener('click', clearAll)

        function clearAll() {
            output.textContent = '';
            result.textContent = '';
        }
    }
