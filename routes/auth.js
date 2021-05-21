var express = require('express');
var router = express.Router();
const authController = require('./../controller/auth')
const loginController = require('./../controller/auth/login')

/* GET users listing. */
router.post('/', authController.register);
router.post('/login', authController.login);
// router.post('/login', loginController)
router.post('/tangkeptoken', authController.tangkeptoken)

module.exports = router;
