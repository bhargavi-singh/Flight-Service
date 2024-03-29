'use strict';
const {
  Model
} = require('sequelize');

const {enums} = require('../utils/common')
const {BUSINESS,ECONOMY,FIRST_CLASS,PREMIUM_ECONOMY} = enums.SEAT_TYPE
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
       
      })
    }
  }
  Seat.init({
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    row: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    col:{
      type:DataTypes.STRING,
      allowNull:false
    },
    type: {
      type:DataTypes.ENUM,
      values:[BUSINESS,ECONOMY,FIRST_CLASS,PREMIUM_ECONOMY],
      allowNull:false,
      defaultValue:'economy'
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};