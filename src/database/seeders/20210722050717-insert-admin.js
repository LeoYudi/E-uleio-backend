'use strict';

const { generateHash } = require("../../utils/auth");
require('dotenv').config();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query("SELECT email FROM users WHERE email = 'admin'");

    if(users[0].length === 0)
      await queryInterface.bulkInsert('users', [{
        name: 'Admin',
        email: 'admin',
        cpf: '111111111',
        password: await generateHash(process.env.ADMIN_PASSWORD),
        is_admin: 1,
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
