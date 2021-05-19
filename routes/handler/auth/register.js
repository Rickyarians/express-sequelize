const {user} = require('./../../../models/')
const bcrypt = require('bcrypt')

module.exports = async(req, res, next) => {
    try{

    const {username, password} = req.body

    console.log(req.body)


    // cek username ada atau nggak
    const User = await user.findOne({
        where: {
            username: username
        }
    })

  
    console.log(User)
     // kalo ada, lempar pesan error
     // variabel konstanta User, nggak kosong
    if(User) {
        // throw new Error(
        //     'User with this username already exist. Please use other username '
        // )
        return res.status(500).json({
            status: 'success',
            code: 500,
            message: "User with this username already exist. Please use other username"
        })
    }

    // encyprt password
    const hashedPassword = await bcrypt.hash(password, 12)


    // masukkan ke database
    await user.create({
        username,
        password: hashedPassword
    })


    // lempar atau balikkan pesan berhasil
    return res.status(201).json({
        status: 'success',
        code: 201,
        message: "Success register User"
    })

    } catch (error) {
        return next(error)
    }
}