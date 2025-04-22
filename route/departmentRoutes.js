const express = require('express');
const router = express.Router();
const departmentController = require('../controller/departmentController');

router.post('/departments', departmentController.createDepartment); // Create a department
router.get('/departments', departmentController.getDepartments); // Get all departments
router.delete('/departments/:id', departmentController.deleteDepartment); // Delete a department

module.exports = router;
