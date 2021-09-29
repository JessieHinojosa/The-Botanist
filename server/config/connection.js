// const{ mongoose } = require('mongoose');


// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MOGO_URI, {
//             useUnifiedTopology: true,
//             useNewUrlParser: true,
//             useCreateIndex: true
//         })
//         console.log(`MongoDB Connected: ${conn.connection.host}`)

//     } catch(error) {
//         console.log(`Error ${error.message}`)
//         process.exit(1)
//     }
// }

// module.exports = connectDB;

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;