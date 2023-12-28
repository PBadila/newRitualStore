'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rituals', [
      { title: 'Cacao', imageURL: "./imgs/cacao.png",price: 66.66, components: "Cacao Kit",history:"Cacao rituals blah blah blah", suggRitual:"When you drink your cacao blah blah blah",benefits:"Cacao does all these amazing things",link1:"http://www.cartoonnetwork.com",link2:"http://www.cvFedEx.render.com",link3:"http://www.nickelodeon.com", createdAt: new Date(), updatedAt: new Date() },
    
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rituals', null, {});
  },
};
