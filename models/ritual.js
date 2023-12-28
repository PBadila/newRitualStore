'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ritual extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ritual.init({
    title: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    price: DataTypes.FLOAT,
    components: DataTypes.TEXT,
    history: DataTypes.TEXT,
    suggRitual: DataTypes.TEXT,
    benefits: DataTypes.TEXT,
    link1: DataTypes.STRING,
    link2: DataTypes.STRING,
    link3: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ritual',
  });
  return Ritual;
};