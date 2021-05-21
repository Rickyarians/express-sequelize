const {user} = require('./../../models')
const bcrypt = require('bcrypt')

module.exports = async(req, res, next) => {
    
    console.log(req.body)
    try{


        // tangkep token
        // verify token
        // balikkin view forgot password
   
    } catch (error) {
        return next(error)
    }
}