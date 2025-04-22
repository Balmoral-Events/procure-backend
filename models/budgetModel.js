const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Budget = sequelize.define('Budget', {
  monthly: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quarterly: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  yearly: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'budget',
  timestamps: false // Disable createdAt and updatedAt fields
});

module.exports = Budget;
