const sequelize = require('sequelize');
const conn = require('../util/database');

const cart = conn.define('cart', {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = cart;