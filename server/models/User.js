const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');


const addressSchema = mongoose.Schema({
  address: {type: String, required: true},
  city: {type: String, required: true},
  postalCode: {type: Number, required: true},
  country: {type: String, required: true},
})

const userSchema = new Schema({
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    shippingAddress: addressSchema,
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    orders: [Order.schema]
  }, 
  {
    toJSON: {
      virtuals: true
    }
  },
  {
    timestamps: true
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  
  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
