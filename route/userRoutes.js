const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/create', userController.createUser);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const adminController = require('../controller/userController');

// // Admin routes
// router.post('/create', adminController.createUser);

// module.exports = router;
