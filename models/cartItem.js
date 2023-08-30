const sequelize = require('sequelize');
const conn = require('../util/database');

const cartItem = conn.define('cartItem', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        PrimaryKey: true
    },
    title: sequelize.STRING,

});

module.exports=cartItem;