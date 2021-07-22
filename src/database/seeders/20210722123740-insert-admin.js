'use strict';
const { generateHash } = require('../../utils/auth');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: 'admin',
      email: 'admin',
      cpf: '1111111',
      password: await generateHash('admin123'),
      is_admin: 1
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
