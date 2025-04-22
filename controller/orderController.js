const User = require("../models/orderModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Order = require('../models/orderModel'); // Import your Order model

exports.createOrder = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Log the request body for debugging

    const { item, quantity, unitPrice, department } = req.body;

    // Validate the incoming data
    if (!item || !quantity || !unitPrice || !department) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Calculate the total price
    const totalPrice = quantity * unitPrice;

    // Create a new order in the database
    const newOrder = await Order.create({
      item,
      quantity,
      unitPrice,
      totalPrice,
      department
    });

    // Send success response with the created order
    return res.status(201).json({
      message: "Order created successfully!",
      order: newOrder
    });

  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ error: error.message });
  }
};





// const Order = require("../models/orderModel");

// exports.createOrder = async (req, res) => {
//   try {
//     console.log("Request Body:", req.body); // Log the request body

//     const { item, quantity, unitPrice, department } = req.body;

//     // Validate the incoming data
//     if (!item || !quantity || !unitPrice || !department) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Calculate the total price
//     const totalPrice = quantity * unitPrice;

//     // Create a new order in the database
//     const newOrder = await Order.create({
//       item,
//       quantity,
//       unitPrice,
//       totalPrice,
//       department
//     });

    // Send success response with the created order
//     return res.status(201).json({
//       message: "Order created successfully!",
//       order: newOrder
//     });

//   } catch (error) {
//     console.error("Error creating order:", error);
//     return res.status(500).json({ error: error.message });
//   }
// };


// // Create an order
// exports.createOrder = async (req, res) => {
//   try {
//     const { item, quantity, unitPrice, department } = req.body;
//     const totalPrice = (quantity * unitPrice).toFixed(2);

//     const order = await Order.create({
//       item,
//       quantity,
//       unitPrice,
//       totalPrice,
//       department
//     });

//     res.status(201).json(order);
//   } catch (err) {
//     console.error("Error creating order:", err);
//     res.status(500).json({ error: "Database error" });
//   }
// };

// // Get all orders
// exports.getOrders = async (req, res) => {
//   try {
//     const orders = await Order.findAll(); // Fetch all orders using Sequelize
//     res.json(orders);
//   } catch (err) {
//     console.error("Error fetching orders:", err);
//     res.status(500).json({ error: "Database error" });
//   }
// };

// // Update order status
// exports.updateOrderStatus = async (req, res) => {
//   try {
//     const { id, status } = req.body;

//     const [updatedCount] = await Order.update(
//       { status },
//       { where: { id } }
//     );

//     if (updatedCount > 0) {
//       res.json({ id, status });
//     } else {
//       res.status(404).json({ error: "Order not found" });
//     }
//   } catch (err) {
//     console.error("Error updating order status:", err);
//     res.status(500).json({ error: "Database error" });
//   }
// };


// exports.createOrder = (req, res) => {
//   const { item, quantity, unitPrice, department } = req.body;
//   const totalPrice = (quantity * unitPrice).toFixed(2);
//   db.query(
//     "INSERT INTO orders (item, quantity, unitPrice, totalPrice, department) VALUES (?, ?, ?, ?, ?)",
//     [item, quantity, unitPrice, totalPrice, department],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Database error" });
//       }
//       res.status(201).json({ id: result.insertId, item, quantity, unitPrice, totalPrice });
//     }
//   );
// };

// exports.getOrders = (req, res) => {
//   db.query("SELECT * FROM orders", (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: "Database error" });
//     }
//     res.json(results);
//   });
// };

// exports.updateOrderStatus = (req, res) => {
//   const { id, status } = req.body;
//   db.query(
//     "UPDATE orders SET status = ? WHERE id = ?",
//     [status, id],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Database error" });
//       }
//       res.json({ id, status });
//     }
//   );
// };
