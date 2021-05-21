require('dotenv').config()

const {user} = require('./../../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const {SECRET_TOKEN} = process.env

module.exports = async(req, res, next) => {
    // console.log('test halo')
    // console.log(req.body.username)
    try{

        // 1. controller menerima informasi username dan password yang dikirimkan user
        // console.log('test halo')
        // console.log(req)
        const {username, password} = req.body
        // const usernameuser = req.body.username
        // const username = req.body.username
        // console.log(username)
        // const password = req.body.password
        // console.log(password)
        // const age = req.body.age
        // console.log(age)
    

        // 2. mencari informasi detail user berdasarkan username
        //   -- sudah dapet username, ini dari req.body
        //   panggil variabel const username
        const User = await user.findOne({
            where : {
                username
            }
        })

        // console.log(User)

        // 3. apabila tidak ditemukan maka akan memberikan response error bahwa user tidak ada
        if(!User) {
            //  throw new Error(
            // 'User with this username not found.'
            // )
            return res.status(404).json({
                status: 'failed',
                code: 404,
                message: "Wrong Username or Password"
            })
        }

        // 4. apabila ditemukan, akan membandingkan plain password yang dikirimkan user
            // dengan hashed password dari database
        const isMatch = await bcrypt.compare(password, User.password)
        console.log(isMatch)


         // 5. jika hasilnya tidak match maka akan memberikan response bahwa password salah
        if(!isMatch){
            return res.status(404).json({
                status: 'failed',
                code: 404,
                message: "Wrong Username or Password"
            })
        }

        
       
        // 6. apabila benar maka akan membuat token yang berisi informasi id dari user yang
        // disebut akses token

        const accesToken = 
            jwt.sign(
                // payload, diusahakan uniq
                {
                    userId: User.id,
                    type: 'admin'
                }, 
                // secret key, patokan, token
                SECRET_TOKEN, 
                // options
                {
                expiresIn: '1h'
        })

        console.log(accesToken)
    
         // 7. memberikan response ke client berupa status, code, message dan data
        res.status(200).json({
            status: 'success',
            code: 200,
            message: 'sucess login',
            // accesToken
            data: {
                access_token: accesToken
            }
        })
       


    } catch (error) {
        return next(error)
    }
}