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
        // email: {
        //      type: Sequelize.STRING(100),
        //      allowNull: false
        // },
        // refresh_token: {
        //   type: Sequelize.TEXT,
        //   allowNull: false
        // }, 
        // access_token: {
        //   type: Sequelize.TEXT,
        //   allowNull: false
        // },
        // is_subscribed: {
        //   type: Sequelize.BOOLEAN,
        //   allowNull: false
        // }
      }
    );
     
  },

  down: async (queryInterface, Sequelize) => {
  
     return queryInterface.dropTable('users');
     
  }
};
