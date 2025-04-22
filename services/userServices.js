const { User } = require('../models'); // Import the User model

// Fetch all users
const getUsers = () => {
  return User.findAll() // Sequelize method to fetch all users
    .then((users) => {
      return users; // Return the list of users
    })
    .catch((err) => {
      console.error("Error fetching users:", err); // Logging the error for debugging
      throw new Error("Failed to fetch users. Please try again later.");
    });
};

// Create a new user
const createUser = (username, role) => {
  return User.create({ username, role }) // Sequelize method to insert a new user
    .then((user) => {
      return { id: user.id, username: user.username, role: user.role }; // Returning the newly created user's details
    })
    .catch((err) => {
      console.error("Error creating user:", err); // Logging the error for debugging
      throw new Error("Failed to create user. Please try again later.");
    });
};

// Update a user's role
const updateUserRole = (id, role) => {
  return User.update(
    { role }, // New role value
    { where: { id } } // Condition to find the user by id
  )
    .then(([updatedCount]) => { // updatedCount will be the number of rows affected
      if (updatedCount > 0) {
        return { id, role }; // If user exists and updated, return the new details
      } else {
        throw new Error("User not found or no changes made.");
      }
    })
    .catch((err) => {
      console.error("Error updating user role:", err); // Logging the error for debugging
      throw new Error("Failed to update user role. Please try again later.");
    });
};

// Delete a user
const deleteUser = (id) => {
  return User.destroy({ where: { id } }) // Using Sequelize's destroy method to delete a user
    .then((deletedCount) => { // deletedCount will indicate how many rows were deleted
      if (deletedCount > 0) {
        return { message: "User deleted successfully." }; // If the user was deleted
      } else {
        throw new Error("User not found.");
      }
    })
    .catch((err) => {
      console.error("Error deleting user:", err); // Logging the error for debugging
      throw new Error("Failed to delete user. Please try again later.");
    });
};

module.exports = { getUsers, createUser, updateUserRole, deleteUser };
