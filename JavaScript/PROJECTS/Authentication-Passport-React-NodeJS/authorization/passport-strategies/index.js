module.exports = function(passport) {
require('./SignUpStrategy')(passport);
require('./SignInStrategy')(passport);
require('./JwtStrategy')(passport);
};

