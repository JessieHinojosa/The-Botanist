const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    order: [{
        name: {type: String, required: true},
        qty: {type: Number, required: true},
        image: {type: String, required: true},
        price: {type: String, required: true},
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref: 'Product'
        },
    }],
    shippingAddress: {
        address: {type: String, required: true},
        city: {type: String, required: true},
        postalCode: {type: Number, required: true},
        country: {type: String, required: true},
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
    products: [
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
