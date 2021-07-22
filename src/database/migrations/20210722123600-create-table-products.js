'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', { id: Sequelize.INTEGER });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');

  }
};
