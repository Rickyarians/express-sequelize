const {todo} = require('./../../models')

module.exports = async(req, res, next) => {
    console.log('berhasil')
    try{
    
    // tangkep dulu inputan, diantaranya name, description, user_id
    const {user} = req
    const {name, description} = req.body
    // console.log(name)
    // console.log(description)
    // console.log(user_id)


    // kita akan masukkin datanya, dengan memanggil model
    const Todo = await todo.create({
        name,
        description,
        user_id : user.id
    }) 

    console.log(Todo)

     // jika gagal memasukkan data ke database, lempar pesan error gagal
    if(!Todo) {
        res.status(404).json({
            status: 'failed',
            code: 404,
            message: 'failed create todo',
        })
    }

    // jika berhasil lempar pesan berhasil
    res.status(201).json({
        status: 'success',
        code: 201,
        message: 'success create todo',
        data: Todo
    })

    

    } catch (error) {
        return next(error)
    }
}