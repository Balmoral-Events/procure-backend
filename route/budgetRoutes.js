const express = require('express');
const router = express.Router();
const budgetController = require('../controller/budgetController');

router.get('/budget', budgetController.getBudget); // Get the budget
router.put('/budget', budgetController.updateBudget); // Update the budget

module.exports = router;
