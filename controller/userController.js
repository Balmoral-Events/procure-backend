const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.createUser = async (req, res) => {
  try {
    console.log("Request Body:", req.body);  // Log the incoming request body

    const { fullname, email, password, role } = req.body;

    if (!fullname || !email || !password || !role) {
      console.log("Missing fields in request body.");
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.log("User already exists with email:", email);
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
      role
    });

    console.log("User created:", user);  // Log user creation details
    res.status(201).json({ message: "User created successfully!", user });
  } catch (error) {
    console.error("Error creating user:", error);  // Log the error
    res.status(500).json({ error: error.message });
  }
};

// exports.createUser = async (req, res) => {
//   try {
//     console.log("Request Body:", req.body); // Log the request body

//     const { fullname, email, password, role } = req.body;

//     if (!fullname || !email || !password || !role) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Check if user already exists
//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       console.log("User already exists with email:", email);
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       fullname,
//       email,
//       password: hashedPassword,
//       role
//     });

//     console.log("User created:", user); // Log user creation
//     res.status(201).json({ message: "User created successfully!", user });
//   } catch (error) {
//     console.error("Error creating user:", error); // Log detailed error
//     res.status(500).json({ error: error.message });
//   }
// };





// exports.createUser = async (req, res) => {
//   try {
//     console.log("Request Body:", req.body); // Log the request body

//     const { fullname, email, password, role } = req.body;

//     if (!fullname || !email || !password || !role) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       fullname,
//       email,
//       password: hashedPassword,
//       role
//     });

//     res.status(201).json({ message: "User created successfully!", user });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ error: error.message });
//   }
// };



// const User = require("../models/userModel");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// exports.createUser = async (req, res) => {
//   try {
//     const { fullname, email, password, role } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password before saving to the database
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const user = await User.create({
//       fullname,
//       email,
//       password: hashedPassword,
//       role
//     });

//     res.status(201).json({ message: 'User created successfully!', user });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: error.message });
//   }
// };



// const User = require("../models/userModel");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// exports.createUser = async (req, res) => {
//   try {
//     const { fullname, email, password, role } = req.body;

//     const existingAdmin = await Admin.findOne({ where: { email } });
//     if (existingAdmin) {
//       return res.status(400).json({ message: 'Admin already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const admin = await User.create({
//       fullname,
//       email,
//       password: hashedPassword,
//       role
//     });

//     res.status(201).json({ message: 'Admin created successfully!', admin });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
