let itemController = function () {

    const getDashboards = function (context) {
        let loggedIn = sessionStorage.getItem('authtoken') !== null
        context.loggedIn = loggedIn;
        context.username = sessionStorage.getItem('username');


        itemService.loadItems()
            .then(function (causesInfo) {

                context.causes = causesInfo;

                context.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial('./templates/dashboard/main.hbs')
                })

            }).catch(function (err) {
                notifications.showError(err.responseJSON.description);

            })
    }

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

        let cause = context.params.cause;
        let pictureUrl = context.params.pictureUrl;
        let neededFunds = Number(context.params.neededFunds).toFixed(2);
        let description = context.params.description;
        let collectedFunds = 0;
        let donors = '';
        if (cause && pictureUrl && neededFunds && description) {
            itemService.createItem(cause, pictureUrl, neededFunds, description, collectedFunds, donors)
                .then(function () {
                    notifications.showSuccess('Successful Make Cause')
                    context.redirect('#/dashboard')


                }).catch(function (err) {
                    notifications.showError(err.responseJSON.description);

                })
        } else {
            notifications.showError('The input fields must be non-empty strings');
        }
    }

    const postDel = function (context) {
        let id = context.params.id;

        itemService.remove(id)
            .then(function () {
                notifications.showSuccess('Successful Remove Cause')
                context.redirect('#/dashboard');
            

            }).catch(function (err) {
                notifications.showError(err.responseJSON.description);

            })
    }

    const getDetails = function (context) {
        let id = context.params.id

        itemService.loadItemDetails(id)
            .then(function (causesInfo) {

                let loggedIn = sessionStorage.getItem('authtoken') !== null
                context.loggedIn = loggedIn;
                context.isAuthor = sessionStorage.getItem('userId') === causesInfo._acl.creator;
                context.username = sessionStorage.getItem('username');
                context.cause = causesInfo;
                context.donors = causesInfo.donors.split(',');

                if (loggedIn) {
                    context.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                    }).then(function () {
                        this.partial('./templates/dashboard/details.hbs')
                    })
                }
            }).catch(function (err) {
                notifications.showError(err.responseJSON.description);
            })
    }

    const donateEvent = function (context) {
        let idd = context.params.id;
        let username = sessionStorage.getItem('username');

        itemService.loadItemDetails(idd)
            .then(function (causesInfo) {

                let id = idd;
                let donors = causesInfo.donors;
                let cause = causesInfo.cause;
                let pictureUrl = causesInfo.pictureUrl;
                let neededFunds = causesInfo.neededFunds;
                let description = causesInfo.description;
                let collectedFunds = (+causesInfo.collectedFunds + +context.params.currentDonation).toFixed(2);
                let allDonors = causesInfo.donors.split(',');
                if (!allDonors.includes(username)) {
                    donors += ',' + username;
                }

                itemService.edit(id, cause, pictureUrl, neededFunds, description, collectedFunds, donors)
                    .then(function () {
                        notifications.showSuccess('Successful Donate')
                        context.redirect(`#/details/${id}`)
                    })
            }).catch(function (err) {
                notifications.showError(err.responseJSON.description);
            })
    }

    return {
        getCreate,
        postCreate,
        getDetails,
        postDel,
        donateEvent,
        getDashboards,
    }
}()