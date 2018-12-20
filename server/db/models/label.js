const Sequelize = require('sequelize')
const db = require('../db')

const Label = db.define('label', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  firstNumber: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  secondNumber: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  operation: {
    type: Sequelize.ENUM('+', '-', '*', '/'),
    allowNull: false
  }
})

module.exports = Label
