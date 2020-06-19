const FacebookStrategy = require('passport-facebook');
const User = require('../../models/User');

const APP_ID = '858683987956194';
const APP_SECRET = '8cd4261c5417210ec1b979b42f356043';

module.exports = function(passport) {
    passport.use(new FacebookStrategy({
        clientID: APP_ID,
        clientSecret: APP_SECRET,
        callbackURL: "/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'email']
      },
     async function(accessToken, refreshToken, profile, cb) {
          console.log(accessToken);
          console.log(profile._json);
          let user = await User.findOne({email});

          if(user) {
            return done(err, user,);
        }
        
        const registeredUser = await User.create({
            email: profile._json.email,
            password: profile._json.id
        });

          return done(null, registeredUser);


          
          
        // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
      }
    ));
}