const mongoose = require("mongoose");
require('dotenv').config();

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
