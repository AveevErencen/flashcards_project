'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Round }) {
      this.hasMany((Round, { foreignKey: 'id' }));
    }
  }
  User.init({
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
