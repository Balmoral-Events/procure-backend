const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Order = sequelize.define('Order', {
  item: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  unitPrice: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'pending' // Default status is "pending"
  }
}, {
  tableName: 'orders',
  timestamps: false // Disable createdAt and updatedAt fields
});

module.exports = Order;
