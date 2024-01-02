const mongoose = require("mongoose");

const uri = 'mongodb+srv://dahannaturedesign:Epz2WBru5Swz6ak8@cluster0.sbnnh2t.mongodb.net/Resturant';

async function main() {
  try {
   await mongoose.connect(uri)
   console.log("mongoose Connected!")
  } catch (error) {
    console.log(error)
  }
}

module.exports = main;
