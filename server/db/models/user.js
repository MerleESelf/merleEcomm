const { DataTypes } = require("sequelize");
const { db } = require("../index");

const User = db.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      get() {
        return () => this.getDataValue('password')
      }
    },
    // salt: {
    //   type: DataTypes.STRING,
    //   get() {
    //     return () => this.getDataValue('salt')
    //   }
    // },
    // googleId: {
    //   type: DataTypes.STRING
    // },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
  
  module.exports = User