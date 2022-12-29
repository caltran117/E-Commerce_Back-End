const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
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
    tag_name: {
      type: DataTypes.STRING,
    allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
