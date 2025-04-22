const express = require('express');
const { createApproval, updateApproval } = require('../controller/approvalController');

const router = express.Router();

// Create new approval
router.post('/approvals', createApproval);

// Update existing approval
router.put('/approvals/:id', updateApproval);

module.exports = router;
