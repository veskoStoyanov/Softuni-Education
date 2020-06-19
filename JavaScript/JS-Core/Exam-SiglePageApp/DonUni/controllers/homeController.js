let homeController = function () {
    let getHome = function (context) {
      
        let loggedIn = sessionStorage.getItem('authtoken') !== null
        context.loggedIn = loggedIn;
        context.username = sessionStorage.getItem('username');       

  
        context.loadPartials({

            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
                     
        }).then(function () {
            this.partial('./templates/home/home.hbs')
                 
        })
    }




    return {
        getHome
    }
}()