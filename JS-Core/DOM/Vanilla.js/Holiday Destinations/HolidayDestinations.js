function addDestination() {
    let city = document.getElementsByClassName('inputData')[0];
    let country = document.getElementsByClassName('inputData')[1];

    if (city.value && country.value) {
        let seasons = document.getElementById('seasons');
        let text = seasons.options[seasons.selectedIndex].value;
        let season = text[0].toUpperCase() + text.slice(1);

        let print = document.getElementById('destinationsList');
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = `${city.value}, ${country.value}`
        let td2 = document.createElement('td');
        td2.textContent = season;
        tr.appendChild(td1);
        tr.appendChild(td2);
        print.appendChild(tr);

        let summaryBox = document.getElementById('summaryBox').children;

        for (let i = 1; i < summaryBox.length; i += 2) {
            if (summaryBox[i].id === text) {
                summaryBox[i].value = Number(summaryBox[i].value) + 1;
                break;
            }
        }

        city.value = '';
        country.value = '';
    }
}