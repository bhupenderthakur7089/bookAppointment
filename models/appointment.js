const sequelize = require('sequelize');
const con = require('../util/database');

const Appointment = con.define('appointment', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: sequelize.STRING,
    email: sequelize.STRING,
    contact: sequelize.INTEGER
})

module.exports = Appointment;