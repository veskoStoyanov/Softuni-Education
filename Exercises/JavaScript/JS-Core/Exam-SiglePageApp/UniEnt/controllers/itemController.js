let itemController = function () {


    const getCreate = function (context) {
        let loggedIn = sessionStorage.getItem('authtoken') !== null
        context.loggedIn = loggedIn;
        context.username = sessionStorage.getItem('username');
        if (loggedIn) {
            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/create/create.hbs')
            })
        }
    }

    const postCreate = function (context) {
        let dateTime = context.params.dateTime;
        let description = context.params.description;
        let imageURL = context.params.imageURL;
        let name = context.params.name;
        let organizer = sessionStorage.getItem('username');
        let peopleInterestedIn = 0;

        if (name.length < 6) {

        } else if (description.length < 10) {

        } else {


            itemService.createItem(name, dateTime, description, imageURL, organizer, peopleInterestedIn)
                .then(function () {
                    context.redirect('#/home')

                })
        }

    }



    const getEdit = function (context) {
        let id = context.params.id;

        itemService.loadItemDetails(id)
            .then(function (eventInfo) {
                let loggedIn = sessionStorage.getItem('authtoken') !== null
                context.loggedIn = loggedIn;
                context.username = sessionStorage.getItem('username');
                context.event = eventInfo;

                context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial('./templates/edit/edit.hbs')
                })
            })
    }

    const postEdit = function (context) {

        let id = context.params.id;
        let name = context.params.title;
        let dateTime = context.params.dateTime;
        let description = context.params.description;
        let imageURL = context.params.imageURL;
        let organizer = context.params.organizer;
        let peopleInterestedIn = context.params.peopleInterestedIn;

        itemService.edit(id, name, dateTime, description, imageURL, organizer, peopleInterestedIn)
            .then(function () {
                context.redirect('#/home')

            })
    }

    const postDel = function (context) {
        let id = context.params.id;

        itemService.remove(id)
            .then(function () {
                context.redirect('#/home');

            })
    }

    const getDetails = function (context) {
        let id = context.params.id

        itemService.loadItemDetails(id)
            .then(function (eventInfo) {


                let loggedIn = sessionStorage.getItem('authtoken') !== null
                context.loggedIn = loggedIn;
                context.isAuthor = sessionStorage.getItem('userId') === eventInfo._acl.creator;
                context.username = sessionStorage.getItem('username');
                context.event = eventInfo;

                if (loggedIn) {
                    context.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                    }).then(function () {
                        this.partial('./templates/events/details.hbs')
                    })
                }
            })
    }

    const joinEvent = function (context) {
        let idd = context.params.id;



        itemService.loadItemDetails(idd)
            .then(function (eventInfo) {

                let id = idd;
                let name = eventInfo.name;
                let imageURL = eventInfo.imageURL;
                let description = eventInfo.description;
                let dateTime = eventInfo.dateTime;
                let peopleInterestedIn = Number(eventInfo.peopleInterestedIn) + 1;
                let organizer = eventInfo.organizer;


                itemService.edit(id, name, dateTime, description, imageURL, organizer, peopleInterestedIn)
                    .then(function () {
                        context.redirect('#/home')

                    })
            })
    }

    const getProfile = function (context) {
        let loggedIn = sessionStorage.getItem('authtoken') !== null
        context.loggedIn = loggedIn;
        context.username = sessionStorage.getItem('username');




        if (loggedIn) {
            itemService.loadItems()
                .then(function (data) {
                    let eventsInfo = data.filter((ev) => ev._acl.creator === sessionStorage.getItem('userId'));

                    context.name = eventsInfo.name;
                    context.cnr = eventsInfo.length;
                    context.events = eventsInfo;
                    context.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                       
                    }).then(function () {
                        this.partial('./templates/profile/profile.hbs')
                    })
                })
        }
    }

    return {
        getCreate,
        postCreate,
        getDetails,
        getEdit,
        postEdit,
        postDel,
        joinEvent,
        getProfile,
    }
}()