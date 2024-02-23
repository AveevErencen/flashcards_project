'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    static associate({ User }) {
      this.belongsTo((User, { foreignKey: 'id' }));
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