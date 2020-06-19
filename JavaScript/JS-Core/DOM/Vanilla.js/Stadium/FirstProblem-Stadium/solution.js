
    function solve() {
        let buttons = document.getElementsByClassName('seat');
        let output = document.getElementById('output');
        let symmury = document.getElementById('summary');
        Array.from(buttons).forEach((btn) => {
            btn.addEventListener('click', addEvent);
        });
    
        symmury.children[0].addEventListener('click', getSummary);
    
        let obj = {
            'Levski': {
                'A': 10,
                'B': 7,
                'C': 5
            },
            'Litex': {
                'A': 10,
                'B': 7,
                'C': 5
            },
            'VIP': {
                'A': 25,
                'B': 15,
                'C': 10
            },
            'summary':
                {
                    'fans': 0,
                    'totalProfit': 0
                }
        };
    
        function addEvent(ev) {
            let seat = ev.target;
            console.log(seat.textContent);
            let zone = seat.parentNode.parentNode.parentNode.parentNode.parentNode.className;
    
            let sector = String.fromCharCode(65 + ev.target.parentNode.cellIndex);
            console.log(sector);
    
            if (seat.style.backgroundColor === '') {
                seat.style.backgroundColor = "rgb(255,0,0)";
                obj.summary.fans++;
                obj.summary.totalProfit += obj[zone][sector];
                output.value += ` Seat ${seat.textContent} in zone ${zone} sector ${sector} was taken.\n`
            } else {
                output.value += ` Seat ${seat.textContent} in zone ${zone} sector ${sector} is unavailable.\n`
            }
        }
    
        function getSummary() {
            symmury.children[1].textContent = `${obj.summary.totalProfit} leva, ${obj.summary.fans} fans.`;
        }
   }
