const User = require('./User')
const Plant = require('./Plant')
const Order = require('./Order')
const cartDetail = require('./CartDetail')

// Associations
User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(cartDetail)
cartDetail.belongsTo(Order)

Plant.hasMany(cartDetail)
cartDetail.belongsTo(Plant)

module.exports = {
    models: {
      User,
      Plant,
      Order,
      cartDetail
    }
  }