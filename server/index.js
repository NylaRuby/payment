const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' }); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Your routes (create-order, verify-payment)
const orderRoutes = require('./routes/order');
const verifyRoutes = require('./routes/verify');
const historyRoutes = require('./routes/history');

// Use the routes
app.use('/create-order', orderRoutes);
app.use('/verify-payment', verifyRoutes);
app.use('/payment-history', historyRoutes);

// Endpoint to securely send the Razorpay API key
app.get("/get-razorpay-key", (req, res) => {
  res.json({ key: process.env.RAZORPAY_KEY_ID });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
