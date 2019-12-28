$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        //Home
        this.get('#/home', homeController.getHome);
        //User
        this.get('#/login', userController.getLogin);
        this.post('#/login', userController.postLogin)
  

        this.get('#/register', userController.getRegister)
        this.post('#/register', userController.postRegister)

        this.get('#/logout', userController.getLogout)

        //Teams
        this.get('#/create', itemController.getCreate);
        this.post('#/create', itemController.postCreate);

        this.get('#/dashboard', itemController.getDashboards)

        this.get('#/details/:id', itemController.getDetails)
        
        this.get('#/edit/:id', itemController.getEdit);
        this.post('#/edit/:id', itemController.postEdit);

        this.get('#/del/:id', itemController.postDel)

   
        this.get('#/donate/:id', itemController.donateEvent);
        this.get('#/profile', itemController.getProfile)
    });

    app.run('#/home');
});