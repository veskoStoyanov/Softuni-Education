let userController = function () {

    let getLogin = function (context) {
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/login/login.hbs')
        })
    }

    let postLogin = function (context) {
        let username = context.params.username;
        let password = context.params.password;
        auth.showLoading();
        auth.login(username, password)
            .then(function (userInfo) {
                sessionStorage.setItem('message', 'You are registration now')
                auth.stopLoading();
                auth.saveSession(userInfo);
                context.redirect('#/home');
            }).catch(auth.handleError)
    }

    const getRegister = function (context) {
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',

        }).then(function () {
            this.partial('./templates/register/register.hbs')
        })
    }

    const postRegister = function (context) {

        auth.showLoading();
        let username = context.params.username;
        let password = context.params.password;
        let rePass = context.params.rePassword;
        auth.showLoading();
        if (username.length < 3) {
            auth.stopLoading()
            auth.showError('User Name has to be at least three symbol');
        } else if (password.length < 6) {
            auth.showError('Password  has to be at least six symbol');
            auth.stopLoading()
        } else if (password !== rePass) {
            auth.showError('Password and rePassword  have to be at the same');
            auth.stopLoading()
        }
        else {
            auth.register(username, password)
                .then(function (userInfo) {
                    auth.stopLoading();
                    auth.saveSession(userInfo);
                    sessionStorage.setItem('message', 'You are registration now')
                    context.redirect('#/home');


                }).catch(auth.handleError)
        }
    }

    let getLogout = function (context) {
        auth.logout()
            .then(function () {
                sessionStorage.clear();
                context.redirect('#/home')
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