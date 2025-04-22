const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Approval = sequelize.define('Approval', {
  orderName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true, // createdAt and updatedAt fields
});

module.exports = Approval;
