let itemService = (() => {
    function loadItems() {
        // Request teams from db
        return requester.get('appdata', 'donations', 'kinvey');
    }

    function loadItemDetails(id) {
        return requester.get('appdata', 'donations/' + id, 'kinvey');
    }

    function edit(id, cause, pictureUrl, neededFunds, description, collectedFunds, donors) {
        let data = {
            cause,
            pictureUrl,
            neededFunds,
            description,
            collectedFunds,
            donors,

        };

        return requester.update('appdata', 'donations/' + id, 'kinvey', data);
    }

    function remove(id) {

        return requester.remove('appdata', 'donations/' + id, 'kinvey')
    }

    function createItem(cause, pictureUrl, neededFunds, description, collectedFunds, donors) {
        let data = {
            cause,
            pictureUrl,
            neededFunds,
            description,
            collectedFunds,
            donors,
           
        };

        return requester.post('appdata', 'donations', 'kinvey', data);
    }


    return {
        loadItems,
        loadItemDetails,
        edit,
        createItem,
        remove
    }
})()