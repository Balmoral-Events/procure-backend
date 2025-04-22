require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require('./config/db');
const userRoutes = require("./route/userRoutes");
const orderRoutes = require("./route/orderRoutes");
const departmentRoutes = require('./route/departmentRoutes');
const budgetRoutes = require("./route/budgetRoutes");
const approvalRoutes = require('./route/approvalRoutes');

// const app = express();
// app.use(cors());
// app.use(express.json());
const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.use("/order", orderRoutes);
app.use("/department", departmentRoutes);
app.use("/budget", budgetRoutes);
app.use("/approvals", approvalRoutes);

const testDBConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

testDBConnection().then(() => {
  sequelize.sync({ alter: true }) // Ensure schema is updated
    .then(() => {
      console.log("Database synced.");
      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error("Database sync error:", err));
});



// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const sequelize = require('./config/db')
// const userRoutes = require("./route/userRoutes");
// const orderRoutes = require("./route/orderRoutes");
// const departmentRoutes = require('./route/departmentRoutes');
// const budgetRoutes = require("./route/budgetRoutes");


// // const eventRoutes = require("./routes/eventRoutes");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/user", userRoutes);
// app.use("/order", orderRoutes);
// app.use("/department", departmentRoutes);
// app.use("/budget", budgetRoutes );
// // app.use('/api', orderRoutes);


// const testDBConnection = async () => {
//     try {
//       await sequelize.authenticate();
//       console.log("Database connection established successfully.");
//     } catch (error) {
//       console.error("Unable to connect to the database:", error);
//       process.exit(1);
//     }
//   };
  
//   testDBConnection().then(() => {
//     sequelize.sync()
//       .then(() => {
//         console.log("Database synced.");
//         app.listen(process.env.PORT, () => console.log("Server running on port 5000"));
//       })
//       .catch(err => console.error("Database sync error:", err));
//   });