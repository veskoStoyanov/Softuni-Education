function solve() {
    let baseUrl = `https://judgetests.firebaseio.com/schedule/`;
    let currentId = 'depot';
    let currentBusStop = '';
    let stopInfo = document.querySelector('#info span');
    let btnDepot = document.getElementById('depart');
    let btnArrive = document.getElementById('arrive');

    function depart() {
        let url = baseUrl + currentId + '.json';

        fetch(url)
            .then((request) => request.json())
            .then(data => loadStop(data))
            .catch(data => errorFunc(data))
    }

    function loadStop(data) {
        stopInfo.textContent = `Next stop ${data.name}`;
        currentBusStop = data.name;
        currentId = data.next;
        btnDepot.setAttribute('disabled', true)
        btnArrive.disabled = false;
    }

    function arrive() {
        stopInfo.textContent = `Arriving  at ${currentBusStop}`;
        btnDepot.disabled = false;
        btnArrive.disabled = true;
    }

    function errorFunc() {
        stopInfo.textContent = `Error`;
        btnDepot.disabled = true;
        btnArrive.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();