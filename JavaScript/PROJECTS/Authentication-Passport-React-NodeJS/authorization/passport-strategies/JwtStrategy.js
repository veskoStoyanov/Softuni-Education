
const Auth = require('../Auth');
const { token_secret } = require('../../config/config');
const JwtStrategy = require('passport-jwt').Strategy,
	ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function (passport) {
	const opts = {};

	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = token_secret;

	passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
		const _id = jwt_payload.data;

		const user = await Auth.findUser({ _id });
		if (!user)
			return done(null, false);

			if(!user.active) {
				user.active = true;
				await user.save();
			}

		return done(null, user);
	}
	));
};
