const { Schema, model } = require('mongoose');

const PaymentSchema = new Schema({
    currency: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: false,
        default: 15
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = model('payment', PaymentSchema);
