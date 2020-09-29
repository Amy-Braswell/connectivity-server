require("dotenv").config()
const mongoose = require('mongoose');


const MONGO_URI = process.env.MONGO_URI;

const connectDb = () => {
  return mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
    if (err) {
      console.log("Connection to Database failed.");
    }
    else{
      console.log("Database connection successful.");
    }
  });
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

module.exports = connectDb;







