const sequelize = require('sequelize');
const con = new sequelize('nodeDemo', 'root', '12345', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = con;