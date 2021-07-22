'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', { id: Sequelize.INTEGER });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');

  }
};
