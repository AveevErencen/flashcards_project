'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Round.init({
    User_id: DataTypes.INTEGER,
    Card_id: DataTypes.INTEGER,
    Result: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};