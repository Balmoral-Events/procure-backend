const Budget = require('../models/budgetModel');

// Get the budget (limit to 1)
exports.getBudget = async (req, res) => {
  try {
    const budget = await Budget.findOne();
    if (!budget) {
      return res.status(404).json({ error: 'Budget not found' });
    }
    res.status(200).json(budget);
  } catch (err) {
    res.status(500).json({ error: 'Database error: ' + err.message });
  }
};

// Update the budget (limit to id = 1)
exports.updateBudget = async (req, res) => {
  const { monthly, quarterly, yearly } = req.body;
  try {
    const [updatedCount] = await Budget.update(
      { monthly, quarterly, yearly },
      { where: { id: 1 } } // Assuming there's only one budget row
    );

    if (updatedCount > 0) {
      res.status(200).json({ monthly, quarterly, yearly });
    } else {
      res.status(404).json({ error: 'Budget not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Database error: ' + err.message });
  }
};




// const Budget = require('../models/budgetModel');

// // Get the budget (limit to 1)
// exports.getBudget = async (req, res) => {
//   try {
//     const budget = await Budget.findOne();
//     if (!budget) {
//       return res.status(404).json({ error: 'Budget not found' });
//     }
//     res.status(200).json(budget);
//   } catch (err) {
//     res.status(500).json({ error: 'Database error: ' + err.message });
//   }
// };

// // Update the budget (limit to id = 1)
// exports.updateBudget = async (req, res) => {
//   const { monthly, quarterly, yearly } = req.body;
//   try {
//     const [updatedCount] = await Budget.update(
//       { monthly, quarterly, yearly },
//       { where: { id: 1 } } // Assuming there's only one budget row
//     );

//     if (updatedCount > 0) {
//       res.status(200).json({ monthly, quarterly, yearly });
//     } else {
//       res.status(404).json({ error: 'Budget not found' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: 'Database error: ' + err.message });
//   }
// };




// const sequelize = require('../config/db'); ;

// exports.getBudget = (req, res) => {
//   db.query("SELECT * FROM budget LIMIT 1", (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: "Database error" });
//     }
//     res.json(results[0]);
//   });
// };

// exports.updateBudget = (req, res) => {
//   const { monthly, quarterly, yearly } = req.body;
//   db.query(
//     "UPDATE budget SET monthly = ?, quarterly = ?, yearly = ? WHERE id = 1",
//     [monthly, quarterly, yearly],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Database error" });
//       }
//       res.json({ monthly, quarterly, yearly });
//     }
//   );
// };
