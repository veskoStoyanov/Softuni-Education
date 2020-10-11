const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbURL: 'mongodb://localhost:27017/rest-api-db',
        token_secret: process.env.SECRET || 'shhhhh',
        salt_rounds: process.env.SOLT_ROUNDS || 10
    },
    production: {},     
        access: process.env.SECRET || 'shhhhh',
        salt_rounds: process.env.SOLT_ROUNDS || 10
};

module.exports = config[env];