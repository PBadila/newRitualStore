'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items', [
      { title: 'Cacao Ritual Kit', imageURL: "./imgs/cacaoKit.png",price: 33.33, ritual_id: 1, ingredients: "Cacao, Hapi Ritual journal, Candle, Crystal",options: " Brain, Love, Energy, Calm", createdAt: new Date(), updatedAt: new Date() },
      { title: 'Matcha Ritual Kit', imageURL: "./imgs/matchaKit.png",price: 33.33, ritual_id: 3, ingredients: "Matcha, Hapi Ritual journal, Candle, Crystal", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  },
};