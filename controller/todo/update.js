const {todo} = require('./../../models')

module.exports = async(req, res, next) => {
    console.log('berhasil')
    try{
        
    // tangkep data, diantaranya id_todo, name, description, user_id
    const {user} = req
    const {id_todo, name, description} = req.body
    // console.log(id_todo)
    // console.log(name)
    // console.log(description)
    // console.log(user_id)

    // masukkin data array
    // dataarray.map(item => {
    //     await todo.create({
    //         name: item.name,
    //         description: item.description
    //     })
    // })
    


    // cek dulu todo nya ada atau nggak
    const Todo = await todo.findByPk(id_todo)
    console.log(Todo)


    // jika tidak ada lempar pesan error
    if(!Todo) {
        res.status(404).json({
            status: 'failed',
            code : 404,
            message: 'todo not found'
        })
    }

    // jika ada lanjut, update value nya sesuai dengan id todonya

    const updateTodo = await todo.update({
        name,
        description,
        user_id : user.id
    }, {
        where: {
            id: id_todo
        }
    })

    if(updateTodo != 1) {
        res.status(400).json({
            status: 'failed',
            code : 400,
            message: 'todo not update'
        })
    }
    
    console.log(updateTodo)

    // setelah update lempar pesan berhasil update

    const dataTerupdate = await todo.findByPk(id_todo)

    res.status(200).json({
        status: 'success',
        code : 200,
        message: 'success update todo',
        data: dataTerupdate
    })

    } catch (error) {
        return next(error)
    }
}