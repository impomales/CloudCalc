const Sequelize = require('sequelize')
const db = require('../db')

const Label = db.define('label', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  firstNumber: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  secondNumber: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  operation: {
    type: Sequelize.ENUM('+', '-', '*', '/')
  }
})

module.exports = Label
