const Approval = require('../models/approvalModel');

// Create Approval
const createApproval = async (req, res) => {
  try {
    const { orderName, userName, status, level } = req.body;

    const approval = await Approval.create({
      orderName,
      userName,
      status,
      level
    });

    res.status(201).json(approval);
  } catch (error) {
    res.status(500).json({ error: 'Database error: ' + error.message });
  }
};

// Update Approval
const updateApproval = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const approval = await Approval.findByPk(id);
    if (!approval) {
      return res.status(404).json({ error: 'Approval not found' });
    }

    approval.status = status;
    await approval.save();

    res.status(200).json(approval);
  } catch (error) {
    res.status(500).json({ error: 'Database error: ' + error.message });
  }
};

module.exports = {
  createApproval,
  updateApproval
};




// const sequelize = require('../config/db'); ;

// exports.createApproval = (req, res) => {
//   const { orderId, userId, status, level } = req.body;
//   db.query(
//     "INSERT INTO approvals (orderId, userId, status, level) VALUES (?, ?, ?, ?)",
//     [orderId, userId, status, level],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Database error" });
//       }
//       res.status(201).json({ id: result.insertId, orderId, userId, status, level });
//     }
//   );
// };

// exports.updateApproval = (req, res) => {
//   const { id, status } = req.body;
//   db.query(
//     "UPDATE approvals SET status = ? WHERE id = ?",
//     [status, id],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Database error" });
//       }
//       res.json({ id, status });
//     }
//   );
// };
