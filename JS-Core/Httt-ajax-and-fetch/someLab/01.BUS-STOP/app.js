function getInfo() {
    let stopId = document.getElementById('stopId');
    let stopName = document.getElementById('stopName');
    let url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`

    fetch(url, {
        method: "GET"
    })
        .then((info) => info.json())
        .then(data => displayBusesInfo(data))
        .catch(error => displayError(error))
     
        stopId.value = '';
    function displayBusesInfo(info) {
        let busName = info.name;
        stopName.textContent = busName;

        let divBuses = document.getElementById('buses');
        divBuses.innerHTML = '';

        let bussesInfo = Object.entries(info.buses);

        for (const [busId, time] of bussesInfo) {
            let li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${time} minutes`
            divBuses.appendChild(li);
        }
    }

    function displayError(err) {
        stopName.textContent = 'Error';
    }
    
}