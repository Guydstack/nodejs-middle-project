require('dotenv').config();
const mongoose = require("mongoose");
console.log('MongoDB URI:', process.env.MONGODB_URI);

const uri = process.env.DATABASE_URL;

async function main() {
  try {
   await mongoose.connect(uri)
   console.log("mongoose Connected!")
  } catch (error) {
    console.log(error)
  }
}

module.exports = main;
