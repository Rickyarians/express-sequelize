const {user} = require('./../../../models/')
const bcrypt = require('bcrypt')

module.exports = async(req, res, next) => {
    try{

    const {username, password} = req.body

    console.log(req.body)

    // const User = await user.findOne({
    //     where: {
    //         username: username
    //     }
    // })

    const User = await user.findAll()
    console.log(User)
   
    if(User == null) {
        throw new Error(
            'User with this username already exist. Please use other username '
        )
    }

    } catch (error) {
        return next(error)
    }
}