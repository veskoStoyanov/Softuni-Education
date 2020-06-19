const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");

module.exports = function (passport) {
  passport.use(
    'local-signup',
    new LocalStrategy(  {usernameField: "email" }, async (email, password, done) => {
// console.log(req.body)

        //в зависимост как пращаме данните от клиента така ги приемаме тук пример:
        //проверяваме дали вече няма регистриран user с този email 
        let user = await User.findOne({email})
        //ако има връщаме съобщение и прекратяваме регистрирването
        if(user) {
            return done(null, false);
        }
        
        //дефинираме какъв user искаме да създадем
        const registeredUser = await User.create({
            email,
            password,
        });

          return done(null, registeredUser);
      }
    )
  );
};
