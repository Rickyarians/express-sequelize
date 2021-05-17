
require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USER_DEV,
    "password": null,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST_DEV,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": process.env.DB_NAMEPROD,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
