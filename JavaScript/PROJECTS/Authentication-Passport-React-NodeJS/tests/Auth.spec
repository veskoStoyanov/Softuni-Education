/**
 * Unit tests for Authorization functionality
 * 
 * Copyright (C) 2020, InsInCloud LLC
 */

const config = require('../specs/spec-config');
const SERVICE_URL = process.env.SERVICE_URL || "http://127.0.0.1:5000/";

const Token = require('../src/core/models/Token');
const User = require('../src/core/models/User');

const Core = require("../src/core");
const Auth = require('../src/core/Authorization');
const usersFake = require('../db/users.fake.json').data;

const restoreDb = async () => Promise.all([
	User.deleteMany().then(() => User.insertMany(usersFake))
]);

console.log(`Server URL to be used: '${SERVICE_URL}'`);

describe("Authorization testing", () => {
	beforeAll(() => Core.Db.connect(config));
	beforeAll(() => restoreDb);
	afterAll(() => restoreDb().then(() => Core.Db.disconnect()));
    
	describe('Tokens', () => {
		beforeAll(() => Token.deleteMany());

		const _id = '1';
		let token = null;
		let tokens = null;

		it('generateAuthToken', async () => {
			token = await Auth.generateAuthToken(_id);

			expect(typeof token).toBe('string');
			expect(token.split('.').length).toBe(3);
		});

		it('AddTokenToDb', async () => {	
			await Auth.AddTokenToDb(token);
			tokens = await Token.find();
            
			expect(tokens.length).toBe(1);

			expect(typeof token).toBe('string');
			expect(token.split('.').length).toBe(3);
		});

		it('removeToken', async () => {
			await Auth.removeToken(token);
			
			tokens = await Token.find();
        
			expect(tokens.length).toBe(0);
		});
	});

	describe('Additional functions', () => {
		const email = 'nobody@nowhere.com';
		let _id = null;
		let user = null;
        
		it('findUser', async () => {
			user = await Auth.findUser({ email });

			expect(user.alias).toBe('nobody');
			expect(user.active).toBeFalsy();
		});

		it('createUser', async () => {
			user = await Auth.createUser({
				email: 'user@mail.bg',
				password: '123456',
				alias: 'userwons'
			});

			expect(user.email).toBe('user@mail.bg');
			expect(user.active).toBeFalsy();
			expect(user.alias).toBe('userwons');
            
			_id = user._id;
		});

		it('configResponse', async () => {
			const { optCookie, token, refreshToken } = await Auth.configResponse(_id);

			expect(typeof token).toBe('string');
			expect(typeof refreshToken).toBe('string');
			expect(optCookie.httpOnly).toBeTruthy();
		});

		it('removeUser', async () => {
			await Auth.removeUser({ _id });

			const users = await User.find();
        
			expect(users.length).toBe(4);
		});
	});
});
