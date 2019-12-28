let itemService = (() => {
    function loadItems() {
        // Request teams from db
        return requester.get('appdata', 'items', 'kinvey');
    }

    function loadItemDetails(id) {
        return requester.get('appdata', 'items/' + id, 'kinvey');
    }

    function edit(id, name, dateTime, description, imageURL, organizer, peopleInterestedIn) {
        let data = {
           name,
           dateTime,
           description,
           imageURL,
           organizer,
           peopleInterestedIn,

        };

        return requester.update('appdata', 'items/' + id, 'kinvey', data);
    }

    function remove(id) {

        return requester.remove('appdata', 'items/' + id, 'kinvey')
    }

    function createItem(name, dateTime, description, imageURL, organizer, peopleInterestedIn) {
        let data = {
            name,
            dateTime,
            description,
            imageURL,
            organizer,
            peopleInterestedIn
           
        };

        return requester.post('appdata', 'items', 'kinvey', data);
    }


    return {
        loadItems,
        loadItemDetails,
        edit,
        createItem,
        remove
    }
})()