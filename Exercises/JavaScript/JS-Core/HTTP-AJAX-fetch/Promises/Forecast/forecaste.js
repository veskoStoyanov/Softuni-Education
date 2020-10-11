function attachEvents() {
    const BASE_URL = 'https://judgetests.firebaseio.com/';
    let btnSubmit = $('#submit');
    let locationInput = $('#location');
    btnSubmit.on('click', getForeCast);

    function request(endpoint) {
        return $.ajax({
            method: "GET",
            url: BASE_URL + endpoint
        })
    }

    function getForeCast() {
        request('locations.json')
            .then(displayForeCast)
            .catch(handleError)

        function displayForeCast(allLocations) {
         
            
            let locationCode = allLocations.filter((l) => l.name === locationInput.val())
                .map((l) => l.code)[0];

            if (locationCode === undefined) {
                handleError;
            }

            let weatherSymbol = {
                'Sunny': '&#x2600',
                'Partly sunny': '&#x26C5',
                'Overcast': '&#x2601',
                'Rain': '&#x2614'
            }
            let currentConditionP = request(`forecast/today/${locationCode}.json `);
            let threeDaysConditionP = request(`forecast/upcoming/${locationCode}.json `);

            Promise.all([currentConditionP, threeDaysConditionP])
            .then(function () {
               console.log('vesko');
               
                
            })
        }
        function handleError(err) {
          
        }


    }
}