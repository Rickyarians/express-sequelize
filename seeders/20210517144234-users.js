'use strict';
const bcrypt = require('bcrypt')
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const password = '12345678'
     return queryInterface.bulkInsert('users', [{
       id: uuid.v4(),
       username: 'johndoe',
       password: bcrypt.hashSync(password, 12)
      },
      {
        id: uuid.v4(),
        username: 'ricky',
        password: bcrypt.hashSync(password, 12)
       },
       {
        id: uuid.v4(),
        username: 'rofi',
        password: bcrypt.hashSync(password, 12)
       },
       {
        id: uuid.v4(),
        username: 'husnul',
        password: bcrypt.hashSync(password, 12)
       },
       {
        id: uuid.v4(),
        username: 'rickyy',
        password: bcrypt.hashSync(password, 12)
       },
       {
        id: uuid.v4(),
        username: 'johndoee',
        password: bcrypt.hashSync(password, 12)
       }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('users', null, {});
  
  }
};
