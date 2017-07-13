const path = require('path');
const dotenv = require('dotenv');

dotenv.config(path.resolve(__dirname, '..', '.env'));

module.exports = {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
    db: {
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            charset: 'utf8'
        },
        migrations: {
            tableName: 'migrations'
        }
    },

    security: {
        saltRounds: 10,
        jwt: {
            secret: process.env.JWT_SECRET,
            expire: '30d'
        }
    },

    messages: {
        validation: {
            required: 'VALIDATION_REQUIRED',
            unique: 'VALIDATION_UNIQUE',
            max: 'VALIDATION_MAX'
        },
        errors: {
            usernameAlreadyUsed: 'USERNAME_ALREADY_USED',
            invalidPassword: 'INVALID_USERNAME_OR_PASSWORD',
            tokenRequired: 'TOKEN_REQUIRED',
            tokenInvalid: 'TOKEN_INVALID',
            tokenExpired: 'TOKEN_EXPIRED',
            notFound: 'NOT_FOUND',
            forbidden: 'FORBIDDEN',
            badRequest: 'BAD_REQUEST',
            unauthorized: 'UNAUTHORIZED'
        }
    }
};