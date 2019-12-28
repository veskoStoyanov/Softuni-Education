let homeController = function () {
    let getHome = function (context) {
       
        let loggedIn = sessionStorage.getItem('authtoken') !== null
        context.loggedIn = loggedIn;
        context.username = sessionStorage.getItem('username');       
        if (loggedIn) {    
                 
            itemService.loadItems()
                .then(function (data) {
                   
                    let eventsInfo = data.sort((a, b) => b['peopleInterestedIn'] - a['peopleInterestedIn']);
                                
                    context.name = eventsInfo.name;
                    context.imageURL = eventsInfo.imageURL;

                    context.events = eventsInfo;
                   
                    context.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',                      
                                     
                    }).then(function () {
                        
                        this.partial('./templates/home/home.hbs')
                    })
                   
                })
        }


        context.events = [];
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            noEvents: './templates/events/noEvents.hbs',
            main: './templates/events/main.hbs'
        }).then(function () {
            this.partial('./templates/home/home.hbs')
        })
    }




    return {
        getHome
    }
}()