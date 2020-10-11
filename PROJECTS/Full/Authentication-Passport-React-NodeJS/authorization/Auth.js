const jwt = require('jsonwebtoken');

const config = require('../config/config');
const {token_secret} = config;
const User = require('../models/User');

function Authorization() {

}

Authorization.generateAuthToken = async (data) => jwt.sign(
	{ data },
	token_secret,
	{ expiresIn: '10m' }
);

Authorization.findUser = async (data) => User.findOne(data);

Authorization.createUser = async (data) => User.create(data);

// Authorization.sendEmail = async (email, subject, _id, type, password) => {
// 	// това е само примерен email, и html
	
// 	// TODO имейла да се замести с реалния
// 	const from = 'snaikeee@mail.bg';
// 	let secretToken = null;

// 	if(!password) {
// 		secretToken = Authorization.generateAuthToken(_id, 'register/login');
// 	}
	
// 	const types = {
// 		// TODO съобщенията да се премстят в отделен фаил
// 		register: 'Click to confirm your registration',
// 		login: 'Click to login!',
// 	};

// 	// TODO html да се замести с реалния и да се премести в отделен файл
// 	const LoginRegisterHtml = `<br/><br/>
// 	Please verify your email by clicking the following link:
// 	<a href="http://localhost:3000/user/login/:${secretToken}">${types[type]}</a>`;
	
// 	const resetPasswordHtml = `<span>Your password is</span><h3>${password}</h3>`;
	
// 	const html = `Hi there,
// 	${password ? resetPasswordHtml : LoginRegisterHtml}
// 	<br/><br/>
// 	Have a pleasant day.`;
	
// 	// Compose email
// 	const data = {
// 		from,
// 		to: email,
// 		subject,
// 		html
// 	};

// 	// Send email
// 	mailgun.messages().send(data, function (error, body) {
// 		if(error) {
// 			console.log(error); 
// 		}
		
// 		console.log(body);
// 	});
// };


module.exports = Authorization;
