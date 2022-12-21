// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
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
    product_name: {
      // * Integer.
      type: DataTypes.STRING,
      
      // * Doesn't allow null values.
    allowNull: false,
    },
    price: {
      // * Integer.
      type: DataTypes.DECIMAL,
      
      // * Doesn't allow null values.
    allowNull: false,
    },
    stock: {
      // * Integer.
      type: DataTypes.INTEGER,
      
      // * Doesn't allow null values.
    allowNull: false,
      // * Set as primary key.
    defaultValue: 10,
    },
    category_id: {
      // * Integer.
      type: DataTypes.INTEGER,
      // * Set as primary key.
    references: {
      model: "category",
      key: "id"
    }


      // * Uses auto increment.
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
