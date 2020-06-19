$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        //Home
        this.get('#/home', homeController.getHome);
        //User
        this.get('#/login', userController.getLogin);
        this.post('#/login', userController.postLogin)

        this.get('#/logout', userController.getLogout)

        this.get('#/register', userController.getRegister)
        this.post('#/register', userController.postRegister)

        //Teams
        this.get('#/create', itemController.getCreate);
        this.post('#/create', itemController.postCreate);

        this.get('#/details/:id', itemController.getDetails)
        
        this.get('#/edit/:id', itemController.getEdit);
        this.post('#/edit/:id', itemController.postEdit);

        this.get('#/del/:id', itemController.postDel)

   
        this.get('#/join/:id', itemController.joinEvent);
        this.get('#/profile', itemController.getProfile)
    });

    app.run('#/home');
});