const passport = require("passport");
const jwt = require('jsonwebtoken');


function Authorization() {

}

//на ред 2 и 3 си инициализираме passport и jwt
Authorization.login = (req, res, next) => {

        //по дефолт passportjs работи със session, след като ще ползваме JWT 
        //изрочно му казваме че няма да го ползваме
        //'local': казваме името на стратегията която ще позлваме
        passport.authenticate('local-signin', { session: false }, function(err, user, info) {
          if (err) { return next(err) }
            if (!user) {
              //някакъв примерен отговор към клиента
            return res.send(401, { error: 'message' });
          }
        
          //ако потребителя се е аутентикирал успешно създаваме JWT token 
          var token = jwt.sign({ user}, 'shhhhhh');

                  //принтирваме създадения token за проверка
                  console.log(token);

          //тук пращаме отговор към клиента със jwt без cookie + още данни които искаме
          // res.send({ token });
          //или
          //пращаме с cookie "примерен" и пращаме отговор и данни към клиента 
          //res.cookie(config.authCookieName, token, {maxAge: 9000000000, httpOnly: true, secure: false }).send({user});
      
          //това не е важно
          res.redirect("/dashboard");
      
          //тук е много важно да подадем req, res и next
        })(req, res, next);
      }

      Authorization.register = (req, res, next) => {

        passport.authenticate('local-signup', { session: false }, function(err, user, info) {
          if (err) { return next(err) }
            if (!user) {
            
            return res.send(401, { error: 'message' });
          }

          // res.send({user});
        
         
          res.redirect("/users/login");
      
          //тук е много важно да подадем req, res и next
        })(req, res, next);
      }



module.exports = Authorization;