const mongoose = require('mongoose');
const { Schema } = mongoose;


const reviewSchema = mongoose.Schema({
    name: { type: String, require: true},
    comment: {type: String, require: true}

})


const productSchema = new Schema({
  // user is to keep track of which admin created product
  user: {
     type: Schema.Types.ObjectId,
     required: true,
     ref: 'User'
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  reviews : [reviewSchema],
  numReviews: {
    type: Number,
    required: true,
    min: 0.99
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  countInStock: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: String,
    required: true

  },
  isFeatured: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
