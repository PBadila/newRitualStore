'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rituals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      imageURL: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      components: {
        type: Sequelize.TEXT
      },
      history: {
        type: Sequelize.TEXT
      },
      suggRitual: {
        type: Sequelize.TEXT
      },
      benefits: {
        type: Sequelize.TEXT
      },
      link1: {
        type: Sequelize.STRING
      },
      link2: {
        type: Sequelize.STRING
      },
      link3: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rituals');
  }
};