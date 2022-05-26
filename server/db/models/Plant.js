const { Sequelize } = require('sequelize')
const { db } = require("../index");

const Plant = db.define('plant', {
  plantName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  potSize: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  care: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 15.99
  },
  qty: {
    type: Sequelize.DECIMAL,
    defaultValue: 1,
    allowNull: false,
    validate: {
      max: 100,
      min: 0
    }
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:
      'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63919/potted-plant-clipart-xl.png'
  }
})

module.exports = Plant