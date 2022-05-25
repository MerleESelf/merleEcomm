const { Sequelize } = require("sequelize");
const { db } = require("../index");

const User = db.define('user', {
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
    },
    // salt: {
    //   type: Sequelize.STRING,
    //   get() {
    //     return () => this.getDataValue('salt')
    //   }
    // },
    // googleId: {
    //   type: Sequelize.STRING
    // },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  })
  
  module.exports = User