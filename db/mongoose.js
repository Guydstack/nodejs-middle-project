const mongoose = require("mongoose");

const uri = process.env.DATABASE_URL;

async function main() {
  try {
   await mongoose.connect(process.env.DATABASE_URL)
   console.log("mongoose Connected!")
  } catch (error) {
    console.log(error)
  }
}

module.exports = main;
