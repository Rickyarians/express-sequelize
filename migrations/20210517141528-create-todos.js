'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('todos', {   
      
      
      id: {
          type: Sequelize.UUID,
          default: Sequelize.UUID4,
          primaryKey: true
        },
    name: 
        {
          type: Sequelize.STRING(50),
          allowNull: false
        },
    description: 
        {
          type: Sequelize.STRING,
          allowNull: false
        },
   user_id: 
        {
          type: Sequelize.UUID,
          references: {
            model: 'users',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
      });
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('todos');
  
  }
};
