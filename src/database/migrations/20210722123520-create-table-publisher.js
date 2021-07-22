'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('publisher', {
      id: {

      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('publisher');

  }
};
