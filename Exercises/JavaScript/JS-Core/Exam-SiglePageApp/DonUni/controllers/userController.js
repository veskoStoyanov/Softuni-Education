let userController = function () {

    let getLogin = function (context) {

        let loggedIn = sessionStorage.getItem('authtoken') !== null
        context.loggedIn = loggedIn;
        context.username = sessionStorage.getItem('username');

        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/login/login.hbs')
        })
    }

    let postLogin = function (context) {

        let loggedIn = sessionStorage.getItem('authtoken') !== null
        context.loggedIn = loggedIn;
        context.username = sessionStorage.getItem('username');
        let username = context.params.username;
        let password = context.params.password;


        if (username && password) {
            auth.login(username, password)
                .then(function (userInfo) {
                   notifications.showSuccess('Successful Login')
                    auth.saveSession(userInfo);
                    context.redirect('#/home');

                }).catch(function(err){
                    notifications.showError(err.responseJSON.description);
                  
                })
        } else {
            notification.showError('The username and password must be non-empty string')
        }

    }

    const getRegister = function (context) {

        let loggedIn = sessionStorage.getItem('authtoken') !== null
        context.loggedIn = loggedIn;
        context.username = sessionStorage.getItem('username');

        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',

        }).then(function () {
            this.partial('./templates/register/register.hbs')
        })
    }

    const postRegister = function (context) {


        let username = context.params.username;
        let password = context.params.password;
        let rePassword = context.params.rePassword;


        if (username.trim() === '' || password.trim() === '' || rePassword.trim() === '') {
            notifications.showError('The username , password and re-password must be non-empty string')
        } else if (password !== rePassword) {
            notifications.showError('The re-password should be equal to the password')
           
        } else {
            auth.register(username, password)
                .then(function (userInfo) {
                    notifications.showSuccess('Successful Registration')
                    auth.saveSession(userInfo);
                    context.redirect('#/home');


                }).catch(function(err){
                    notifications.showError(err.responseJSON.description);
              
                })
        }

    }

    let getLogout = function (context) {

        auth.logout()
            .then(function () {
                sessionStorage.clear();
                notifications.showSuccess('Successful Logout')
                context.redirect('#/home')
            }).catch(function(err){
                notifications.showError(err.responseJSON.description);
              
            })
    }

    return {
        getLogin,
        postLogin,
        getRegister,
        getLogout,
        postRegister,

    }
}()