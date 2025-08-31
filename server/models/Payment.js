const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true // Ensures that each order ID is unique in the DB
    },
    paymentId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['success', 'failed', 'pending'], // Use predefined status values
        default: 'pending'
    },
    method: {
        type: String,
        enum: ['Razorpay', 'UPI', 'Card', 'unknown'],
        default: 'unknown'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Payment', paymentSchema);
