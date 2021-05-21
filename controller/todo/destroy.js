const {todo} = require('./../../models')

module.exports = async(req, res, next) => {
    console.log('berhasil') 
    // console.log(req.params.id)
    // const id = req.params.id
    // console.log(id)
    try{
        
    // tankep id
    const {id} = req.params
    console.log(id)

    await todo.destroy({
        where: {
            id
        }
    })

    return res.status(200).json({
        status: 'success',
        code : 200,
        message: 'Success delete todo'
    })




      

    } catch (error) {
        return next(error)
    }
}