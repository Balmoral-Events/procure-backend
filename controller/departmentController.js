const Department = require('../models/departmentModel');

// Create a department
exports.createDepartment = async (req, res) => {
  const { name } = req.body;
  try {
    const department = await Department.create({ name });
    res.status(201).json(department);
  } catch (err) {
    res.status(500).json({ error: "Database error: " + err.message });
  }
};

// Get all departments
exports.getDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.status(200).json(departments);
  } catch (err) {
    res.status(500).json({ error: "Database error: " + err.message });
  }
};

// Delete a department
exports.deleteDepartment = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Department.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: "Department deleted successfully" });
    } else {
      res.status(404).json({ error: "Department not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Database error: " + err.message });
  }
};




// const Department = require('../models/departmentModel');

// // Create a department
// exports.createDepartment = async (req, res) => {
//   const { name } = req.body;
//   try {
//     const department = await Department.create({ name });
//     res.status(201).json(department);
//   } catch (err) {
//     res.status(500).json({ error: "Database error: " + err.message });
//   }
// };

// // Get all departments
// exports.getDepartments = async (req, res) => {
//   try {
//     const departments = await Department.findAll();
//     res.status(200).json(departments);
//   } catch (err) {
//     res.status(500).json({ error: "Database error: " + err.message });
//   }
// };

// // Delete a department
// exports.deleteDepartment = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deleted = await Department.destroy({ where: { id } });
//     if (deleted) {
//       res.status(200).json({ message: "Department deleted successfully" });
//     } else {
//       res.status(404).json({ error: "Department not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ error: "Database error: " + err.message });
//   }
// };



// const sequelize = require('../config/db'); ;

// exports.createDepartment = (req, res) => {
//   const { name } = req.body;
//   db.query(
//     "INSERT INTO departments (name) VALUES (?)",
//     [name],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Database error" });
//       }
//       res.status(201).json({ id: result.insertId, name });
//     }
//   );
// };

// exports.getDepartments = (req, res) => {
//   db.query("SELECT * FROM departments", (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: "Database error" });
//     }
//     res.json(results);
//   });
// };

// exports.deleteDepartment = (req, res) => {
//   const { id } = req.params;
//   db.query("DELETE FROM departments WHERE id = ?", [id], (err, result) => {
//     if (err) {
//       return res.status(500).json({ error: "Database error" });
//     }
//     res.json({ message: "Department deleted successfully" });
//   });
// };
