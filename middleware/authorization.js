require('dotenv').config();

const {user} = require('./../models')
const jwt = require('jsonwebtoken')

const {SECRET_TOKEN} = process.env


exports.authorization = async (req, res, next) => {

    try {

    // tankep header authorization
    const authorization = req.header('Authorization')
    // console.log(authorization)

    // ada token yang dikirimkan atau enggak
    if(!authorization) {
        res.status(404).json({
            status: 'error',
            code : 404,
            message: 'token not found'
        })
    }

    // const kegiatan = [makan,minum,tidur] 
    // kegiatan[1]
    // split token format, Bearer [token], ambil [token] aja
    const token = authorization.split('Bearer ')[1]
    console.log(token)

    // cek token ada / valid nggak
    if(!token) {
        res.status(404).json({
            status: 'error',
            code : 404,
            message: 'invalid token'
        })
    }

    const decodeToken = jwt.verify(token, SECRET_TOKEN)

    console.log(decodeToken)

    // kirim pesan error jika decoded token tidak sesuai
    
    if(!decodeToken.userId) {
        res.status(404).json({
            status: 'error',
            code : 404,
            message: 'invalid token'
        })
    }

    const User = await user.findByPk(decodeToken.userId)

    console.log(User)

    // jika User tidak ada kita balikkan pesan error 

    if(!User) {
        res.status(404).json({
            status: 'error',
            code : 404,
            message: 'invalid token'
        })
    }

    req.user = User 
    return next()



    // jalan yang ini

        
    } catch (error) {
        res.status(401).json({
            status: 'error',
            code : 401,
            message: error.message
        })
    }
}