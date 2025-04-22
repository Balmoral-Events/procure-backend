const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Department = sequelize.define('Department', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'departments',
  timestamps: false // Disable createdAt and updatedAt fields
});

module.exports = Department;
