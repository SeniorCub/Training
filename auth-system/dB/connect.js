// dB/connect.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to database on host ${conn.connection.host}`);
  } catch (error) {
    console.log(`The error is ${error}`);
    process.exit(1); // Exit the process with a failure
  }
};

module.exports = connectDB;