const {DataTypes} = require('sequelize')
const {sequelize} = require('./index')


module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            // 1u432hrjhdrf0kfjdk
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        username:{
            // cilsy123
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            // 47832ksnflksheafjihfgjkf
            type: DataTypes.STRING
        }
    }, {
        tableName: 'users',
        timestamps: false
    })

    user.associate = function(models) {
        user.hasMany(models.todo, {
            as: 'todo',
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }
   

    return user
}