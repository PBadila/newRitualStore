require('dotenv').config()

// console.log('DB_USER:', process.env.DEVELOPMENT_DATABASE_USER);
// console.log('DB_PASSWORD:', process.env.DEVELOPMENT_DATABASE_PASSWORD);
// console.log('DB_NAME:', process.env.DEVELOPMENT_DATABASE_NAME);


module.exports = {
  "development": {
    "username": process.env.DEVELOPMENT_DATABASE_USER,
    "password": process.env.DEVELOPMENT_DATABASE_PASSWORD,
    "database": process.env.DEVELOPMENT_DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres"
  }
}
