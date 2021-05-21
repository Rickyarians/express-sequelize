const {todo} = require('./../../models')

module.exports = async(req, res, next) => {
    console.log('berhasil')
    try{
        
        // 1. list / select semua todo di database

        const Todo = await todo.findAll()

        console.log(Todo)

        res.status(200).json({
            status: 'success',
            code : 200,
            message: 'success get all todos',
            data: Todo
        })

    } catch (error) {
        return next(error)
    }
}