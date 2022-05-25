const { DataTypes } = require('sequelize')
const db = require('../db')

const Plant = db.define('plant', {
  plantName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  potSize: {
    type: DataTypes.ENUM,
    values: ['2"', '4"', '6"', '8"', '10"'],
    allowNull: false
  },
  care: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: 15.99
  },
  qty: {
    type: DataTypes.DECIMAL,
    defaultValue: 1,
    allowNull: false,
    validate: {
      max: 100,
      min: 0
    }
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:
      'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63919/potted-plant-clipart-xl.png'
  }
})

module.exports = Plant