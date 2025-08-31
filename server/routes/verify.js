const express = require('express');
const crypto = require('crypto');
const Payment = require('../models/Payment');
const router = express.Router();

router.post('/', async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount, method } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return res.status(400).json({ success: false, message: 'Missing required parameters' });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_SECRET)
        .update(body)
        .digest('hex');

    if (expectedSignature === razorpay_signature) {
        try {
            const payment = new Payment({
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                amount,
                status: 'success',
                method: method || 'unknown',
                createdAt: new Date()
            });

            await payment.save();
            res.json({ success: true });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Database error' });
        }
    } else {
        console.log('❌ Signature verification failed');
        res.status(400).json({ success: false, message: 'Invalid signature' });
    }
});

module.exports = router;
