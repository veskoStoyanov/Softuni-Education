const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");

//в app.js съм инициализирал passport на ред 4, на ред 9 го подавам и тук го приемам
//виж също и ред 33 в app.js съм добавил middleware, който се грижи при всяка смяна на route
//да инициализира наново passportjs
module.exports = function (passport) {
  passport.use(
    'local-signin',
    //по дефолт passportjs очаква username затова му казвам че всъщност ще ползвам email
    new LocalStrategy(  {usernameField: "email" }, async (email, password, done) => {
        let user = await User.findOne({ email });
        if (!user) {
          //във всеки случай трябва да върнем done
          return done(null, false);
        }

        //проверяваме дали паролата съвпада
        let isMatch = await user.matchPassword(password);

        if (!isMatch) {
          //във всеки случай трябва да върнем done
          return done(null, false);
        } 
        //във всеки случай трябва да върнем done
        //ако съвпада пращаме потребителя
          return done(null, user);
      }
    )
  );
};
