const controllers = require('../controllers');

module.exports = app => {
  app.get('/', controllers.home.homeGet);
  app.get('/about', controllers.home.aboutGet);
  app.get('/create', controllers.cub.getCreate);
  app.post('/create', controllers.cub.postCreate);
  app.get('/details/:cubId', controllers.cub.details);
  app.get('/search', controllers.home.search);
};