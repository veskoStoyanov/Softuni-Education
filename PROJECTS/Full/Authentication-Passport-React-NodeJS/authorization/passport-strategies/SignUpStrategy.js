const LocalStrategy = require("passport-local").Strategy;
const Auth = require('../Auth');

module.exports = function (passport) {
	passport.use(
		'local-signup',
		new LocalStrategy({ usernameField: "email", passReqToCallback : true }, async (req, email, password, done) => {
			const user = await Auth.findUser({ email });

			if(user) {
				return done(null, false, 'This email is already linked to an existing account.');
			}

			const registeredUser = await Auth.createUser({
				email,
				password,
			});
		
			return done(null, registeredUser);
		})
	);
};
