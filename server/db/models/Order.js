const {DataTypes} = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Order