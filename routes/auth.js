var express = require('express');
var router = express.Router();
const authHandler = require('./handler/auth/index')

/* GET users listing. */
router.post('/', authHandler.register);
router.post('/login', authHandler.login);

module.exports = router;
