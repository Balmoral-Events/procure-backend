const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController'); // Ensure correct path

// Route to create a new order
router.post('/create', orderController.createOrder);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const orderController = require('../controller/orderController');

// // Create an order
// router.post('/orders', orderController.createOrder);

// // Get all orders
// router.get('/orders', orderController.getOrders);

// // Update order status
// router.put('/orders/status', orderController.updateOrderStatus);

// module.exports = router; // ✅ Make sure only the router is exported
