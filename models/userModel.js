const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('users', {
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure email is unique
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'users',
  timestamps: true,
});

module.exports = User;



// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db'); // Assuming 'app' holds the sequelize instance

// // Define the User model
// const User = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING, // Assuming the username is a string
//     allowNull: false, // This field cannot be null
//     unique: true, // Ensuring username is unique
//   },
//   role: {
//     type: DataTypes.STRING, // Assuming the role is a string
//     allowNull: false, // This field cannot be null
//   }
// }, {
//   tableName: 'users', // The name of the table in the database
//   timestamps: true, // Sequelize will automatically add 'createdAt' and 'updatedAt' fields
// });

// module.exports = User;



// // const { Sequelize } = require('sequelize');
// // const db = require("../app");

// // const getUsers = () => {
// //   return new Promise((resolve, reject) => {
// //     db.query("SELECT * FROM users", (err, results) => {
// //       if (err) {
// //         reject("Database error: " + err);
// //       } else {
// //         resolve(results);
// //       }
// //     });
// //   });
// // };

// // const createUser = (username, role) => {
// //   return new Promise((resolve, reject) => {
// //     db.query(
// //       "INSERT INTO users (username, role) VALUES (?, ?)",
// //       [username, role],
// //       (err, result) => {
// //         if (err) {
// //           reject("Database error: " + err);
// //         } else {
// //           resolve({ id: result.insertId, username, role });
// //         }
// //       }
// //     );
// //   });
// // };

// // const updateUserRole = (id, role) => {
// //   return new Promise((resolve, reject) => {
// //     db.query(
// //       "UPDATE users SET role = ? WHERE id = ?",
// //       [role, id],
// //       (err, result) => {
// //         if (err) {
// //           reject("Database error: " + err);
// //         } else {
// //           resolve({ id, role });
// //         }
// //       }
// //     );
// //   });
// // };

// // const deleteUser = (id) => {
// //   return new Promise((resolve, reject) => {
// //     db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
// //       if (err) {
// //         reject("Database error: " + err);
// //       } else {
// //         resolve({ message: "User deleted successfully" });
// //       }
// //     });
// //   });
// // };

// // module.exports = { getUsers, createUser, updateUserRole, deleteUser };
