const mongoose = require("mongoose");

const connectDB = async () => {
  // Connect to MongoDB
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`mongoDB connected on ${process.env.PORT}`.rainbow.bold);
};
module.exports = connectDB;
