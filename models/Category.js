const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {

    id: {
      // * Integer.
      type: DataTypes.INTEGER,
      
      // * Doesn't allow null values.
    allowNull: false,
      // * Set as primary key.
    primaryKey: true,
    autoIncrement: true,

      // * Uses auto increment.
    },
    category_name: {
      type: DataTypes.STRING,
    allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
