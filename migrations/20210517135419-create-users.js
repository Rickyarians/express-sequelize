'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users', 
      { 
        id: {
              type: Sequelize.UUID,
              default: Sequelize.UUID4,
              primaryKey: true
            },
        username: 
            {
              type: Sequelize.STRING(50),
              allowNull: false
            },
        password: 
            {
              type: Sequelize.STRING,
              allowNull: false
            },    
      }
    );
     
  },

  down: async (queryInterface, Sequelize) => {
  
     return queryInterface.dropTable('users');
     
  }
};
