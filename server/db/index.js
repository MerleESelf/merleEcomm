const { Sequelize, DataTypes } = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/merleecomm");

module.exports = { db };