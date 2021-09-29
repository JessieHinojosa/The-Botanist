const mongoose = require('mongoose');
require('dotenv').config();
// || 'mongodb://localhost/botanistDB'

mongoose.connect(process.env.MONGODB_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;