const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    console.log("MongoDB DID NOT connect");
    process.exit(1);
  }
};

module.exports = connectDB;
