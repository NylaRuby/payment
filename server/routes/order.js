const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET
});

router.post('/', async (req, res) => {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
        return res.status(400).json({ error: 'Invalid amount' });
    }

    try {
        const order = await razorpay.orders.create({
            amount: amount * 100, // convert to paise
            currency: 'INR',
            receipt: 'receipt_order_' + Date.now()
        });

        res.json({ orderId: order.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating order');
    }
});

module.exports = router;
