const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find({ status: 'success' }).sort({ createdAt: -1 });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
