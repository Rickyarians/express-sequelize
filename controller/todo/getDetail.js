const {todo} = require('./../../models')

module.exports = async(req, res, next) => {
    console.log('berhasil')
    try{
        

        // tangkep id

        const { id } = req.params

        console.log(id)

        const Todo = await todo.findByPk(id)

        console.log(Todo)

        if(!Todo){
            res.status(404).json({
                status: 'failed',
                code : 404,
                message: 'todo not found',
                data: Todo
            })
        }

        res.status(200).json({
            status: 'success',
            code : 200,
            message: 'success get detail todo',
            data: Todo
        })
       

    } catch (error) {
        return next(error)
    }
}