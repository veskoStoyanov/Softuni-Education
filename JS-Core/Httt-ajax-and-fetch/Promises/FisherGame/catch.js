function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_BJ_roQvbH';
    //const endpoint = 'biggestCatches';
    const userName = 'ves';
    const password = '123';
    let base_64 = btoa(userName + ':' + password);
    const auth = {
        'Authorization': "Basic " + base_64,
        "Content-type": "application/json"
    };
    $('.add').on('click', createCatch)
    $('.load').on('click', loadCatches)

    function request(method, endpoint, data) {
        return $.ajax({
            method: method,
            url: baseUrl + endpoint,
            headers: auth,
            data: JSON.stringify(data)
        })
    }

    function loadCatches() {
        request("GET", '/biggestCatches')
            .then(displayCathes)
            .catch(handleError)
    }

    function displayCathes(data) {
        let divCatches = $('#catches');
        divCatches.empty();

        for (const m of data) {
            let divContainer = $('<div>')
                .addClass('catch').attr('data-id', `${m['_id']}`);

            let label = $('<label>')
                .text('Angler');
            divContainer.append(label);
            let inputAngler = $(`<input type="text" class="angler" value="${m.angler}"/>`)
            divContainer.append(inputAngler);

            let labeWeight = $('<label>')
                .text('Weight');
            divContainer.append(labeWeight);
            let inputWeight = $(`<input type="number" class="weight" value="${m.weight}"/>`)
            divContainer.append(inputWeight);

            let labeSpecies = $('<label>')
                .text('Species');
            divContainer.append(labeSpecies);
            let inputSpecies = $(`<input type="text" class="species" value="${m.species}"/>`)
            divContainer.append(inputSpecies);

            let labeLocation = $('<label>')
                .text('Location');
            divContainer.append(labeLocation);
            let inputLocation = $(`<input type="text" class="location" value="${m.location}"/>`)
            divContainer.append(inputLocation);

            let labeBait = $('<label>')
                .text('Bait');
            divContainer.append(labeBait);
            let inputBait = $(`<input type="text" class="bait" value="${m.bait}"/>`)
            divContainer.append(inputBait);

            let labeTime = $('<label>')
                .text('Capture Time');
            divContainer.append(labeTime);
            let inputTime = $(`<input type="number" class="captureTime" value="${m.captureTime}"/>`)
            divContainer.append(inputTime);

            let btnUpdate = $('<button class="update">Update</button>').on('click', updateData);
            let btnDelete = $('<button class="delete">Delete</button>').on('click', deleteData);
            divContainer.append(btnUpdate);
            divContainer.append(btnDelete);

            divCatches.append(divContainer)
        }
    }

    function updateData(data) {
        let catchEl = $(this).parent();
        let id = catchEl.attr('data-id');
        let objJson = returnJson(catchEl)

        request('PUT', `/biggestCatches/${id}`, objJson)
            .then(loadCatches)
            .catch(handleError)
    }

    function returnJson(catchEl) {
        return {
            angler: catchEl.find('.angler').val(),
            weight: +catchEl.find('.weight').val(),
            species: catchEl.find('.species').val(),
            location: catchEl.find('.location').val(),
            bait: catchEl.find('.bait').val(),
            captureTime: +catchEl.find('.captureTime').val(),
        }
    }

    function deleteData() {
        let id = $(this).parent().attr('data-id');
        request('DELETE', `/biggestCatches/${id}`)
            .then(loadCatches)
            .catch(handleError)
    }

    function createCatch() {
        let catchEl = $('#addForm');
       let objData =  returnJson(catchEl)
        
       request('POST', '/biggestCatches', objData)
       .then(loadCatches)
       .catch(handleError)
       
    }

    function handleError(err) {
        console.error(err);
    }
}