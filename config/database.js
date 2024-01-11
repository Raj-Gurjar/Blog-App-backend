const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log('DB connected successfully');
  } catch (error) {
    console.error('DB connection error:', error.message);
    process.exit(1); // Exit the process if there is a DB connection error
  }
};

module.exports = dbConnect;
