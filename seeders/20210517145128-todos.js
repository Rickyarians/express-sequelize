'use strict';
const uuid = require('uuid')


module.exports = {
  up: async (queryInterface, Sequelize) => {


    // eksekusi syntax sql
    // ada user nggak di database yang tuju
    // table users
    // cari semua id di table users
    // semua list id dari table users masukkan ke variabel constanta users
    const users = await queryInterface.sequelize.query(
      'SELECT `id` from `users`'
    )
    
    if(users && users.length > 0) {
      return Promise.all(
        users.map((user, index) => queryInterface.bulkInsert('todos', [{
          id: uuid.v4(),
          name: 'Belajar',
          description: '',
          user_id: user[index].id
       },
          {
            id: uuid.v4(),
            name: 'Makan',
            description: '',
            user_id: user[index].id
        }
      ], {}) )
      )
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('todos', null, {});
     
  }
};
