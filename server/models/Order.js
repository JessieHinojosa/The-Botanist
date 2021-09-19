const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    paymentMethod: {
        type: String,
        required: true
    },
    // paymentResults setup is for paypal if decided
    paymentResult: {
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String}
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        requires:true,
        default: false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt : {
        type: Date
    },
    orderItems: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Product'
        }
    ]
},
{
    timestamps: true
}
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
