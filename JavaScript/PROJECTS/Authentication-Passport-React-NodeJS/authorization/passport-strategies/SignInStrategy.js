const Auth = require('../Auth');
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
	passport.use(
		'local-signin',
		new LocalStrategy({ usernameField: "email", passReqToCallback : true }, async (req, email, password, done) => {
			const loginType = req.params.type;
			
			const user = await Auth.findUser({ email });

			if (!user) {

				if (loginType === 'social') {
					const socialUser = await Auth.createUser({
						email,
						password,
						active: true 
					});

					return done(null, socialUser, 'User has been successfuly loged in!');
				}

				return done(null, false, 'Invalid Credentials!');
			}
			
			if(!user.active) {
				return done(null, false, 'Confirm your email first!');
			}

			const isMatch = await user.matchPassword(password);

			if(!isMatch) {
				return done(null, false, 'Invalid Credentials!');
			}

			return done(null, user, 'User has been successfuly logged in!');
		})
	);
};