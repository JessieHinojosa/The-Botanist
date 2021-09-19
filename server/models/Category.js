const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  indoor: {
    type: Boolean,
    required: true,
  },
  outdoor: {
    type: Boolean,
    required: true,
  }

});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
