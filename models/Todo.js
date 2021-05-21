const {DataTypes} = require('sequelize')
const {sequelize} = require('./index')


module.exports = (sequelize, DataTypes) => {
    const todo = sequelize.define('todo', {
        id: {
            // 1u432hrjhdrf0kfjdk
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name:{
            // cilsy123
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            // 47832ksnflksheafjihfgjkf
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'todos',
        timestamps: false
    })


    // Todo.belongsTo(User, {
    //     as: 'users',
    //     foreignKey: 'user_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })

    todo.associate = function(models) {
        todo.belongsTo(models.user, {
                as: 'user',
                foreignKey: 'user_id',
                targetKey: 'id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
    }

    return todo
}