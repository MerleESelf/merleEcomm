const {DataTypes} = require('sequelize')
const { db } = require("../index");

const CartDetail = db.define('cartDetail', {
  quantity: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = CartDetail